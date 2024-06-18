import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Spin } from "antd";

const ContactContent = () => {
  const [valueContact, setValueContact] = useState({
    fullName: "",
    address: "",
    numberPhone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSendContact = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        valueContact
      );
      console.log(res);
      toast.success("Gửi thành công");
    } catch (error) {
      console.log(error);
      toast.error("Gửi thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setValueContact({
      ...valueContact,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Spin spinning={loading}>
      <div className="grid grid-cols-2 gap-10 my-5 mx-[160px] mb-[100px]">
        <div className="flex flex-col">
          <h2 className="text-xl">THÔNG TIN LIÊN HỆ</h2>
          <h3 className="border-b w-[80px] py-1 border-black"></h3>
          <h3 className="border-b w-[100px] py-1 border-black"></h3>
          <span className="py-4 text-[#7f7f7f]">Điện thoại: 03165656545</span>
          <span className="pb-4 text-[#7f7f7f]">Hotline: 0245465421325</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7484136613443!2d105.7461114758866!3d20.962616190045903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBQaGVuaWthYQ!5e0!3m2!1svi!2s!4v1698455624340!5m2!1svi!2s"
            title="Google Maps"
            width="full"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h2 className="text-xl">LIÊN HỆ CHÚNG TÔI</h2>
          <h3 className="border-b w-[80px] py-1 border-black"></h3>
          <h3 className="border-b w-[100px] py-1 border-black"></h3>
          <div className="mt-[70px]">
            <div className="grid w-full grid-cols-2 gap-2 py-2">
              <input
                type="text"
                placeholder="Họ tên"
                className="border outline-none px-[20px] py-2"
                name="fullName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="border outline-none px-[20px] py-2"
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-2 py-2">
              <input
                type="text"
                placeholder="Điện thoại"
                className="border outline-none px-[20px] py-2"
                name="numberPhone"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Email"
                className="border outline-none px-[20px] py-2"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Nội dung"
                className="border outline-none px-[20px] py-2 w-full min-h-[100px]"
                name="message"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="p-2 my-2 text-lg text-white bg-black hover:bg-red-600"
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
                Gửi thông tin liên hệ
              </button>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default ContactContent;
