import React, {useState,useEffect} from 'react';
import { css } from '@emotion/react';
import useDetallePlatillos from '../hooks/useDetallePlatillos';


const Pedido = ({pedido, detalles}) => {
const [busqueda, busquedaInput] = useState('');

const [filtro,setfiltro]= useState([]);
const [checkbox,setCheckbox] = useState([]);

let detallesPlatillos = useDetallePlatillos;
let busqueda1 = [];
let apilar = [];
let apilarTitulos = [];
let titulos = [];




 function Alerta(e){
    //filtro inicial
    busqueda1 = detalles.filter((f)=> f.info == e)
   
    apilar = busqueda1.map(g=>({
        TITULO:g.info,
        DETALLES:g.details,
        PRECIO:g.precio,
        id:g.id
    }))
    
    if(apilar.length<1){
        setfiltro(apilar)
    }else{
        setfiltro(filtro.concat(apilar))
    }
   
} 
 
function Titulo(e){
    titulos = e
    
    if(titulos.length<1){
        setCheckbox(e)
    }else{
        setCheckbox(checkbox.concat(e))
    }
    
    console.log(checkbox)
} 



    return ( <div css={`padding-top:6rem;`}>
        
     <div id="test" className="container">
                        <h1 css={css`text-align:center;`}>TU PEDIDO</h1>
                        <small>A continuacion tienes tus productos, selecciona personalizar producto si deseas agregar algo al platillo</small>
                        <div><br/></div>
                        <form action="http://localhost:3000/gatsby" method="POST">
                        <div className="row">
                        <div className="col"><label>Alimento:</label></div>
                        <div className="col"></div>
                      
                         
                         </div>
      {pedido.map((e) => (
                   
                     <>
                     
                     <div className="row">
                         <div className="col">
                            <div className="form-group"><input type="text"   disabled className="form-control"  value={e.titulo}/></div>
                            <div className="form-group"><input type="hidden" name="titulo"   className="form-control"  value={e.slug}/></div>
                         </div>
                       
                         <div className="col">
                             <input  value="PERSONALIZAR PRODUCTO" className="form-control btn btn-warning"  type="button" onClick={() => Alerta(e.slug)} />
                         </div>

                        
                      </div>   
                      <div css={css`height:1rem;`}></div>
                     </>
                   
                ))}
                <br/>
                <h3 css={css`text-align:center;`}>Detalles (Marque la casilla para seleccionar el producto)</h3>
                        <div className="container">
                       
                       
                        {filtro.length>0? filtro.map((x) => (<div className="form-check"><input type="checkbox"  className="form-check-input" name="extras" value={x.id} onSubmit={()=> Titulo(x.TITULO+x.DETALLES)}/><label className="form-check-label"><p>{(x.TITULO).toUpperCase()}- {(x.DETALLES).toUpperCase()} - $ {x.PRECIO}.00 </p></label></div>)): null} 
                      
                         </div>
               
                <div className="row"> <label>Datos entrega:</label>
                             
                                <div className="col-md-4"><input type="text" required name="nombre" className="form-control" placeholder="Nombre"   /></div>
                                <div className="col-md-4"> <input type="text"  required name="direccion" className="form-control" placeholder="Direccion Entrega"   /></div>
                                <div className="col-md-4"> <input type="number" required name="telefono" className="form-control" placeholder="Telefono Cliente"   /></div>
                               
                                
                               
                           
                        </div>
                        <br/>
                <input type="submit" className="btn btn-danger form-control" value="Realizar pedido"/>
                        
                </form>
                </div>
                <div>
                    <div  css={css`text-align:center; `}>
                        <br/>
                        <h2>ACEPTAMOS</h2>
                        
                    </div>
           
                </div>
    </div> );
}
 
export default Pedido;