import React from "react";
import { useStateValue } from "../../../Context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import SubTotal from "../SubTotal/SubTotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/BAU/Bank/March/V1/apay.png"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your basket</p>
          </div>
        ) : (
          <div>
            <h2 className="chekout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
