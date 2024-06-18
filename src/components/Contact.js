import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = ({ title }) => {
  const [valueContact, setValueContact] = useState({
    fullName: "",
    address: "",
    numberPhone: "",
    email: "",
    message: "",
  });
  const handleSendContact = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        valueContact
      );
      toast.success("Gửi thành công");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  const handleChange = (e) => {
    setValueContact({
      ...valueContact,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="p-3 bg-gray-100 border rounded-md ">
      <span>{title}</span>
      <div className="grid grid-cols-3 gap-2 ">
        <div className="flex flex-col mx-3 my-2">
          <span>1. Nhập họ và tên</span>
          <input
            className="px-2 py-1 mt-2 border border-gray-300 outline-none"
            type="text"
            placeholder="Nhập họ và tên "
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mx-3 my-2">
          <span>2. Nhập email</span>
          <input
            className="px-2 py-1 mt-2 border border-gray-300 outline-none"
            type="text"
            placeholder="Nhập email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mx-3 my-2">
          <span>3. Nhập số điện thoại</span>
          <input
            className="px-2 py-1 mt-2 border border-gray-300 outline-none"
            type="text"
            placeholder="Nhập số điện thoại"
            name="numberPhone"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full p-2 ">
        <span>4. Viết nhận xét của bạn xuống dưới.</span>
        <textarea
          className="border border-gray-300 outline-none p-2 mt-2 w-full min-h-[120px] mr-2"
          type="text"
          placeholder="Viết nhận xét"
          name="message"
          onChange={handleChange}
        />
      </div>
      <div
        className="rounded-2xl bg-yellow-500 w-[300px] h-8 text-xl text-white flex items-center justify-center my-2 hover:bg-yellow-200"
        onClick={() => {
          if (
            valueContact.fullName === "" ||
            valueContact.email === "" ||
            valueContact.numberPhone === "" ||
            valueContact.message === ""
          ) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
          }
          handleSendContact();
        }}
      >
        <button>Gửi ngay</button>
      </div>
    </div>
  );
};

export default Contact;
