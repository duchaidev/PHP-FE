import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-start w-full my-5">
        <div className="flex flex-col justify-center items-center mx-[15px] max-w-[400px]">
          <span className="text-xl">Công ty TNHH Du Lịch Quốc Tế ABC</span>
          <ul>
            <li className="text-base">Thông tin chuyển khoản.</li>
            <li className="text-base">
              1.Chủ tài khoản: <strong>Admin Tour </strong> | STK: 01234567 |
              Ngân hàng Quân đội (Mb Bank)
            </li>
            <li className="text-base">
              2.Chủ tài khoản: <strong>Nhân viên tour </strong> | STK: 012345678
              | Ngân hàng Quân đội (Mb Bank).
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center mx-[15px] max-w-[400px]">
          <span className="text-xl">Thông tin liên hệ</span>
          <ul className="text-base">
            <li>Địa chỉ: Hà Đông - Hà Nội.</li>
            <li>Điện thoại: 0123456789</li>
            <li>Hotline: 211546454/6548502</li>
            <li>Email: duchaidev@gmail.com</li>
            <li>
              Website:{" "}
              <a href="https://duchai.dev" target="_blank">
                https://duchai.dev
              </a>
            </li>
            <li className="flex items-center px-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M116.65 4.83008H11.3601C7.75366 4.83008 4.83008 7.75366 4.83008 11.3601V116.65C4.83008 120.257 7.75366 123.18 11.3601 123.18H116.65C120.257 123.18 123.18 120.257 123.18 116.65V11.3601C123.18 7.75366 120.257 4.83008 116.65 4.83008Z"
                  fill="#3D5A98"
                />
                <path
                  d="M86.4801 123.17V77.34H101.86L104.16 59.48H86.4801V48.08C86.4801 42.91 87.9201 39.38 95.3301 39.38H104.79V23.38C100.209 22.9026 95.6057 22.6756 91.0001 22.7C77.3801 22.7 68.0001 31 68.0001 46.31V59.48H52.6201V77.34H68.0001V123.17H86.4801Z"
                  fill="white"
                />
              </svg>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                  fill="#3D5A98"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                  fill="#3D5A98"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center mx-[15px] max-w-[400px]">
          <span className="text-xl">Giới thiệu</span>
          <ul className="text-base">
            <li>Về chúng tôi</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Hướng dẫn đặt tour</li>
            <li>Khuyến mại</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center mx-[15px] max-w-[400px]">
          <span className="text-xl">Chính sách</span>
          <ul className="text-base">
            <li>Chính sách bảo mật</li>
            <li>Điều khoản chung</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
