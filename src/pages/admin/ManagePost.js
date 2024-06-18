import React, { useEffect, useState } from "react";
import HeaderManageTour from "../../components/dashboard/HeaderManageTour";
import { useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { convertBase64ToImage } from "../../until/componentsHandle";
import { NavLink } from "react-router-dom";

const ManagePost = () => {
  const [fakeData, setFakeData] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/post`
      );
      setPosts(res.data?.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  useEffect(() => {
    setFakeData(posts);
  }, [posts]);

  const apiDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour/${id}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.data.message);
    }
  };
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiDeleteProduct(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setFakeData(fakeData.filter((product) => product.id !== id));
        } catch (e) {
          Swal.fire("Error", e, "error");
        }
      }
    });
  };
  return (
    <div>
      <HeaderManageTour></HeaderManageTour>
      <div className="mt-5 border rounded-sm border-grayE8 ">
        <div className="grid items-center p-5 border-b grid-cols-20 bg-grayEC border-grayE8">
          <span className="col-span-7">Title</span>
          <span className="col-span-4">Author</span>
          <span className="col-span-3">Category</span>
          <span className="col-span-3">Trending</span>
          <span className="col-span-3">Action</span>
        </div>
        {fakeData?.length > 0 &&
          fakeData?.map((item) => {
            return (
              <div
                className="grid items-center px-5 py-3 border-b border-grayE8 grid-cols-20"
                key={item.id}
              >
                <div className="flex items-center col-span-7 gap-2">
                  <p>
                    <img
                      src={convertBase64ToImage(item?.image) || "/1.png"}
                      alt=""
                      className="w-[56px] h-[56px] object-cover rounded-sm border"
                    />
                  </p>
                  <p className="flex flex-col gap-[6px] pr-3">
                    <span className="text-[15px] text-black font-medium leading-4">
                      {item?.title}
                    </span>
                  </p>
                </div>
                <div className="grid items-center grid-cols-13 col-span-13">
                  <div className="flex flex-col col-span-4 gap-3">
                    {item?.author}
                  </div>
                  <div className="flex flex-col col-span-3 gap-3">
                    <span>{item?.category}</span>
                  </div>
                  <div className="flex flex-col col-span-3 gap-3">
                    <span>{item?.trending === true ? "YES" : "NO"}</span>
                  </div>
                  <div className="flex col-span-3 gap-3">
                    <NavLink
                      to={`/admin/edit-post/${item?.id}`}
                      className="cursor-pointer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7475 0.494318L19.2901 1.03692C20.0378 1.78554 19.9247 3.11262 19.0353 4.00102L7.84571 15.1907L4.22037 16.5168C3.76513 16.6842 3.32185 16.4672 3.23172 16.034C3.20126 15.8769 3.21561 15.7143 3.27311 15.565L4.62503 11.9084L15.7834 0.749066C16.6727 -0.139336 17.9998 -0.254295 18.7475 0.494318ZM7.35737 1.60712C7.47814 1.60712 7.59773 1.63091 7.70931 1.67712C7.82089 1.72334 7.92227 1.79109 8.00767 1.87648C8.09307 1.96188 8.16081 2.06327 8.20703 2.17485C8.25325 2.28643 8.27704 2.40602 8.27704 2.52679C8.27704 2.64756 8.25325 2.76715 8.20703 2.87873C8.16081 2.99031 8.09307 3.0917 8.00767 3.1771C7.92227 3.2625 7.82089 3.33024 7.70931 3.37646C7.59773 3.42267 7.47814 3.44646 7.35737 3.44646H3.67868C3.19086 3.44646 2.72302 3.64025 2.37807 3.98519C2.03313 4.33014 1.83934 4.79798 1.83934 5.2858V16.3219C1.83934 16.8097 2.03313 17.2775 2.37807 17.6225C2.72302 17.9674 3.19086 18.1612 3.67868 18.1612H14.7147C15.2026 18.1612 15.6704 17.9674 16.0153 17.6225C16.3603 17.2775 16.5541 16.8097 16.5541 16.3219V12.6432C16.5541 12.3993 16.651 12.1653 16.8234 11.9929C16.9959 11.8204 17.2298 11.7235 17.4737 11.7235C17.7177 11.7235 17.9516 11.8204 18.1241 11.9929C18.2965 12.1653 18.3934 12.3993 18.3934 12.6432V16.3219C18.3934 17.2975 18.0058 18.2332 17.316 18.9231C16.6261 19.613 15.6904 20.0005 14.7147 20.0005H3.67868C2.70304 20.0005 1.76735 19.613 1.07746 18.9231C0.387574 18.2332 0 17.2975 0 16.3219V5.2858C0 4.31016 0.387574 3.37447 1.07746 2.68458C1.76735 1.99469 2.70304 1.60712 3.67868 1.60712H7.35737Z"
                          fill="#747474"
                        />
                      </svg>
                    </NavLink>

                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        handleDeleteProduct(item?.id);
                      }}
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 20C2.72222 20 2.19889 19.7822 1.76333 19.3467C1.32778 18.9111 1.11037 18.3881 1.11111 17.7778V3.33333H0V1.11111H5.55556V0H12.2222V1.11111H17.7778V3.33333H16.6667V17.7778C16.6667 18.3889 16.4489 18.9122 16.0133 19.3478C15.5778 19.7833 15.0548 20.0007 14.4444 20H3.33333ZM14.4444 3.33333H3.33333V17.7778H14.4444V3.33333ZM5.55556 15.5556H7.77778V5.55556H5.55556V15.5556ZM10 15.5556H12.2222V5.55556H10V15.5556Z"
                          fill="#FF0000"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ManagePost;
