import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "context/Context";
import Spinner from "assets/images/spinner.gif";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => setItem(response.data));
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="container__loading">
          <img src={Spinner} alt="" />
        </div>
      ) : (
        item?.products?.map((shopping) => (
          <div key={shopping?.id} className="content">
            <Link to={`/products/${shopping?.id}`}>
              <div className="wrapper">
                <div className="wrapper__image">
                  <img src={shopping?.thumbnail} alt={shopping?.name} />
                </div>
                <div className="wrapper__title">
                  <h4>{shopping?.title}</h4>
                </div>
                <div className="wrapper__text">
                  <p>{shopping?.description}</p>
                </div>
                <span>{shopping?.price} $</span>
                <div className="wrapper__text__mobile">
                  <p>{shopping?.price} $</p>
                </div>
              </div>
            </Link>
            <div className="btn">
              <button onClick={() => addToCart(shopping)}>Add to Cart</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
