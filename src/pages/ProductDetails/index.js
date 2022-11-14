import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StarIcon } from "assets/icons";

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProductData(response.data));
  }, [id]);
  console.log(productData);
  return (
    <section className="details">
      <div className="details__container">
        <div className="details__left">
          <div className="details__left__img">
            <img src={productData?.image} alt="" />
          </div>
        </div>
        <div className="details__right">
          <div className="details__right__title">
            <h3>{productData?.title}</h3>
          </div>
          <div className="details__right__price">
            <p>{productData?.price} $</p>
            <div className="details__right__rating">
              <div style={{ display: "flex" }}>
                <span>{productData?.rating?.rate}</span>
                <div
                  style={{
                    position: "relative",
                    top: "5px",
                    marginInline: "10px",
                  }}
                  className="details__right__rating__icon"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
