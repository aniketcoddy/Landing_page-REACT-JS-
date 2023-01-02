import app from "./App.module.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Mid from "./components/Mid";
import People from "./components/People";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className={app.container}>
          <Mid />
          <Image />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <div>
          <Services />
        </div>
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <People/>
      </div>
      <div>
        <Questions/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
