import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { TiStarOutline } from "react-icons/ti";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({id, title, image, price, rating, info}) {
  const [{ basket  }, dispatch] = useStateValue();

  const style = {
    'fontWeight': "400",
    'fontSize': "28px",
    'color': "black",
    'textAlign': "center",
    'margin': '10px'
  }

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return(
    <div className="product">
      <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <strong>Price: <small>$</small>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span className="Estrella" key={i}><TiStarOutline/></span>
              ))}
          </div>
        <p>{info}</p>
      </div>
      <img  src={image} alt="" />
      <Link to={`/productDetails/${id}`}>
        <button className="button"><AiFillEye className="icono"/></button>
      </Link>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
