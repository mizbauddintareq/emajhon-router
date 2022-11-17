import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const { products, initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="lg:flex w-11/12 mx-auto p">
      <div className="basis-3/4 mt-10">
        <div className="md:w-6/12 mx-auto">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>
      <div className="basis-1/4 lg:ml-10">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
