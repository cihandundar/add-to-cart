import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        <img src={productData?.image} alt="" />
      </div>
    </section>
  );
};

export default ProductDetails;
