import React from 'react';
import { css } from "@emotion/react";

const Mapa = () => {
    return(
    <>
    <div className="container" css={`padding-top: 8rem;`} >
    <h2 css={css`text-align:center; font-family: 'Pacifico',cursive;`}>Ubicacion</h2>
        
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120357.2361576659!2d-99.1925409210502!3d19.491594689833267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fee8f858093d%3A0xdf83e4c9aac0f4d4!2sRestaurante%20Los%20Olivos!5e0!3m2!1ses-419!2smx!4v1635251509709!5m2!1ses-419!2smx" width="100%" height="450" style={css`border:0;`} allowfullscreen="" loading="lazy"></iframe>
    </>
    )

}

export default Mapa