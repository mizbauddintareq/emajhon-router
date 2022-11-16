import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>This is order {products.length}</h1>
    </div>
  );
};

export default Order;
