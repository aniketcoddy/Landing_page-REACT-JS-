import React from "react";
import people from "./People.module.css";
export default function People() {
  return (
    <div className={people.container}>
      <div className={people.logo}>
        <img src="What.png" />
      </div>

      <div className={people.content}>
        <div className={people.cards}>
          <div className={people.testi}>
            <div className={people.box}>
              <img src="lady.png" className={people.lady} />
              <p className={people.p}>
                Convallis non proin ac bibendumAt pharetra sed ultrices semper.
                Lectus et ornare ultrices urna in. Id non fringilla dignissim ac
                risus amet eget egestas vestibulum. Aliquet etiam eget nulla
                nulla odio vel
              </p>

              <img src="social.png" className={people.icons} />
              <h1 className={people.line}></h1>
              <div className={people.name}>
                <h1 className={people.h1}>Annet Black</h1>
                <h3 className={people.h3}>Associate</h3>
              </div>
            </div>
          </div>

          <div className={people.testi2}>
            <div className={people.box}>
              <img src="men.png" className={people.men} />
              <p className={people.p}>
                Leo viverra vestibulum amet, scelerisque. Vitae, ultrices mi
                rhoncus porttitor nulla sed sodales. Curabitur tellus massa,
                lacinia non at. Lacus, hac fermentum, viverra tortor, eget. Eget
                egestas eget ultrices vitae.
              </p>

              <img src="social.png" className={people.icons} />
              <h1 className={people.line}></h1>
              <div className={people.name}>
                <h1 className={people.h1}>Marvin McKinney</h1>
                <h3 className={people.h3}>Administrator</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={people.dots}>
            <img  src="Ellipse(4).png"/>
            <img  src="Ellipse(5).png"/>
            <img  src="Ellipse(6).png"/>
            <img  src="Ellipse(7).png"/>
        </div>
      </div>
    </div>
  );
}
