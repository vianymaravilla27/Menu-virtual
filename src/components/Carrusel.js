import React from 'react';
import Image from 'gatsby-image';
import C1 from '../images/C1.png'
import C2 from '../images/C2.png'
import C3 from '../images/C3.png'
import {css} from '@emotion/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carrusel = () => {
    return ( 
    
    <>  
      

    
        <Carousel>
        <div >
            <img src={C1} css={css`width:50%; `} alt="1"/>
          
        </div>
        <div >
            <img src={C2} css={css`width:50%; `} alt="2"/>
            
        </div>
        <div >
            <img src={C3} css={css`width:50%; `} alt="3"/>
           
        </div>

        </Carousel>
    

   

    </> );
}
 
export default Carrusel;