import React from "react";
import { convertBase64ToImage } from "../until/componentsHandle";
import { NavLink } from "react-router-dom";

const Tour = ({ data }) => {
  console.log(data);
  return (
    <div className="m-6">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-gray-500 font-medium">Tour chính</h2>
      </div>
      <div className="w-full flex mt-6 ">
        <NavLink to={"/intro"} className="relative w-[50%] object-cover">
          <div className="w-[100%] h-full object-cover">
            <img
              className="w-full  h-full"
              src={convertBase64ToImage(data[0]?.image)}
              alt="imagetour"
            />
          </div>
          <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
            <h2 className="flex  items-center justify-center text-center  text-white text-3xl font-semibold">
              {data[0]?.name}
            </h2>
            <h3 className="flex  items-center justify-center text-center  text-white text-3xl ">
              {data[0]?.duration}
            </h3>
            <h4 className="flex  items-center justify-center text-center  text-white text-xl font-semibold">
              Giá: {data[0]?.price} VNĐ
            </h4>
            <NavLink to={`book/${data[0]?.slug}`}>
              <button className="border rounded-2xl px-2 py-1 mt-2 text-white hover:bg-yellow-400 hover:border-transparent">
                Đặt ngay
              </button>
            </NavLink>
          </div>
        </NavLink>
        <div className="w-[50%] flex object-cover">
          <div className="w-[50%] object-cover h-full grid grid-rows-2">
            <NavLink to={"/intro"} className=" relative w-full row-span-1">
              <div className="w-[100%] flex flex-col object-cover">
                <img
                  className="w-full  h-full"
                  src={convertBase64ToImage(data[1]?.image)}
                  alt="imagetour"
                />
                {/* <img className="w-full  h-full" src="/10.jpg" alt="" /> */}
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white font-semibold">
                  {data[1]?.name}
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white ">
                  {data[1]?.duration}
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-xl font-semibold">
                  Giá: {data[1]?.price} VNĐ
                </h4>
                <NavLink to={`book/${data[1]?.slug}`}>
                  <button className=" text-base border rounded-2xl p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </NavLink>
              </div>
            </NavLink>
            <NavLink to={"/intro"} className="relative w-full row-span-1">
              <div className="w-[100%] h-full flex flex-col object-cover">
                {/* <img className="w-full  h-full" src="/9.jpg" alt="" /> */}
                <img
                  className="w-full  h-full"
                  src={convertBase64ToImage(data[2]?.image)}
                  alt="imagetour"
                />
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white font-semibold">
                  {data[2]?.name}
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white ">
                  {data[2]?.duration}
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-xl font-semibold">
                  Giá: {data[2]?.price} VNĐ
                </h4>
                <NavLink to={`book/${data[2]?.slug}`}>
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </NavLink>
              </div>
            </NavLink>
          </div>
          <div className="w-[50%] object-cover h-full grid grid-rows-2">
            <NavLink to={"/intro"} className="relative w-full row-span-1">
              <div className="w-[100%] h-full flex flex-col object-cover">
                <img
                  className="w-full  h-full"
                  src={convertBase64ToImage(data[3]?.image)}
                  alt="imagetour"
                />
                {/* <img className="w-full  h-full" src="/10.jpg" alt="" /> */}
              </div>
              <div className="absolute  top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white  font-semibold">
                  {data[3]?.name}
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white  ">
                  {data[3]?.duration}
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-xl font-semibold">
                  Giá: {data[3]?.price} VNĐ
                </h4>
                <NavLink to={`book/${data[3]?.slug}`}>
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </NavLink>
              </div>
            </NavLink>
            <NavLink to={"/intro"} className="relative w-full row-span-1">
              <div className="w-[100%] flex flex-col object-cover">
                {/* <img className="w-full  h-full" src="/9.jpg" alt="" /> */}
                <img
                  className="w-full  h-full"
                  src={convertBase64ToImage(data[4]?.image)}
                  alt="imagetour"
                />
              </div>
              <div className="absolute top-[35%] flex flex-col items-center justify-center text-center w-full mb-3 text-white text-[20px]">
                <h2 className="flex  items-center justify-center text-center  text-white  font-semibold">
                  {data[4]?.name}
                </h2>
                <h3 className="flex  items-center justify-center text-center  text-white  ">
                  {data[4]?.duration}
                </h3>
                <h4 className="flex  items-center justify-center text-center  text-white text-xl font-semibold">
                  Giá: {data[4]?.price} VNĐ
                </h4>
                <NavLink to={`book/${data[4]?.slug}`}>
                  <button className=" border rounded-2xl text-base p-[2px] leading-tight mt-0 text-white hover:bg-yellow-400 hover:border-transparent">
                    Đặt ngay
                  </button>
                </NavLink>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
