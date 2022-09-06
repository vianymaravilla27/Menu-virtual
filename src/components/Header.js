import React from 'react';
import { Link } from "gatsby"
import { css } from "@emotion/react";
import Facebook from '../images/facebook.svg'
import Instagram from '../images/insta.svg'
import WhatsApp from '../images/whatsapp.svg'
import Telefono from '../images/telefono.svg'
const Header = () => {
    return ( 

      <>
        <div className="alert" css={css`text-align:center;`}>
            <h1 className="display-1" >Restaurante Los Olivos</h1>
        </div>
        <div className="row">
        <div className="col">
        <Link to="/">
        <img src={Facebook} css={css`width: 40%; `} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/tel:5548701797">
        <img src={Instagram} css={css`width: 40%`} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/">
        <img src={WhatsApp} css={css`width: 40%`} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/">
        <img src={Telefono} css={css`width: 40%`} alt="..."/>
      </Link>
        </div>
        </div>
      </>
     );
}
 
export default Header;

