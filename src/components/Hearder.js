import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Hearder = ({ img }) => {
  const slug = document.location.pathname;
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div className="relative w-full min-h-[100px] ">
        <img
          className={`w-[100%] max-h-[100vh] object-cover ${
            slug === "/" ? "" : "hidden"
          }`}
          src={img}
          alt="banner"
        />
      </div>
      <div className="absolute top-0 w-[100%] min-h-[100px] bg-gray-100 bg-opacity-50 ">
        <div className="  border-b w-full h-[50px]  ">
          <div className="flex justify-between items-center px-[200px] h-[50px]">
            <div className="flex items-center h-full">
              <span>
                <svg
                  className="mx-2"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4222 15.883L18.9512 16.415L18.4212 15.883H18.4222ZM5.81617 13.727L6.34417 13.195L5.81517 13.727H5.81617ZM1.69017 3.13496L1.16217 2.60396L1.69117 3.13596L1.69017 3.13496ZM13.6282 12.891L14.0852 12.438L13.0262 11.374L12.5722 11.827L13.6282 12.891ZM15.6142 12.248L17.5252 13.287L18.2402 11.969L16.3302 10.931L15.6142 12.248ZM17.8922 15.351L16.4722 16.764L17.5292 17.827L18.9492 16.415L17.8922 15.351ZM15.6062 17.218C14.1562 17.354 10.4062 17.233 6.34417 13.195L5.28617 14.258C9.71817 18.665 13.9372 18.881 15.7462 18.712L15.6052 17.218H15.6062ZM6.34417 13.195C2.47317 9.34496 1.83117 6.10796 1.75117 4.70296L0.253173 4.78796C0.353173 6.55596 1.14817 10.144 5.28617 14.258L6.34417 13.195ZM7.71917 7.01496L8.00617 6.72896L6.95017 5.66596L6.66317 5.95096L7.72017 7.01396L7.71917 7.01496ZM8.23417 3.09396L6.97417 1.40996L5.77317 2.30996L7.03317 3.99296L8.23417 3.09396ZM2.73317 1.04296L1.16317 2.60296L2.22117 3.66696L3.79017 2.10696L2.73317 1.04296ZM7.19117 6.48296C6.66117 5.95096 6.66117 5.95096 6.66117 5.95296H6.65917L6.65617 5.95696C6.60896 6.00515 6.56643 6.05772 6.52917 6.11396C6.47517 6.19396 6.41617 6.29896 6.36617 6.43196C6.2444 6.77528 6.21408 7.14437 6.27817 7.50296C6.41217 8.36796 7.00817 9.51096 8.53417 11.029L9.59217 9.96496C8.16317 8.54496 7.82317 7.68096 7.76017 7.27296C7.73017 7.07896 7.76117 6.98296 7.77017 6.96096C7.77517 6.94696 7.77717 6.94596 7.77017 6.95496C7.76136 6.96883 7.75131 6.98188 7.74017 6.99396L7.73017 7.00396C7.72694 7.00707 7.72361 7.01007 7.72017 7.01296L7.19017 6.48296H7.19117ZM8.53417 11.029C10.0612 12.547 11.2102 13.139 12.0762 13.271C12.5192 13.339 12.8762 13.285 13.1472 13.184C13.2987 13.1279 13.4405 13.0482 13.5672 12.948C13.5844 12.9336 13.6011 12.9186 13.6172 12.903L13.6242 12.897L13.6272 12.894L13.6282 12.892C13.6282 12.892 13.6292 12.891 13.1002 12.359C12.5702 11.827 12.5732 11.826 12.5732 11.826L12.5752 11.824L12.5772 11.822L12.5832 11.817L12.5932 11.807C12.6052 11.7962 12.6179 11.7861 12.6312 11.777C12.6412 11.77 12.6382 11.773 12.6242 11.779C12.5992 11.788 12.5012 11.819 12.3042 11.789C11.8902 11.725 11.0202 11.385 9.59217 9.96496L8.53417 11.029ZM6.97417 1.40896C5.95417 0.0489599 3.95017 -0.16704 2.73317 1.04296L3.79017 2.10696C4.32217 1.57796 5.26617 1.63296 5.77317 2.30996L6.97317 1.40896H6.97417ZM1.75217 4.70396C1.73217 4.35796 1.89117 3.99596 2.22117 3.66796L1.16217 2.60396C0.625174 3.13796 0.202173 3.89396 0.253173 4.78796L1.75217 4.70396ZM16.4722 16.764C16.1982 17.038 15.9022 17.192 15.6072 17.219L15.7462 18.712C16.4812 18.643 17.0822 18.273 17.5302 17.828L16.4722 16.764ZM8.00617 6.72896C8.99117 5.74996 9.06417 4.20296 8.23517 3.09496L7.03417 3.99396C7.43717 4.53296 7.37717 5.23996 6.94917 5.66696L8.00617 6.72896ZM17.5262 13.288C18.3432 13.732 18.4702 14.778 17.8932 15.352L18.9512 16.415C20.2912 15.082 19.8782 12.859 18.2412 11.97L17.5262 13.288ZM14.0852 12.439C14.4692 12.057 15.0872 11.963 15.6152 12.249L16.3312 10.932C15.2472 10.342 13.9032 10.505 13.0272 11.375L14.0852 12.439Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="text-base text-black">012345698</span>

              <div className="flex items-center px-2 mx-3 text-base border border-solid rounded-3xl">
                <input
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm"
                  className="p-1 placeholder-black bg-transparent outline-none"
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="px-2 py-1 text-base bg-yellow-400 rounded-3xl">
                Liên hệ
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="/Flag_of_Vietnam.svg.webp"
                alt=""
                className="object-cover rounded-full h-7 w-7 "
              />
              <span className="h-6 mx-2 border border-black "></span>
              <img
                src="/images.png"
                alt=""
                className="object-cover rounded-full h-7 w-7 "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-5  border-b px-[200px] h-[50px]">
          <a href="/">
            <img className="w-[45px]" src="/150px.png" alt="logo" />
          </a>
          <div className="flex font-medium text-black ">
            <NavLink to="/">
              <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
                TRANG CHỦ
              </div>
            </NavLink>
            <NavLink to="/intro">
              <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
                GIỚI THIỆU
              </div>
            </NavLink>
            <NavLink to="/tour">
              <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
                TOUR
              </div>
            </NavLink>
            <NavLink to="/price">
              <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
                BẢNG GIÁ
              </div>
            </NavLink>
            {/* <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
              <NavLink to="/book">ĐẶT TOUR</NavLink>
            </div> */}
            <NavLink to="/blog">
              <div className="px-2 py-3 transition-all hover:bg-gray-100 hover:text-green-400">
                BLOG
              </div>
            </NavLink>
            {/* <div className="px-2 py-3 hover:bg-gray-100 hover:text-green-400">
              <NavLink to="/">HÌNH ẢNH</NavLink>
            </div> */}
            <NavLink to="/contact">
              <div className="px-2 py-3 hover:bg-gray-100 hover:text-green-400">
                LIÊN HỆ
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hearder;
