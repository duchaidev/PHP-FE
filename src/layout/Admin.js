import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  const slug = document.location.pathname;
  useEffect(() => {
    if (slug === "/admin") {
      document.location.pathname = "/admin/manageInWeb";
    }
  }, [slug]);
  return (
    <div className="bg-[#f6f6f6] w-full min-h-[100vh]">
      <div className="w-full fixed z-10 h-[60px] bg-white shadow-sm px-[2%] border-b border-blue6">
        <div className="flex items-center justify-between h-full ">
          {/*------------------LOGO-------------------*/}
          <NavLink to={"/"} className="">
            <div className="flex items-center h-full gap-2">
              <img src="logo512.png" alt="" className="h-[42px]" />
              <span className="text-lg font-semibold">DevHouse</span>
            </div>
          </NavLink>
          <div className="flex items-center h-full gap-7">
            <NavLink to="/">
              <button className="px-4 py-2 text-sm font-semibold text-white rounded-sm bg-blue7">
                Trở về trang chủ
              </button>
            </NavLink>
            <svg
              width="1"
              height="27"
              viewBox="0 0 1 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="27"
                stroke="#CFCFCF"
              />
            </svg>
            <button className="cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 2.75C5.5 3.47935 5.21027 4.17882 4.69454 4.69454C4.17882 5.21027 3.47935 5.5 2.75 5.5C2.02065 5.5 1.32118 5.21027 0.805456 4.69454C0.289731 4.17882 0 3.47935 0 2.75C0 2.02065 0.289731 1.32118 0.805456 0.805456C1.32118 0.289731 2.02065 0 2.75 0C3.47935 0 4.17882 0.289731 4.69454 0.805456C5.21027 1.32118 5.5 2.02065 5.5 2.75ZM5.5 11C5.5 11.7293 5.21027 12.4288 4.69454 12.9445C4.17882 13.4603 3.47935 13.75 2.75 13.75C2.02065 13.75 1.32118 13.4603 0.805456 12.9445C0.289731 12.4288 0 11.7293 0 11C0 10.2707 0.289731 9.57118 0.805456 9.05546C1.32118 8.53973 2.02065 8.25 2.75 8.25C3.47935 8.25 4.17882 8.53973 4.69454 9.05546C5.21027 9.57118 5.5 10.2707 5.5 11ZM2.75 22C3.47935 22 4.17882 21.7103 4.69454 21.1945C5.21027 20.6788 5.5 19.9793 5.5 19.25C5.5 18.5207 5.21027 17.8212 4.69454 17.3055C4.17882 16.7897 3.47935 16.5 2.75 16.5C2.02065 16.5 1.32118 16.7897 0.805456 17.3055C0.289731 17.8212 0 18.5207 0 19.25C0 19.9793 0.289731 20.6788 0.805456 21.1945C1.32118 21.7103 2.02065 22 2.75 22ZM13.75 2.75C13.75 3.47935 13.4603 4.17882 12.9445 4.69454C12.4288 5.21027 11.7293 5.5 11 5.5C10.2707 5.5 9.57118 5.21027 9.05546 4.69454C8.53973 4.17882 8.25 3.47935 8.25 2.75C8.25 2.02065 8.53973 1.32118 9.05546 0.805456C9.57118 0.289731 10.2707 0 11 0C11.7293 0 12.4288 0.289731 12.9445 0.805456C13.4603 1.32118 13.75 2.02065 13.75 2.75ZM11 13.75C11.7293 13.75 12.4288 13.4603 12.9445 12.9445C13.4603 12.4288 13.75 11.7293 13.75 11C13.75 10.2707 13.4603 9.57118 12.9445 9.05546C12.4288 8.53973 11.7293 8.25 11 8.25C10.2707 8.25 9.57118 8.53973 9.05546 9.05546C8.53973 9.57118 8.25 10.2707 8.25 11C8.25 11.7293 8.53973 12.4288 9.05546 12.9445C9.57118 13.4603 10.2707 13.75 11 13.75ZM13.75 19.25C13.75 19.9793 13.4603 20.6788 12.9445 21.1945C12.4288 21.7103 11.7293 22 11 22C10.2707 22 9.57118 21.7103 9.05546 21.1945C8.53973 20.6788 8.25 19.9793 8.25 19.25C8.25 18.5207 8.53973 17.8212 9.05546 17.3055C9.57118 16.7897 10.2707 16.5 11 16.5C11.7293 16.5 12.4288 16.7897 12.9445 17.3055C13.4603 17.8212 13.75 18.5207 13.75 19.25ZM19.25 5.5C19.9793 5.5 20.6788 5.21027 21.1945 4.69454C21.7103 4.17882 22 3.47935 22 2.75C22 2.02065 21.7103 1.32118 21.1945 0.805456C20.6788 0.289731 19.9793 0 19.25 0C18.5207 0 17.8212 0.289731 17.3055 0.805456C16.7897 1.32118 16.5 2.02065 16.5 2.75C16.5 3.47935 16.7897 4.17882 17.3055 4.69454C17.8212 5.21027 18.5207 5.5 19.25 5.5ZM22 11C22 11.7293 21.7103 12.4288 21.1945 12.9445C20.6788 13.4603 19.9793 13.75 19.25 13.75C18.5207 13.75 17.8212 13.4603 17.3055 12.9445C16.7897 12.4288 16.5 11.7293 16.5 11C16.5 10.2707 16.7897 9.57118 17.3055 9.05546C17.8212 8.53973 18.5207 8.25 19.25 8.25C19.9793 8.25 20.6788 8.53973 21.1945 9.05546C21.7103 9.57118 22 10.2707 22 11ZM19.25 22C19.9793 22 20.6788 21.7103 21.1945 21.1945C21.7103 20.6788 22 19.9793 22 19.25C22 18.5207 21.7103 17.8212 21.1945 17.3055C20.6788 16.7897 19.9793 16.5 19.25 16.5C18.5207 16.5 17.8212 16.7897 17.3055 17.3055C16.7897 17.8212 16.5 18.5207 16.5 19.25C16.5 19.9793 16.7897 20.6788 17.3055 21.1945C17.8212 21.7103 18.5207 22 19.25 22Z"
                  fill="#555555"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full min-h-[100vh] pt-[60px]">
        <div className="fixed top-[30px] left-0 flex items-center h-full">
          <div className="!w-[250px] px-[8%] py-[10%] bg-white h-[80%] overflow-hidden flex flex-col justify-between border rounded-tr-3xl rounded-br-3xl shadow-lg">
            {/*============================== Quản lí đơn hàng ==============================*/}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                {/* <NavLink to={"dashboard"} className="p-4 rounded-md ">
                  Dashboard
                </NavLink> */}
                <NavLink
                  to={"manageInWeb"}
                  className="p-4 rounded-md itemMenuProfile"
                >
                  Quản lí Tour trang web
                </NavLink>
                <NavLink
                  to={"manage"}
                  className="p-4 rounded-md itemMenuProfile"
                >
                  Quản lí đặt Tour
                </NavLink>

                <NavLink to={"add-tour"} className="p-4 rounded-md ">
                  Thêm Tour
                </NavLink>
                <NavLink
                  to={"add-post"}
                  className="p-4 rounded-md itemMenuProfile"
                >
                  Thêm Bài viết
                </NavLink>
                <NavLink
                  to={"manage-post"}
                  className="p-4 rounded-md itemMenuProfile whitespace-nowrap"
                >
                  Quản lí bài viết
                </NavLink>
                <NavLink
                  to={"support"}
                  className="p-4 rounded-md itemMenuProfile"
                >
                  Hỗ trợ
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-3 border-t">
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/1.png"
                  alt="avt"
                  className="w-[45px] h-[45px] rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Admin</span>
                  <span>admin@gmail.com</span>
                </div>
              </div>
              <a href="https://www.duchai.dev/" target="_blank">
                duchai.dev
              </a>
              {/* <button className="p-3 font-semibold text-white rounded-lg bg-slate-400">
                Log Out
              </button> */}
            </div>
          </div>
        </div>
        <div className="!w-[250px]"></div>
        <div className="flex-1 p-4">
          <Outlet></Outlet>
        </div>
        {/* <div className="p-4 w-[250px] h-full"> */}
        {/* <div className="mt-4 p-4 w-[280px] bg-white"></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Admin;
