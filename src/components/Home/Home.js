import React from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
