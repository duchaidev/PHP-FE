import React from "react";
import { convertBase64ToImage } from "../until/componentsHandle";
import { NavLink } from "react-router-dom";

const TourDetail = ({ data }) => {
  return (
    <div>
      <div className="flex items-center p-2 pl-10 mt-0 text-center bg-gray-100 cursor-pointer">
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
        <span className="px-2 leading-5">Tour</span>
      </div>
      <div className="mx-[165px]">
        <div className="my-5 text-2xl leading-5 ">
          <span>Tour</span>
          {/* <h2 className="border w-[50px]  my-1 border-gray-700">13112132</h2>
          <h3 className="border w-[40px] my-1 border-gray-700">3435</h3> */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 p-2 mx-40 my-5">
        {data?.length > 0 &&
          data?.map((item, index) => (
            <Itemtour
              key={index}
              img={convertBase64ToImage(item?.image)}
              location={item?.name}
              cost={item?.price}
              sales={item?.sales}
              slug={item?.slug}
            ></Itemtour>
          ))}
      </div>
    </div>
  );
};

function Itemtour({ img, location, cost, sales, slug }) {
  return (
    <NavLink to={`/${slug}`} className="flex flex-col border rounded-lg ">
      <div>
        <img
          className=" w-full h-[389px] object-cover rounded-tl-lg rounded-tr-lg"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h2>{location}</h2>
        <div className="flex items-center">
          <span>Giá: {cost} VNĐ</span>
          {/* <span className="h-6 mx-2 border border-black "></span>
          <span>Còn: {sales} VNĐ</span> */}
        </div>
        <a href={`book/${slug}`}>
          <button className="rounded-2xl bg-yellow-500 w-[100px] h-8 text-xl text-white flex items-center justify-center my-2 hover:bg-yellow-200">
            Đặt tour
          </button>
        </a>
      </div>
    </NavLink>
  );
}

export default TourDetail;
