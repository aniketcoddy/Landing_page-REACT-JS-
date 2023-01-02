
import React from "react";
import about from "./About.module.css";
export default function About() {
  return (
    <div className={about.container}>
        <div className={about.container2}>
      <img src="About.png" className={about.logo}/>
      <p className={about.p}>
        Interiart is an award-winning architecture and interior design practice
        based in NYC. We work internationally on projects of residential &
        commercial interior design that require a creative approach. Our
        talented and experienced designers leverage their knowledge and
        expertise to create unique and comfortable interiors for you.<br/><br/> Our team
        knows that interior design can be stressful for the client and we do our
        best to make it as easy as possible. We listen to your needs, ideas, and
        inputs. And most importantly, we make it exciting and enjoyable for our
        clients.
      </p>
      </div>
    </div>
  );
}
