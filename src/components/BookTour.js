import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { Spin } from "antd";

const BookTour = () => {
  const slug = document.location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const [oneTours, setOneTours] = useState({});
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour/${slug}`
      );
      setOneTours(res.data?.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [slug]);

  // const { data: oneTours, refetch } = useQuery(["one-tours"], () =>
  //   fetchTours()
  // );
  const [valueCustomer, setValueCustomer] = useState({
    tourId: 2,
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    bookingDate: "",
    numberOfParticipants: "",
    totalPrice: "",
    dateStart: "",
    status: "PENDING",
    bookingId: "",
  });

  const handleSetValueCustomer = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setValueCustomer({
        ...valueCustomer,
        [name]: value,
        bookingId: `${value}-${oneTours?.id}-${dateStr}`,
      });
    } else {
      setValueCustomer({
        ...valueCustomer,
        [name]: value,
      });
    }
  };
  // Tạo một đối tượng Date chứa thời gian hiện tại
  const currentTime = new Date();

  // Lấy ngày, tháng và năm từ đối tượng Date
  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
  const year = currentTime.getFullYear();

  // Tạo một chuỗi số cho ngày theo định dạng "YYYYMMDD"
  const dateStr = `${day.toString().padStart(2, "0")}${month
    .toString()
    .padStart(2, "0")}${year}`;

  useEffect(() => {
    setValueCustomer({
      ...valueCustomer,
      tourId: oneTours?.id,
      bookingDate: `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`,
      totalPrice: 5000000,
    });
  }, [oneTours]);
  const handleBookTour = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/booking`,
        valueCustomer
      );
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleFormatDate = (date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  return (
    <Spin spinning={loading}>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center justify-center w-[740px] h-full m-3">
          <div className="w-full min-h-[240px] border rounded-xl border-blue-500 ">
            <div className="w-full p-2 bg-blue-500 rounded-t-xl ">
              <span>Thông tin tour</span>
            </div>
            <div className="pl-2 my-3">
              <span className="">Tên Tour</span>
            </div>
            <div className="pl-2 my-3">
              <input
                type="text"
                value={oneTours?.name || "..."}
                readOnly
                className="w-full p-2 bg-transparent border border-solid outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 pl-2 my-3">
              <div>
                <span className="my-3">Khách sạn</span>
                <input
                  type="text"
                  readOnly
                  value={oneTours?.hotelName || "..."}
                  className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
              <div>
                <span>Số ngày đi tour</span>
                <input
                  type="text"
                  readOnly
                  value={oneTours?.duration || "..."}
                  className="p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
              <div>
                <span>Phương tiện</span>
                <input
                  type="text"
                  readOnly
                  value={oneTours?.vehicleType || "..."}
                  className="p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pl-2 my-3">
              <div>
                <span className="my-3">Giá</span>
                <input
                  type="text"
                  readOnly
                  value={oneTours?.price || "..."}
                  className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
              <div>
                <span>Ngày bắt đầu dự kiến</span>
                <input
                  type="date"
                  readOnly
                  value={handleFormatDate(oneTours?.startDates) || "..."}
                  className="p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
              <div>
                <span>Số người tối đa</span>
                <input
                  type="text"
                  readOnly
                  value={oneTours?.maxGroupSize || "..."}
                  className="p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-[740px] min-h-[240px] my-3 border rounded-xl border-blue-500 ">
            <div className="w-full p-2 bg-blue-500 rounded-t-xl ">
              <span>Chi tiết tour</span>
            </div>
            <div className="pl-2 my-3">
              <span className="">Mã booking</span>
              <span className="px-2 mx-2 bg-amber-400 rounded-2xl">
                {valueCustomer.fullName} - {valueCustomer.tourId} -{dateStr}
              </span>
              <span className="italic text-red-500 ">
                (Qúy khách vui lòng nhớ số booking để tiện cho giao dịch sau
                này.)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pl-2 my-3">
              <div className="flex items-center gap-1">
                <span className="my-3">Số người tham gia</span>
                <input
                  type="text"
                  placeholder="Số người tham gia"
                  onChange={handleSetValueCustomer}
                  name="numberOfParticipants"
                  className="p-2 my-3 bg-transparent border border-solid outline-none"
                />
              </div>
            </div>
            <div className="pl-2 my-3">
              <span>Ngày đi yêu cầu</span>
              <input
                type="date"
                onChange={handleSetValueCustomer}
                name="dateStart"
                className="p-2 mx-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
          </div>
          {/* <div className="w-[740px] min-h-[240px] my-3 border rounded-xl border-blue-500 ">
            <div className="w-full p-2 px-2 bg-blue-500 rounded-t-xl ">
              <span>Lưu ý</span>
            </div>
            <div className="flex flex-col pl-2 my-3">
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
              <span className="py-2">
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil dolores quidem asperiores laudantium aliquid, officia
                veritatis alias voluptatem at suscipit libero quos dolor
                repudiandae voluptas officiis mollitia explicabo optio a?
              </span>
            </div>
          </div> */}
        </div>
        <div className="border border-orange-400 rounded-xl w-[360px] h-[450px] m-3">
          <div className="w-full p-2 bg-orange-400 rounded-t-xl">
            <span className="text-xl text-white">Thông tin liên hệ</span>
          </div>
          <div className="mx-2">
            <div>
              <input
                type="text"
                placeholder="Họ tên*"
                onChange={handleSetValueCustomer}
                name="fullName"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Điện thoại*"
                onChange={handleSetValueCustomer}
                name="phoneNumber"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email*"
                onChange={handleSetValueCustomer}
                name="email"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Địa chỉ*"
                onChange={handleSetValueCustomer}
                name="address"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nationality"
                onChange={handleSetValueCustomer}
                name="nationality"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Birthday"
                onChange={handleSetValueCustomer}
                name="dateOfBirth"
                className="w-full p-2 my-3 bg-transparent border border-solid outline-none"
              />
            </div>
          </div>
          <div className="mx-3">
            <button
              className="px-3 w-full rounded-3xl h-[40px] bg-orange-500 hover:bg-orange-400 text-white text-xl"
              onClick={() => {
                handleBookTour();
              }}
            >
              Đặt tour
            </button>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default BookTour;
