import React, { useEffect, useRef, useState } from "react";
import { convertBase64ToImage, toBase64 } from "./../../until/componentsHandle";
import { toast } from "react-toastify";
import TextEditor from "../../components/TextEditor";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddTour = () => {
  const { id } = useParams();
  // console.log(id);
  const toastId = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [valueInput, setValueInput] = useState({
    category: "",
    difficulty: "",
    duration: "",
    hotelAddress: "",
    hotelName: "",
    image: "",
    maxGroupSize: "",
    name: "",
    price: "",
    startDates: "",
    tourConditions: "",
    vehicleType: "",
    status: "pending",
    featured: true,
    tourHot: false,
  });
  const [valueDescription, setValueDescription] = useState("");

  // Lấy thông tin sản phẩm
  const fetchOneTours = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour/${id}`
      );
      return res.data?.data;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // Lấy thông tin tour khi id thay đổi
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        if (isLoading) {
          const notify = () =>
            (toastId.current = toast("Đang lấy thông tin sản phẩm...", {
              autoClose: false,
              type: toast.TYPE.DEFAULT,
              icon: "⏳",
              style: {
                background: "#CCD4DA", // Đặt màu nền thành màu xám
                color: "black",
              },
            }));
          notify();
        }
        try {
          let tour = await fetchOneTours(id);
          if (!tour) {
            return toast.update(toastId.current, {
              render: "Có lỗi xảy ra, không lấy được sản phẩm!",
              type: toast.TYPE.ERROR,
              autoClose: 2000,
            });
          }
          if (tour) {
            setIsLoading(false);
            toast.update(toastId.current, {
              render: "Lấy thông tin thành công!",
              type: toast.TYPE.SUCCESS,
              autoClose: 2000,
              icon: "🎉",
            });
          }
          const { description, image, ...orther } = tour;

          setValueDescription(convertBase64ToImage(description));
          setValueInput({
            image: convertBase64ToImage(image),
            ...orther,
          });
        } catch (error) {
          console.error("Error fetching product:", error);
          setIsLoading(false);
          toast.update(toastId.current, {
            render: "Có lỗi xảy ra khi lấy thông tin sản phẩm!",
            type: toast.TYPE.ERROR,
            autoClose: 2000,
          });
        }
      } else {
        setValueInput({
          category: "",
          difficulty: "",
          duration: "",
          hotelAddress: "",
          hotelName: "",
          image: "",
          maxGroupSize: "",
          name: "",
          price: "",
          startDates: "",
          tourConditions: "",
          vehicleType: "",
          status: "pending",
        });
        setValueDescription("");
      }
    };
    fetchData();
  }, [id, isLoading]);
  console.log(valueDescription);
  // Reset giá trị
  const handleResetValue = () => {
    setValueInput({
      category: "",
      difficulty: "",
      duration: "",
      hotelAddress: "",
      hotelName: "",
      image: "",
      maxGroupSize: "",
      name: "",
      price: "",
      startDates: "",
      tourConditions: "",
      vehicleType: "",
      status: "pending",
    });
    setValueDescription("");
  };

  // Thêm tour
  const handleAddTour = async () => {
    const notify = () =>
      (toastId.current = toast("Đang thêm Tour...", {
        autoClose: false,
        type: toast.TYPE.DEFAULT,
        icon: "⏳",
        style: {
          background: "#CCD4DA", // Đặt màu nền thành màu xám
          color: "black",
        },
      }));
    notify();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tour`, {
        ...valueInput,
        description: valueDescription,
      });
      handleResetValue();
      toast.update(toastId.current, {
        render: "Thêm Tour thành công!",
        type: toast.TYPE.SUCCESS,
        autoClose: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(error);
      toast.update(toastId.current, {
        render: error.response.data.message || "Thêm Tour thất bại!",
        type: toast.TYPE.ERROR,
        autoClose: 1000,
      });
    }
  };

  // Set giá trị
  const handleSetValue = (key, value) => {
    setValueInput({
      ...valueInput,
      [key]: value,
    });
  };
  const handleDes = async (html) => {
    console.log(html);
    setValueDescription(html);
  };
  //Xử lí thay đổi ảnh đại diện
  const imageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size <= 1024 * 1024 * 10) {
        let fileImg = e.target.files[0];
        handleSetValue("image", await toBase64(fileImg));
        setValueInput({
          ...valueInput,
          image: await toBase64(fileImg),
        });
      } else {
        toast.error("Ảnh quá lớn, vui lòng chọn ảnh khác < 1MB");
      }
    }
  };

  const handleEditTour = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/tour/${id}`,
        {
          ...valueInput,
          description: valueDescription,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Sửa Tour thành công");
    } catch (e) {
      toast.error("Sửa Tour thất bại");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleEditTour();
      return;
    } else {
      handleAddTour();
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center col-span-4 gap-6">
          <div className="border w-44 h-44 border-blue1">
            <img
              src={valueInput?.image || "/imgdf.png"}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="py-3 px-6 font-semibold text-blue6 border-blue6 border-[2px] relative">
              <span>Chọn ảnh</span>
              <input
                type="file"
                onChange={imageChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </button>
            <span className="text-[14px] text-gray1">
              Dung lượng file tối đa 1mb <br /> Định dạng: .JPEG, .PNG
            </span>
          </div>
        </div>

        <FormUIAddProduct title={"Status"}>
          <div className="flex items-center gap-[10%]">
            <select
              name="status"
              id="status"
              className="h-[38px] pl-3 min-w-[30%] outline-none focus:border-blue6 border border-grayE8 pr-5"
              value={valueInput?.status}
              onChange={(e) => {
                handleSetValue("status", e.target.value);
              }}
            >
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
            </select>

            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                checked={valueInput?.featured}
                defaultChecked={valueInput?.featured}
                onChange={(e) => {
                  handleSetValue("featured", e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Feature
              </span>
            </label>
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                checked={valueInput?.tourHot}
                defaultChecked={valueInput?.tourHot}
                onChange={(e) => {
                  handleSetValue("tourHot", e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Tour Hot
              </span>
            </label>
          </div>
        </FormUIAddProduct>

        <FormUIAddProduct title={"Name"}>
          <input
            type="text"
            placeholder="Nhập tên tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.name}
            onChange={(e) => {
              handleSetValue("name", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Price"}>
          <input
            type="text"
            placeholder="Nhập giá tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.price}
            onChange={(e) => {
              handleSetValue("price", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Start Dates"}>
          <div className="flex items-center gap-[10%]">
            <input
              type="date"
              className="h-[38px] pr-3 border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.startDates}
              format="dd-MM-yyyy"
              onChange={(e) => {
                handleSetValue("startDates", e.target.value);
              }}
            />
            <div className="flex items-center flex-1 gap-5">
              <span>Max Group Size</span>
              <input
                type="text"
                placeholder="Nhập số lượng"
                className="h-[38px] pr-20 border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
                value={valueInput?.maxGroupSize}
                onChange={(e) => {
                  handleSetValue("maxGroupSize", e.target.value);
                }}
              />
            </div>
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Category"}>
          <div className="relative">
            <p className="absolute top-[50%] flex gap-2 items-center -translate-y-[50%] right-3 text-gray1 text-sm">
              <svg
                width="1"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18558e-08"
                  x2="0.499999"
                  y2="17"
                  stroke="#8B8B8B"
                />
              </svg>
              <span>{valueInput?.category?.length} /120</span>
            </p>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.category}
              onChange={(e) => {
                handleSetValue("category", e.target.value);
              }}
            />
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Difficulty"}>
          <div className="flex items-center gap-[10%]">
            <select
              name="difficulty"
              id="difficulty"
              className="h-[38px] pl-3 min-w-[30%] outline-none focus:border-blue6 border border-grayE8 pr-5"
              value={valueInput?.difficulty}
              defaultValue={"easy"}
              onChange={(e) => {
                handleSetValue("difficulty", e.target.value);
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div className="flex items-center flex-1 gap-5">
              <span>Duration</span>
              <input
                type="text"
                name="duration"
                id="duration"
                className="h-[38px] border px-3 min-w-[60%] border-grayE8"
                placeholder="Duration"
                value={valueInput?.duration}
                onChange={(e) => {
                  handleSetValue("duration", e.target.value);
                }}
              />
            </div>
          </div>
        </FormUIAddProduct>
        <FormUIAddProduct title={"Hotel Name"}>
          <input
            type="text"
            placeholder="Nhập tên khách sạn"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.hotelName}
            onChange={(e) => {
              handleSetValue("hotelName", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Hotel Address"}>
          <input
            type="text"
            placeholder="Nhập địa chỉ khách sạn"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.hotelAddress}
            onChange={(e) => {
              handleSetValue("hotelAddress", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"Tour Conditions"}>
          <input
            type="text"
            placeholder="Nhập điều kiện tour"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.tourConditions}
            onChange={(e) => {
              handleSetValue("tourConditions", e.target.value);
            }}
          />
        </FormUIAddProduct>
        <FormUIAddProduct title={"VehicleType"}>
          <input
            type="text"
            placeholder="Nhập loại xe"
            className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.vehicleType}
            onChange={(e) => {
              handleSetValue("vehicleType", e.target.value);
            }}
          />
        </FormUIAddProduct>

        <FormUIAddProduct title={"Mô tả sản phẩm"}>
          <TextEditor
            setValues={
              valueDescription || convertBase64ToImage(valueDescription)
            }
            placeholder="Write something..."
            onChange={(html) => handleDes(html)}
          ></TextEditor>
        </FormUIAddProduct>
        <div className="flex items-center justify-center mt-5">
          <button className="py-3 px-6 font-semibold text-white bg-blue6 border-blue6 border-[2px]">
            {id ? "Sửa Tour" : "Thêm Tour"}
          </button>
        </div>
      </form>
    </div>
  );
};

export const FormUIAddProduct = ({
  className,
  classNameTitle,
  title,
  children,
}) => {
  return (
    <div className={`grid grid-cols-6 gap-10 pr-5 mt-6 ${className}`}>
      <span
        className={`col-span-1 text-right whitespace-nowrap leading-9 ${classNameTitle}`}
      >
        {title}
      </span>
      <div className="flex flex-col col-span-5 gap-2">{children}</div>
    </div>
  );
};

export default AddTour;
