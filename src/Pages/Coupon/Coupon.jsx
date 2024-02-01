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
        <p>
          Simply download and print the page below and bring it with you the
          next time you come to Crosby Cleaners.
        </p>
        <a className="download-btn" href={LimitedTimeCoupon} download="Coupon">
          <FontAwesomeIcon icon={faDownload} />
        </a>
        <img src={LimitedTimeCoupon} alt="Current coupon" />
      </div>
    </section>
  );
}

export default Coupon;
