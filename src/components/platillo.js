import React , {useState,useContext,useEffect} from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Showdown from 'showdown';
import AppContext from '../context/AppContext';
import { useAlert } from "react-alert";
import useDetallePlatillos from "../hooks/useDetallePlatillos";

const Boton = styled.button`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
`;

const PlatilloPreview = ({platillos}) => {
    const alert = useAlert();
    let pila = [];
    const [showText, setShowText] = useState(false);
    const global = useContext(AppContext);
    const onClick = () => setShowText(true);
    //test
    const Cambiar = (platillos) => {
        global.setPedido(pedido => [...global.pedido, platillos]);
        alert.show("Producto agregado");
    }
    
    const {precio,titulo,foto,detalles,slug} = platillos;
   
    return (  
<>
       <div css={css` margin-bottom: 2rem; 
                    margin-top: 2rem; 
                    box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -webkit-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -moz-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);`}>
            <Image fluid={foto.fluid} />
                <div className="container">
                    <br/>
                    <p css={css`font-weight: 700; font-size:2rem; text-align: center;`}>{titulo.toUpperCase() }</p>
                    <p css={css`font-size:1.2rem;`}>Precio: $ {precio} .00</p>
                    <p> Slug: {slug}</p>
                 
                        
                    
                </div>
            
       </div>
       <div>
           <div>
            <div className="row">
                <div className="col">
                    <button className="form-control btn btn-danger" onClick={onClick}>Detalles</button>
                </div>
                <div className="col">
                    <button className="form-control btn btn-warning" onClick={() => Cambiar(platillos)}>Agregar</button>
                   
                </div>
            </div>
                {showText ? <Informacion detalles={detalles} /> : null}
                
            </div>
           
       </div>
      
       </>
    );
  
}
const converter = new Showdown.Converter();

const Informacion = ({detalles}) => 
    <div>
        <br/>
    <p>
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(detalles) }} />
    </p>
    </div>;
 
export default PlatilloPreview;