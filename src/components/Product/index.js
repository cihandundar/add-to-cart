import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "assets/images/spinner.gif";
import { Star } from "assets/icons";

const Product = () => {
  const [item, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setProduct(response.data));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1300);

  return (
    <div className="container">
      {loading && (
        <div className="container__loading">
          <img src={Spinner} alt="" />
        </div>
      )}
      {item.map((shopping) => (
        <div key={shopping.id} className="content">
          <div className="content__image">
            <img src={shopping.image} alt="" />
          </div>
          <div className="content__title">
            <h4>{shopping.title}</h4>
          </div>
          <div className="content__text">
            <p>{shopping.description}</p>
          </div>
          <span>{shopping.price} $</span>
          <div className="star">
            <Star />
          </div>
          <div className="content__btn">
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
