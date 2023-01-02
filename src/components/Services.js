import React from "react";
import service from "./Services.module.css";
export default function Services() {
  return (
    <div className={service.container}>
      <div className={service.logo}>
        <img src="Services.png" />
      </div>
      <div className={service.icon}>
        <div className={service.icon1}>
          <img src="icon.png" className={service.icon2}/>
          <h3 className={service.head}>INTERIOR DESIGN</h3>
          <h4 className={service.text}>
            Interior design services offer a vast variety of solutions for our
            clients’ homes and offices.
          </h4>
        </div>
        <div className={service.icon1}>
          <img src="icon (1).png" className={service.icon2}/>
          <h3 className={service.head}>DECORATIVE SERVICES</h3>
          <h4 className={service.text}>
            Our professional decorators will be happy to help you change your
            house’s inner look.
          </h4>
        </div>
        <div className={service.icon1}>
          <img src="icon (2).png" className={service.icon2}/>
          <h3 className={service.head}>SPACE PLANNING</h3>
          <h4 className={service.text}>
            We create better interior <br/>experiences through our space planning
            services.
          </h4>
        </div>
        <div className={service.icon1}>
          <img src="icon (3).png" className={service.icon2} />
          <h3 className={service.head}>PROJECT MANAGEMENT</h3>
          <h4 className={service.text}>
            We provide proper project management as it’s one of the main success
            factors in interior design.
          </h4>
        </div>
        <div>
        <button className={service.btn}>FREE CONSULTATION</button>
      </div>
      </div>
     
    </div>
  );
}
