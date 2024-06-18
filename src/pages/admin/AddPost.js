import React, { useEffect, useRef, useState } from "react";
import { convertBase64ToImage, toBase64 } from "./../../until/componentsHandle";
import { toast } from "react-toastify";
import TextEditor from "../../components/TextEditor";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  const { id } = useParams();
  const toastId = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [valueInput, setValueInput] = useState({
    title: "",
    author: "Anonymous",
    category: "Other",
    trending: false,
    image: "",
  });
  const [content, setContent] = useState("");

  // Lấy thông tin sản phẩm
  const fetchOnePost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/post/${id}`
      );
      console.log(res.data?.data);
      return res.data?.data;
    } catch (err) {
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
          let post = await fetchOnePost(id);
          if (!post) {
            return toast.update(toastId.current, {
              render: "Có lỗi xảy ra, không lấy được sản phẩm!",
              type: toast.TYPE.ERROR,
              autoClose: 2000,
            });
          }
          if (post) {
            setIsLoading(false);
            toast.update(toastId.current, {
              render: "Lấy thông tin thành công!",
              type: toast.TYPE.SUCCESS,
              autoClose: 2000,
              icon: "🎉",
            });
          }
          const { image, content, ...orther } = post;

          setContent(convertBase64ToImage(content));
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
          title: "",
          author: "Anonymous",
          category: "Other",
          trending: false,
          image: "",
        });
        setContent("");
      }
    };
    fetchData();
  }, [id]);
  // Reset giá trị

  const handleResetValue = () => {
    setValueInput({
      title: "",
      author: "Anonymous",
      category: "Other",
      trending: false,
      image: "",
    });
    setContent("");
  };

  // Thêm tour
  const handleAddPost = async () => {
    const notify = () =>
      (toastId.current = toast("Đang thêm Post...", {
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/post`, {
        ...valueInput,
        content: content,
      });
      handleResetValue();
      toast.update(toastId.current, {
        render: "Thêm Post thành công!",
        type: toast.TYPE.SUCCESS,
        autoClose: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(error);
      toast.update(toastId.current, {
        render: error.response.data.message || "Thêm Post thất bại!",
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
    setContent(html);
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

  const handleEditPost = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/post/${id}`,
        {
          ...valueInput,
          description: content,
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
      handleEditPost();
      return;
    } else {
      handleAddPost();
    }
  };
  console.log(valueInput);
  console.log(content);
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
        <FormUIAddProduct title={"Author"}>
          <div className="flex items-center  gap-[10%]">
            <input
              type="text"
              placeholder="Nhập tên tác giả"
              className="h-[38px] pr-20 w-[75%] border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.author}
              onChange={(e) => {
                handleSetValue("author", e.target.value);
              }}
            />
            <label class="relative inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                checked={valueInput?.trending}
                defaultChecked={valueInput?.trending}
                onChange={(e) => {
                  handleSetValue("trending", e.target.checked);
                }}
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Trending
              </span>
            </label>
          </div>
        </FormUIAddProduct>

        <FormUIAddProduct title={"Title"}>
          <input
            type="text"
            placeholder="Nhập tiêu đề bài viết"
            className="h-[38px] pr-20 w-[75%] border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
            value={valueInput?.title}
            onChange={(e) => {
              handleSetValue("title", e.target.value);
            }}
          />
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
              placeholder="Nhập danh mục bài viết"
              className="h-[38px] pr-20 w-full border rounded-sm border-grayE8 outline-none focus:border-blue6 transition-all text-sm pl-3"
              value={valueInput?.category}
              onChange={(e) => {
                handleSetValue("category", e.target.value);
              }}
            />
          </div>
        </FormUIAddProduct>

        <FormUIAddProduct title={"Nội dung"}>
          <TextEditor
            setValues={content || convertBase64ToImage(content)}
            placeholder="Write something..."
            onChange={(html) => handleDes(html)}
          ></TextEditor>
        </FormUIAddProduct>
        <div className="flex items-center justify-center mt-5">
          <button className="py-3 px-6 font-semibold text-white bg-blue6 border-blue6 border-[2px]">
            {id ? "Sửa Bài viết" : "Thêm Bài viết"}
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

export default AddPost;
