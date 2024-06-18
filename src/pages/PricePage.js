import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const PricePage = () => {
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

  const handleFormatDate = (date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  return (
    <div>
      <Hearder></Hearder>
      <div className=" bg-[#f9f9f9] py-3 px-[7%]">
        <span>Trang chủ {">"} Bảng giá</span>
      </div>
      <div className="px-[7%] flex justify-center items-center flex-col mt-5 gap-5">
        <h2 className="font-semibold text-[28px] text-[#005294]">Bảng giá</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>TÊN TOUR</th>
              {/* <th>LỊCH TRÌNH TOUR</th> */}
              <th>THỜI GIAN</th>
              <th>LỊCH KHỞI HÀNH</th>
              <th>PHƯƠNG TIỆN</th>
              <th>GIÁ TOUR</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {tours?.length > 0 &&
              tours?.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item?.name}</td>
                  {/* <td>Germany</td> */}
                  <td>{item?.duration}</td>
                  <td>{handleFormatDate(item?.startDates)}</td>
                  <td>{item?.vehicleType}</td>
                  <td>{item?.price}</td>
                  <td className="font-medium text-blue6">
                    <NavLink to={`/${item?.slug}`} className="cursor-pointer">
                      Xem chi tiết
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PricePage;
