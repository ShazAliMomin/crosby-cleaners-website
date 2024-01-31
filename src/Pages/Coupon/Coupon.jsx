import React from "react";
import "./Coupon.css";

import LimitedTimeCoupon from "../../images/Coupons/CrosbyCoupon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Coupon() {
  return (
    <section className="coupon">
      <h1>Limited Time Coupon</h1>
      <div className="coupon-container">
        <h3>10 Dress Shirts for $1.99 Each (Laundry Only)</h3>
        <FontAwesomeIcon className="download-btn" icon={faDownload} />
        <img src={LimitedTimeCoupon} alt="Current coupon" />
      </div>
    </section>
  );
}

export default Coupon;
