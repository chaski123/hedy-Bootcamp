import React from "react";
import '../Components/ProductDetails.css'
import { useStateValue } from "../StateProvider";
import Product from "../Product";

const ProductDetail = ({ info }) =>{
    const [{ detail  }] = useStateValue();
  
    const style = {
        'fontWeight': "800",
        'fontSize': "32px",
        'color': "white",
        'textAlign': "center",
      }
    
    return (
        <>
        <h2 style={style}>Detalles del Producto</h2>
          <div className='details-container'>
          {detail.map(item => (
            <>
            <Product
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            info={item.info}
            />
            <p>{info}</p>
            </>
          ))}
        
        </div>
        </>
    )

}

export default ProductDetail;