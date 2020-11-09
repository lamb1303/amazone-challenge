import React from "react";
import Product from "./../Product/Product";
import { useStateValue } from "../StateProvider";
import "./Home.css";
const Home = () => {
  const [{ showBackrop }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        />
        <div className="home__row">
          <Product
            id="123313"
            price={794.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/51kIaf4HfqL._SX327_BO1,204,203,200_.jpg`}
            rating={4}
            title="Curso Definitivo De Lectura Rápida"
          />
          <Product
            id="1233"
            price={9.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/41nNTj8IYAL._AC_SY400_.jpg`}
            rating={4}
            title="Escudo Gel Antibacterial, 70ml"
          />
        </div>
        <div className="home__row">
          <Product
            id="113"
            price={112.9}
            image={`https://images-na.ssl-images-amazon.com/images/I/81LQqnXLMDL._AC_SY879_.jpg`}
            rating={3}
            title="Lysol Toallitas Desinfectantes spring waterfall 80 Toallitas"
          />
          <Product
            id="13"
            price={1699.0}
            image={`https://images-na.ssl-images-amazon.com/images/I/81pHDGLXcZL._AC_SY445_.jpg`}
            rating={4}
            title="Hyrule Warriors: Age of Calamity - Nintendo Switch - Standard Edition"
          />
          <Product
            id="123"
            price={394.45}
            image={`https://images-na.ssl-images-amazon.com/images/I/4124bI5HGlL._SX327_BO1,204,203,200_.jpg`}
            rating={5}
            title="Sapiens. de Animales a Dioses / Sapiens: A Brief History of Humankind (Español)"
          />
        </div>
        <div className="home__row">
          <Product
            id="4123412"
            price={9495.0}
            image={`https://images-na.ssl-images-amazon.com/images/I/91EAb3fKMBL._AC_SX355_.jpg`}
            rating={5}
            title={`TV Samsung 50" 4K UHD Smart Tv LED UN50TU7000FXZX ( 2020 )`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
