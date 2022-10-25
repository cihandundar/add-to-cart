import axios from "axios";
import React, { useEffect, useState } from "react";

const ShoppingItem = () => {
  const [item, setShoppingitem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setShoppingitem(response.data));
  }, []);

  return (
    <div className="container">
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
        </div>
      ))}
    </div>
  );
};

export default ShoppingItem;
