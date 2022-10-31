import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { TiStarOutline } from "react-icons/ti"

function Product({ id, title, image, price, rating}) {
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
      {(title === "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback")?<a href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898" target="_blanket">
        <button>Mas info</button>
      </a>:(title === "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl")?<a href="https://www.amazon.co.uk/Kenwood-kMix-Stand-Mixer-Black/dp/B072175JWB" target="_blanket">
        <button>Mas info</button>
      </a>:(title==="Fitbit Charge 5 Advanced Fitness")?<a href="https://www.amazon.com/-/es/integrado-herramientas-seguimiento-frecuencia-incluidas/dp/B09BXDZ9BD/ref=sr_1_29?keywords=smart+watch&qid=1666926559&qu=eyJxc2MiOiI4Ljk2IiwicXNhIjoiOC44MSIsInFzcCI6IjguMzMifQ%3D%3D&sprefix=sma%2Caps%2C235&sr=8-29" target="_blanket"><button>Mas info</button>
      </a>:(title==="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric")?<a href="https://www.serversdirect.co.uk/p/1461951/amazon-echo-3rd-gen-smart-speaker-with-alexa-charcoal-fabric" target="_blanket">
        <button>Mas info</button>
      </a>:(title==="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)")?<a href="https://www.amazon.com/Apple-iPad-12-9-inch-Wi-Fi-128GB/dp/B08CVW3NW3" target="_blanket">
        <button>Mas info</button>
      </a>:<a href="https://www.amazon.co.uk/Samsung-C49RG90-49-inch-Ultrawide-Monitor/dp/B07NL27TCK" target="_blanket">
        <button>Mas info</button>
      </a>}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
