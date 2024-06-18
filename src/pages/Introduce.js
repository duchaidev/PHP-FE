import React from "react";
import Hearder from "../components/Hearder";
import AboutUs from "../components/AboutUs";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const dataPopular1 = [
  {
    img: "/3.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/4.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },

  {
    img: "/5.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/",
  },
];

const Introduce = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Hearder></Hearder>
      {/* <Popular data={dataPopular1}></Popular> */}
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Introduce;
