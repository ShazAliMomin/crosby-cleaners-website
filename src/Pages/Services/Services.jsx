import React from "react";
import "./Services.css";

import LaundryImg from "../../images/Laundry.png";
import HangedImg from "../../images/HangedClothes.png";
import AlterationImg from "../../images/Alteration.png";

function Services() {
  return (
    <section className="services">
      <h1>Our Services</h1>

      <div className="dry-laundry-container">
        <div className="service-container">
          <div className="service-img">
            <img src={LaundryImg} alt="A laundry machine" />
          </div>
          <div className="service-info">
            <h3 className="service-header">Dry Cleaning & Laundry</h3>
            <div className="service-desc">
              <p>
                Have dirty clothes that need cleaning? We offer quality dry
                cleaning and laundry for most items including:
              </p>
              <ul className="item-list">
                <li>T-shirts</li>
                <li>Button-Up Shirts</li>
                <li>Pants/Jeans</li>
                <li>Jackets/Coats</li>
                <li>Suits</li>
                <li>Blouse</li>
                <li>Sweaters</li>
                <li>Comforters</li>
              </ul>
              <p>
                Items are eligible for same day pick-up if dropped off by 8:45
                PM. Items such as Comforters are excluded from same day pick-up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="alteration-container">
        <div className="service-container-left">
          <div className="service-img">
            <img src={AlterationImg} alt="Alteration tools" />
          </div>
          <div className="service-info">
            <h3 className="service-header-left">Alterations</h3>
            <div className="service-desc">
              <p className="p-alt">
                Bought something that is slightly bigger than you had originally
                thought? Don&apos;t worry! We will alter the size to meet your
                needs.
              </p>
              <ul className="item-list-left">
                <li>T-shirts</li>
                <li>Button-Up Shirts</li>
                <li>Pants/Jeans</li>
                <li>Jackets/Coats</li>
                <li>Suits</li>
                <li>Blouse</li>
              </ul>
              <p className="p-alt">
                Altered items are not eligible for same day pick-up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dry-laundry-container">
        <div className="service-container">
          <div className="service-img">
            <img src={HangedImg} alt="A rack of Shirts" />
          </div>
          <div className="service-info">
            <h3 className="service-header">Other Services</h3>
            <div className="service-desc">
              <p>
                We also have a different process of cleaning certain items
                depending on material or the type of item. This includes items
                made from leather or items such as a bridal dress.
              </p>
              <p>
                Have any questions regarding services on certain items,
                eligiblity for same day pick-up, or any other questions? Please
                feel free to call us during open hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
