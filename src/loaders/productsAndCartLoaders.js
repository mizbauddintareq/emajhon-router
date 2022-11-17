import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoaders = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((pd) => pd.id === id);

    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};
