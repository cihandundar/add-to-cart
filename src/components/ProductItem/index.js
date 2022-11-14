import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "assets/images/spinner.gif";
import { Link } from "react-router-dom";

const Product = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setItem(response.data));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 700);

  return (
    <div className="container">
      {loading && (
        <div className="container__loading">
          <img src={Spinner} alt="" />
        </div>
      )}
      {item?.map((shopping) => (
        <div key={shopping?.id} className="content">
          <Link to={`/products/${shopping?.id}`}>
            <div className="wrapper">
              <div className="wrapper__image">
                <img src={shopping?.image} alt="" />
              </div>
              <div className="wrapper__title">
                <h4>{shopping?.title}</h4>
              </div>
              <div className="wrapper__text">
                <p>{shopping?.description}</p>
              </div>
              <span>{shopping?.price} $</span>
            </div>
          </Link>
          <div className="btn">
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
