import axios from "axios";
import React, { useEffect, useState } from "react";
import Recep from "assets/images/recep.gif";

const ShoppingItem = () => {
  const [item, setShoppingitem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((response) => setShoppingitem(response.data))
        .then(() => {
          setLoading(false);
        });
    }, 3600);
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="container__loading">
          <img src={Recep} alt="" />
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
        </div>
      ))}
    </div>
  );
};

export default ShoppingItem;
