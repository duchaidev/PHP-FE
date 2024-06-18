import React, { useEffect, useState } from "react";
import HeaderManageTour from "../../components/dashboard/HeaderManageTour";
import { useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";

const ManageMessage = () => {
  const [fakeData, setFakeData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const fetchMessage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const { data: message } = useQuery(["message"], () => fetchMessage());

  useEffect(() => {
    setFakeData(message?.data);
  }, [message]);

  console.log(message);
  return (
    <div>
      {/* <div
        className={`${
          showMessage ? "" : "hidden"
        } fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black bg-opacity-30`}
        onClick={() => {
          setShowMessage(false);
        }}
      >
        <div
          className="bg-white w-[50%] h-[50%]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <span>Tên khách hàng:</span>
          </div>
        </div>
      </div> */}
      <HeaderManageTour></HeaderManageTour>
      <div className="mt-5 border rounded-sm border-grayE8 ">
        <div className="grid items-center p-5 border-b grid-cols-20 bg-grayEC border-grayE8">
          <span className="col-span-1">ID</span>
          <span className="col-span-3">Fullname</span>
          <span className="col-span-3">NumberPhone</span>
          <span className="col-span-4">Email</span>
          <span className="col-span-7">Message</span>
          <span className="col-span-2">Action</span>
        </div>
        {fakeData?.length > 0 &&
          fakeData?.map((item) => {
            return (
              <div
                className="grid items-center px-5 py-3 border-b border-grayE8 grid-cols-20"
                key={item.id}
              >
                <div className="flex items-center col-span-1 gap-2">
                  <p className="flex flex-col gap-[6px] pr-3">
                    <span className="text-[15px] text-black font-medium leading-4">
                      {item?.id}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col col-span-3 gap-3">
                  {item?.fullName}
                </div>
                <div className="flex flex-col col-span-3 gap-3">
                  <span>{item?.numberPhone}</span>
                </div>
                <div className="flex flex-col col-span-4 gap-3">
                  <span>{item?.email}</span>
                </div>
                <div className="flex flex-col col-span-7 gap-3">
                  {item?.message?.length < 50
                    ? item?.message
                    : item?.message.slice(0, 50) + "..."}
                </div>
                <div className="flex col-span-2 gap-3">
                  <button
                    onClick={() => setShowMessage(true)}
                    className="cursor-pointer"
                  >
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="#747474"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.9999 5.75C11.138 5.75 10.3113 6.09241 9.70182 6.7019C9.09233 7.3114 8.74992 8.13805 8.74992 9C8.74992 9.86195 9.09233 10.6886 9.70182 11.2981C10.3113 11.9076 11.138 12.25 11.9999 12.25C12.8619 12.25 13.6885 11.9076 14.298 11.2981C14.9075 10.6886 15.2499 9.86195 15.2499 9C15.2499 8.13805 14.9075 7.3114 14.298 6.7019C13.6885 6.09241 12.8619 5.75 11.9999 5.75ZM11.9999 14.4167C10.5633 14.4167 9.18558 13.846 8.16976 12.8302C7.15394 11.8143 6.58325 10.4366 6.58325 9C6.58325 7.56341 7.15394 6.18566 8.16976 5.16984C9.18558 4.15402 10.5633 3.58333 11.9999 3.58333C13.4365 3.58333 14.8143 4.15402 15.8301 5.16984C16.8459 6.18566 17.4166 7.56341 17.4166 9C17.4166 10.4366 16.8459 11.8143 15.8301 12.8302C14.8143 13.846 13.4365 14.4167 11.9999 14.4167ZM11.9999 0.875C6.58325 0.875 1.95742 4.24417 0.083252 9C1.95742 13.7558 6.58325 17.125 11.9999 17.125C17.4166 17.125 22.0424 13.7558 23.9166 9C22.0424 4.24417 17.4166 0.875 11.9999 0.875Z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ManageMessage;
