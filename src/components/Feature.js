import React from 'react'
import feature from "../img/features/f1.png"
import feature1 from "../img/features/f2.png"
import feature2 from "../img/features/f3.png"
import feature3 from "../img/features/f4.png"
import feature4 from "../img/features/f5.png"
import feature5 from "../img/features/f6.png"
import "../css/All.css"

const Feature = () => {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={feature} alt="feature"></img>
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature1} alt="feature"></img>
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={feature2} alt="feature"></img>
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={feature3} alt="feature"></img>
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={feature4} alt="feature"></img>
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={feature5} alt="feature"></img>
        <h6>24/7 Support </h6>
      </div>
    </section>
  );
}

export default Feature