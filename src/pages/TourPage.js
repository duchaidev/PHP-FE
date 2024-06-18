import React, { useEffect } from "react";
import Hearder from "../components/Hearder";
import TourDetail from "../components/TourDetail";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const TourPage = () => {
  const [tours, setTours] = React.useState([]);
  const fetchTours = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour`
      );
      setTours(res.data?.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <Hearder></Hearder>
      <TourDetail data={tours}></TourDetail>
      <Footer></Footer>
    </div>
  );
};

export default TourPage;
