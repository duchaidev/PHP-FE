import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../until/componentsHandle";

const classNameHeader =
  "py-5 text-center  border-b-[2px] cursor-pointer transition-all";

const ManageTour = () => {
  const [isShow, setIsShow] = useState(0);
  const [tours, setTours] = useState([]);
  const [fakeAllData, setFakeAllData] = useState([]);

  const fetchTours = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/booking`
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

  useEffect(() => {
    setFakeAllData(tours);
  }, [tours]);

  useEffect(() => {
    if (isShow === 0) {
      setFakeAllData(tours);
    } else if (isShow === 1) {
      setFakeAllData(tours?.filter((item) => item?.status === "PENDING"));
    } else if (isShow === 2) {
      setFakeAllData(tours?.filter((item) => item?.status === "CONFIRMED"));
    } else if (isShow === 3) {
      setFakeAllData(tours?.filter((item) => item?.status === "INPROGRESS"));
    } else if (isShow === 4) {
      setFakeAllData(tours?.filter((item) => item?.status === "COMPLETED"));
    } else if (isShow === 5) {
      setFakeAllData(tours?.filter((item) => item?.status === "DELAYED"));
    }
  }, [isShow, tours]);
  const handleActionProduct = (id, action) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/api/booking/${id}`, {
        status: action,
      })
      .then((res) => {
        fetchTours();
        toast.success("Xác nhận thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xác nhận thất bại");
      });
  };
  const handleSetShow = (index) => {
    setIsShow(index);
  };

  return (
    <div>
      <div className="p-5 pb-8 bg-white">
        <h2 className="text-lg font-semibold">Tìm kiếm sản phẩm</h2>
        <div className="mt-3">
          <div className="grid grid-cols-5 gap-10">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="w-full h-[38px] col-span-3 px-3 border rounded-sm border-blue1 outline-none focus:border-blue6 transition-all"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-3 h-[36px] flex items-center bg-blue6 text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6">
              Tìm kiếm
            </button>
            <button className="px-3 h-[36px] flex items-center justify-center border-[2px] rounded-sm transition-all hover:text-white hover:bg-blue7 text-blue6 border-blue6">
              Đặt lại
            </button>
          </div>
        </div>
      </div>
      <div className="pb-8 mt-3 bg-white">
        {/*============================ Nav Menu ============================*/}
        <div className="grid grid-cols-6 pt-1">
          <span
            className={` ${classNameHeader} ${
              isShow === 0 ? "border-blue6 text-blue6 " : "border-grayE8"
            }`}
            onClick={() => handleSetShow(0)}
          >
            Tất cả
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 1 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(1)}
          >
            Chờ xác nhận
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 2 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(2)}
          >
            Đã xác nhận
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 3 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(3)}
          >
            Đang diễn ra
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 4 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(4)}
          >
            Thành công
          </span>
          <span
            className={` ${classNameHeader} ${
              isShow === 5 ? "border-blue6 text-blue6" : "border-grayE8"
            }`}
            onClick={() => handleSetShow(5)}
          >
            Bị hoãn
          </span>
        </div>
        {/*============================ View Product ============================*/}
        <div className="flex flex-col gap-6 px-6 py-4">
          <h2 className="font-medium text-[22px] mt-2">
            {fakeAllData?.length} đơn hàng
          </h2>
          <div className="grid items-center py-5 px-[1%] border-b grid-cols-20 bg-grayEC border-grayE8">
            <span className="col-span-7">Name tour</span>
            <span className="col-span-3">Total People</span>
            <span className="col-span-3">Price</span>
            <span className="col-span-3">Status</span>
            <span className="col-span-4">Action</span>
          </div>
          {fakeAllData?.length > 0 &&
            fakeAllData?.map((item, index) => {
              return (
                <div
                  className="flex flex-col border border-grayE8"
                  key={item.id}
                >
                  <div className="flex justify-between px-[1%] py-2 bg-grayEC">
                    <span className="font-semibold">
                      {item?.customer?.fullName}
                    </span>
                    <span>
                      Mã Tour:
                      <span className="font-semibold text-[18px]">
                        {" "}
                        {item?.bookingId}
                      </span>
                    </span>
                  </div>
                  <div className="px-[1%] py-3 grid grid-cols-20 items-center">
                    <div className="col-span-7">
                      <div className="flex items-center gap-2">
                        {/* <p>
                          <img
                            src={
                              convertBase64ToImage(item?.tour?.image) ||
                              "/1.png"
                            }
                            alt=""
                            className="w-[56px] h-[56px] object-cover rounded-sm border"
                          />
                        </p> */}
                        <p className="flex flex-col gap-[6px] pr-3">
                          <span className="px-1 text-xs max-w-min whitespace-nowrap text-greenText bg-greenBorder bg-opacity-20">
                            {item?.tour?.duration}
                          </span>
                          <span className="text-[15px] text-black leading-4">
                            {item?.tour?.name}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <span>{item?.numberOfParticipants}</span>
                    </div>
                    <div className="flex flex-col col-span-3 gap-2">
                      <span>{item?.totalPrice}</span>
                      <span className="px-1 text-xs text-red bg-rose-500 bg-opacity-20 max-w-max">
                        Chưa thanh toán
                      </span>
                    </div>
                    <div className="col-span-3">
                      <span> {item?.status}</span>
                    </div>
                    <div className="col-span-4">
                      <div className="flex gap-2">
                        <button
                          className={`px-3 h-[36px] flex items-center bg-blue6 cursor-pointer text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6 ${
                            item?.status === "CONFIRMED" &&
                            "!bg-rose-300 !text-red !border-rose-300"
                          }`}
                          onClick={() => {
                            if (item?.status === "COMPLETED") {
                              return toast.error("Đơn hàng đã hoàn thành");
                            }
                            if (item?.status === "CANCELLED") {
                              handleActionProduct(item?.id, "PENDING");
                            }
                            if (item?.status === "DELAYED") {
                              handleActionProduct(item?.id, "INPROGRESS");
                            } else if (item?.status === "INPROGRESS") {
                              handleActionProduct(item?.id, "COMPLETED");
                            } else if (item?.status === "CONFIRMED") {
                              handleActionProduct(item?.id, "DELAYED");
                            } else {
                              handleActionProduct(item?.id, "CONFIRMED");
                            }
                          }}
                        >
                          {item?.status === "PENDING"
                            ? "Xác nhận"
                            : item?.status === "CONFIRMED"
                            ? "Hoãn"
                            : item?.status === "INPROGRESS"
                            ? "Hoàn thành"
                            : item?.status === "DELAYED"
                            ? "Bắt đầu"
                            : item?.status === "CANCELLED"
                            ? "Khôi phục"
                            : "Đã hoàn thành"}
                        </button>
                        {item?.status === "CONFIRMED" && (
                          <button
                            className={`px-3 h-[36px] flex items-center bg-blue6 cursor-pointer text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6 `}
                            onClick={() => {
                              handleActionProduct(item?.id, "INPROGRESS");
                            }}
                          >
                            Bắt đầu
                          </button>
                        )}
                        {item?.status === "PENDING" && (
                          <button
                            className={`px-3 h-[36px] flex items-center bg-blue6 cursor-pointer text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6 `}
                            onClick={() => {
                              handleActionProduct(item?.id, "CANCELLED");
                            }}
                          >
                            Hủy bỏ
                          </button>
                        )}

                        <a
                          href={`tel:${item?.bookingCustomer?.phoneNumber}`}
                          className="px-3 h-[36px] whitespace-nowrap flex items-center justify-center border-[2px] rounded-sm transition-all hover:text-white hover:bg-blue7 text-blue6 border-blue6"
                        >
                          Liên hệ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ManageTour;
