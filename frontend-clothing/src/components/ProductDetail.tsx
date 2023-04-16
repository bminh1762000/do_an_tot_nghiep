import React, { useContext, useEffect, useState } from "react";

import Button from "./Button";

import styled from "styled-components";
import { getProductDetailApi } from "../service/product";

const ProductDetail = ({ match, history, addToCart, user }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productId = match.params.productId;
    setLoading(true);
    getProductDetailApi(productId)
      .then((resData) => {
        setProduct(resData.product);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
    // fetch(`http://localhost:8080/products/${productId}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((resData) => {
    //     if (resData.error) {
    //       throw new Error("Fetching product failed.");
    //     }
    //     setProduct(resData.product);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err);
    //   });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ProductDetailContainer>
      <img src={product.imageUrl} alt="Image Products" />
      <DescriptionContainer>
        <h1 className="title">{product.title}</h1>
        <p className="price">{product.price} $</p>
        <p className="description">
          {`Tofu hoodie pop-up try-hard vice cornhole gluten-free keytar mlkshk
          8-bit small batch four loko letterpress. Yr cornhole hoodie tote bag
          wayfarers mustache mumblecore crucifix hell of single-origin coffee
          pinterest. Readymade la croix activated charcoal cray edison bulb.
          Woke marfa helvetica hashtag green juice keffiyeh street art locavore
          four loko brunch flexitarian. Wayfarers fanny pack pork belly
          semiotics VHS affogato mixtape tumblr glossier jianbing freegan
          kinfolk pug. Intelligentsia pug 8-bit microdosing salvia locavore 90's
          umami gastropub iceland church-key marfa readymade 3 wolf moon
          keffiyeh. Tofu seitan mlkshk, try-hard cray hella PBR&B kale chips
          bushwick umami salvia knausgaard four loko pork belly semiotics.`}
        </p>
        <Button
          onClick={() =>
            user.userId ? addToCart(product) : history.push("/login")
          }
        >
          Add to cart
        </Button>
      </DescriptionContainer>
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  img {
    min-width: 22rem;
    max-width: 30rem;
    height: 100%;
  }
`;

const DescriptionContainer = styled.div`
  width: 70%;
  margin-left: 5rem;
  text-align: left;

  .title {
    margin: 2rem 0;
  }

  .price {
    font-size: 1.6rem;
    color: #e17055;
  }
  .description {
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

export default ProductDetail;
