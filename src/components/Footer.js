import React from "react";
import foot from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={foot.container}>
      <div className={foot.box}>
        <div className={foot.contacts}>
          <h1 className={foot.h1}>Contacts</h1>
          <div className={foot.content}>
            <div className={foot.address}>
              <h2 className={foot.h2}>ADDRESS</h2>
              <h3 className={foot.h3}>Nai Basti B14 Bijnor</h3>
            </div>
            <div className={foot.email}>
              <h2 className={foot.h2}>Email</h2>
              <h3 className={foot.h3}>vishnoianiket4@gmail.com</h3>
            </div>
            <div className={foot.phone}>
              <h2 className={foot.h2}>Phone</h2>
              <h3 className={foot.h3}>7017244309</h3>
            </div>
          </div>
        </div>

        <div className={foot.logo}>
          <img src="logo.png" />
        </div>

        <div className={foot.navigation}>
          <h1 className={foot.h1}>NAVIGATION</h1>
          <p className={foot.para}>
            About
            <br />
            Services
            <br />
            Portfolio
            <br />
            Pricing
            <br />
            Testimonials
          </p>
        </div>

        <div className={foot.logomat}>
          <h3 className={foot.h3}>
            We are one of the leading interior design and remodeling studios
            available for all of your residential and commercial interior design
            needs.
          </h3>
          <h2 className={foot.socio}>© 2023 id Studio. All Rights Reserved.</h2>
        </div>

        <div className={foot.social}>
          <img src="social.png" />
        </div>
      </div>
    </div>
  );
}
