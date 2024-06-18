import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../until/componentsHandle";
import parse from "html-react-parser";
import Contact from "./Contact";

const DetailTourItem = () => {
  const slug = document.location.pathname.split("/")[1];
  const [oneTours, setOneTours] = useState({});
  const fetchTours = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour/${slug}`
      );
      setOneTours(res.data?.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [slug]);

  return (
    <div>
      <div>
        <div className="flex items-center p-2 pl-10 mt-0 text-center bg-gray-100 cursor-pointer">
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <NavLink to="/tour" className="px-2 leading-5">
              Tour
            </NavLink>
          </div>
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <NavLink to="/tour" className="px-2 leading-5">
              Miền tây
            </NavLink>
          </div>
          <div className="flex items-center text-center">
            <span className="leading-5">
              {" "}
              <svg
                width="8"
                height="15"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="px-2 leading-5 uppercase">{oneTours?.name}</span>
          </div>
        </div>
      </div>
      <div className="mx-[6%] mt-[50px] flex flex-col">
        <span className="text-3xl text-[#005294] font-semibold my-2">
          {oneTours?.name}
        </span>
        <div className="flex gap-2 my-2 ">
          <span>Giá tour gốc:</span>
          <span>{oneTours?.price}VNĐ</span>
        </div>
        <NavLink
          to={`/book/${oneTours?.slug}`}
          className=" my-2 bg-[#fb752e] w-[120px] text-center text-white text-xl font-semibold p-2 rounded-3xl hover:opacity-70"
        >
          ĐẶT NGAY
        </NavLink>
      </div>
      <div className="mx-[6%] my-[50px]">
        <span className="text-xl text-[#005294] font-semibold">
          Chương trình tour
        </span>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <img
              src={convertBase64ToImage(oneTours?.image)}
              alt="imgtour"
              className="w-full"
            />
          </div>
          <div className="flex">
            {/* <div className="px-5">
              <div className=" border-4 rounded-full w-[66px] h-[66px] flex items-center justify-center">
                <span className="font-semibold">Ngày 1</span>
              </div>
              <div className="flex items-center h-full ml-[30px]">
                <span className="border-4 w-[4px] h-full"></span>
              </div>
              <div className=" border-4 rounded-full w-[66px] h-[66px] flex items-center justify-center">
                <span className="font-semibold">Ngày 1</span>
              </div>
            </div> */}
            <div
              className="flex flex-col leading-6"
              dangerouslySetInnerHTML={{
                __html: convertBase64ToImage(oneTours?.description),
              }}
            ></div>
          </div>
        </div>
        <div className="mt-8">
          <Contact
            title={"QUÝ KHÁCH CHƯA RÕ VỀ TOUR XIN CỨ HỎI, CHÚNG TÔI SẼ TRẢ LỜI"}
          ></Contact>
        </div>
      </div>
    </div>
  );
};

export default DetailTourItem;
