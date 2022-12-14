import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);

  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="m-auto my-24 w-4/12 flex flex-col items-center gap-8">
          {/* <img
            src={require("../../../images/cart_empty.png")}
            alt="Logo"
            className="w-24 h-18"
          /> */}
          <h1 className="text-lg text-slate-900 font-semibold bg-slate-200 p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-md text-slate-900 text-center font-light w-4/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-slate-800 text-center bg-orange-400 p-2 rounded-xl">
            <Link to="/">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex mx-3 my-4 border-2 border-slate-700 rounded justify-start h-1/2"
            >
              <img src={product.imgUrl} alt="nesto" width={50} />
              <div className="flex-col ml-8 justify-center">
                <h2 className="font-bold">Naslov</h2>
                <p>blablablalbalblalblalbal</p>
              </div>
              <div className="mx-10 flex justify-center my-3">
                <p className="text-bold">Amout:</p>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3"
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3"
                >
                  +
                </button>
              </div>
              <div className="mx-10 flex justify-center my-3">
                <p className="text-bold">One piece: {product.price} </p>
              </div>
              <div className="mx-10 flex justify-center my-3">
                Total Amout: {product.price * product.quantity}{" "}
                {product.currency}
              </div>
              <button onClick={() => removeFromCart(product.id)}>X</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
