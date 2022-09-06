import React from 'react';
import AppContext from '../context/AppContext';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import styled from "styled-components";
import Helmet from 'react-helmet';
import Footer from "../components/footer";
import Carrito from '../components/carrito';
import Mapa from './contenido-mapa';
import useDetallePlatillos from '../hooks/useDetallePlatillos';
import { css } from '@emotion/react';
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 3500,
    offset: '80px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

const Layout = (props) => {
    const [pedido, setPedido] = React.useState([]);
    const global = {
      pedido: pedido,
      setPedido: setPedido,
    };

    const DetallesPlatillo = useDetallePlatillos();
    

    return ( 
       
    <AlertProvider template={AlertTemplate} {...options}>
        <AppContext.Provider value={global}>
            <Helmet> 
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
            </Helmet>
         
            {props.children}

            {global.pedido.length != 0 ? <Carrito pedido={pedido} detalles={DetallesPlatillo}  setPedido={setPedido} /> : <h2 css={css`text-align:center`}>Agrega productos a tu pedido!</h2>}
            
            <Mapa/>
            <Footer/> 
        </AppContext.Provider>
    </AlertProvider>
     );
}
 
export default Layout;