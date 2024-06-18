import React from "react";
import { convertBase64ToImage } from "../until/componentsHandle";
import { NavLink } from "react-router-dom";

const Popular = ({ title, data }) => {
  console.log(data);
  return (
    <div className="mt-10">
      <div className="flex justify-center my-4">
        <h2 className="text-4xl font-medium text-gray-500">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 w-[100%]  ">
        {data?.length > 0 &&
          data?.map((item, index) => {
            if (index < 3) {
              return (
                <ItemPopular
                  key={index}
                  img={convertBase64ToImage(item?.image)}
                  title={item?.name}
                  price={item?.price}
                  slug={item?.slug}
                ></ItemPopular>
              );
            }
          })}
      </div>
    </div>
  );
};

function ItemPopular({ img, title, price, slug }) {
  return (
    <NavLink to={`/${slug}`} className="flex items-center justify-center ">
      <div className=" mx-1 w-[100%] h-[100%] object-cover relative ">
        <img
          src={img}
          alt=""
          className="aspect-[5/4] object-cover w-[100%] boder rounded-md opacity-90 "
        />
        <div className="absolute flex flex-col items-center justify-center w-full mb-3 bottom-1">
          <h3 className="flex items-center justify-center text-3xl font-semibold text-center text-white">
            {title}
          </h3>
          <h4 className="flex items-center justify-center text-xl font-semibold text-center text-white">
            Giá: {price} VNĐ
          </h4>
          <NavLink to={`book/${slug}`}>
            <button className="px-2 py-1 text-white border rounded-xl hover:bg-yellow-400 hover:border-transparent">
              Đặt ngay
            </button>
          </NavLink>
        </div>
      </div>
    </NavLink>
  );
}

export default Popular;
