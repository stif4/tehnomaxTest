import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [good, setGood] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;

    axios.get(url).then((res) => {
      setGood(res.data);
      setIsLoaded(true);
    });
  }, []);
  console.log(good)
  return <>{isLoaded && <div>
    <img src={good.image} alt="" />
    <div>{good.title}</div>
    <div>{good.description}</div>
    <div>{good.category}</div>
    <div>{good.price}</div>
  </div> }</>;
};

export default Product;
