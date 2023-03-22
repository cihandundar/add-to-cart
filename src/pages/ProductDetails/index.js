import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StarIcon } from "assets/icons";
import { useContext } from "react";
import CartContext from "context/Context";
const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProductData(response.data));
  }, [id]);
  console.log(productData);
  return (
    <section className="details">
      <div className="details__container">
        <div className="details__left">
          <div className="details__left__img">
            <img src={productData?.thumbnail} alt="" />
          </div>
        </div>
        <div className="details__right">
          <div className="details__right__title">
            <h3>{productData?.title}</h3>
          </div>
          <div className="details__right__price">
            <p>{productData?.price} $</p>
            <div className="details__right__rating">
              <div className="details__right__rating__center">
                <span>{productData?.rating}</span>
                <div className="details__right__rating__icon">
                  <span>
                    <StarIcon />
                  </span>
                </div>
              </div>
              <div className="details__right__reviews">
                <p>{productData?.rating?.count} Reviews</p>
              </div>
            </div>
          </div>
          <div className="details__right__description">
            <p>{productData?.description}</p>
          </div>
          <div className="details__right__btn">
            <button onClick={() => addToCart(productData)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
