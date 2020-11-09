import React from "react";
import Subtotal from "./../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./ChechoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/33/MX-hq/2017/img/Amazon_Payments/XCM_1080606_Manual_400x39_1080606_mx_amazon_payments_amazoncash_swm_evergreen_17_400x39_jpg_AmazonCash_swm_Evergreen._CB485923805_.jpg"
        />
        <div>
          <h3>Hello: {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
