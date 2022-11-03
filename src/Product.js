import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { TiStarOutline } from "react-icons/ti"
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating, info}) {
  const [{ basket  }, dispatch] = useStateValue();

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

  const itemShow = () => {
    dispatch({
      type: "SHOW_ITEM",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        info: info
      },
    });
  };

  return(
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span className="Estrella" key={i}><TiStarOutline/></span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <p>{info}</p>
      <Link to={"/productDetails"}>
      {id === 1?
        <button onClick={itemShow} className="button"><AiFillEye className="icono"/></button>: id === 2? 
        <button onClick={itemShow}  className="button"><AiFillEye className="icono"/></button>: id === 3? 
        <button onClick={itemShow}  className="button"><AiFillEye className="icono"/></button>: id === 4?
        <button onClick={itemShow}  className="button"><AiFillEye className="icono"/></button>: id === 5?
        <button onClick={itemShow}  className="button"><AiFillEye className="icono"/></button>: <button onClick={itemShow}  className="button"><AiFillEye className="icono"/></button>}
      </Link>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
