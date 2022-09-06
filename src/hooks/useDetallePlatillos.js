import {graphql, useStaticQuery} from 'gatsby';

const useDetallePlatillos = () => {
    const data = useStaticQuery(
        graphql `query  {
            allMongodbMyFirstDatabasePlatillos {
              nodes {
                precio
                slugmongo
                detalles
                mongodb_id
              }
            }
            allDatoCmsProducto {
               
                nodes {
                  activo
                  categoria
                  detalles
                  precio
                  slug
                  titulo
                }
              
            }
          }`
    )
   /*  return data.allMongodbMyFirstDatabasePlatillos.nodes.map(e =>({
            precioPlatillo: e.precio,
            slugPlatillo: e.slug,
            detallePlatillo: e.detalles
    })) */

    let mongo = data.allMongodbMyFirstDatabasePlatillos.nodes;
    let datocms = data.allDatoCmsProducto.nodes;
    let consulta;
    let array2 = [];
    
   consulta =  mongo.filter(data => data.slugmongo==datocms.slug ? datocms.push(data):data);
    
   

    return consulta.map(e =>({
            info: e.slugmongo,
            details: e.detalles,
            precio: e.precio,
            id: e.mongodb_id
    })) 
}

export default useDetallePlatillos;