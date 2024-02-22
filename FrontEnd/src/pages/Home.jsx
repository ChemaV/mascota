import header from "./images/header.png";
import imgServices from "./images/imgServices.png";
import imgProducts from "./images/imgProducts.png";
import { useNavigate } from 'react-router-dom';


function Home() {
  
  const navigate = useNavigate();
  
  const goToProducts = () => {
    navigate("/home/products");
  }

  const goToServices = () => {
    navigate("/home/services");
  }

  return (
    <div className="bodyhome">
      <section className="homeHeader">
        <img src={header} alt="header"></img>
      </section>
      <section className="homeServices">
        <img src={imgServices} alt="services"></img>
        <article className="infoServices">
          <h2 className="title2Home">nuestros servicios</h2>
          <p className="textbody">
            Seded do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="buttonbox">
            <button onClick={goToServices}>cuéntame más</button>
          </div>
        </article>
      </section>
      <section className="homeProducts">
        <article className="infoProducts">
          <h2 className="title2Home">nuestros productos</h2>
          <p className="textbody">
            Seded do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="buttonbox">
            <button onClick={goToProducts}>cuéntame más</button>
          </div>
        </article>
        <img src={imgProducts} alt="products"></img>
      </section>
    </div>
  );
}

export default Home;
