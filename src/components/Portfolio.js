import React from "react";
import port from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <div className={port.container}>
      <div className={port.logo}>
        <img src="Portfolio.png" />
      </div>
      <div className={port.tabs}>
        <div className={port.menu}>
          <div className={port.tab2}>
            <h3 className={port.h31}>ALL</h3>
            <h3 className={port.h32}>COMERCIAL</h3>
            <h3 className={port.h33}>RESIDENTIAL</h3>
            <h3 className={port.h34}>OFFICE</h3>
            <h3 className={port.h35}>OTHER</h3>
          </div>
          <div>
            <h3 className={port.view}>VIEW MORE</h3>
          </div>
        </div>
        <div className={port.image}>
          <div className={port.image1}>
            <img src="img (1).png" className={port.img} />
            <img src="img (2).png" className={port.img} />
            <img src="img (3).png" className={port.img} />
            <img src="img (4).png" className={port.img} />
          </div>
          <div className={port.image2}>
            <img src="img (5).png" className={port.img} />
            <img src="img (6).png" className={port.img} />
            <img src="img (7).png" className={port.img} />
            <img src="img (8).png" className={port.img} />
          </div>
        </div>
      </div>
    </div>
  );
}
