import React from "react";
import price from "./Pricing.module.css";
export default function Pricing() {
  return (
    <div className={price.container}>
      <div className={price.logo}>
        <img src="Pricing.png" />
      </div>
      <div className={price.cards}>
        <div className={price.basic}>
          <div className={price.write}>
            <h3 className={price.h3}>Basic</h3>
            <h1 className={price.h1}>$25</h1>
            <h1 className={price.month}>per month</h1>
        
            <div className={price.small}>
            <h1 className={price.line}></h1>
              <p >
                Interior Design
                <br />
                Project Discussion
                <br />
                Space Planning
                <br /> Online Consultation
              </p>
            </div>
          </div>

          <button className={price.button}><b>BUY NOW</b></button>
          <div></div>
        </div>

        <div className={price.standard}>
          <div className={price.write}>
            <h3 className={price.hp}>Standard</h3>
            <h1 className={price.hp1}>$50</h1>
            <h1 className={price.monthp}>per month</h1>
            
            <div className={price.small}>
            <h1 className={price.line}></h1>
              <p className={price.p}>Color Analysis<br/> Space Planning <br/>Home Remodeling<br/> 3D Interior Model</p>
            </div>
          </div>
          <button className={price.button}><b>BUY NOW</b></button>
        </div>

        <div className={price.premium}>
          <div className={price.write}>
            <h3 className={price.h3}>Premium</h3>
            <h1 className={price.h1}>$80</h1>
            <h1 className={price.month}>per month</h1>
            
            <div className={price.small}>
            <h1 className={price.line}></h1>
              <p>Concept Development<br/> Decoration Services <br/>Interior Architecture <br/>Flooring Installation</p>
            </div>
          </div>

          <button className={price.button}><b>BUY NOW</b></button>
        </div>
      </div>
    </div>
  );
}
