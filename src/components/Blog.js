import React from "react";
import { convertBase64ToImage } from "../until/componentsHandle";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex items-center justify-center w-full ">
            <h2 className="text-4xl font-medium text-gray-500">Blog</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-5">
          {data?.length > 0 &&
            data?.map((item, index) => (
              <ItemBlog
                key={index}
                img={convertBase64ToImage(item?.image)}
                title={item?.title}
              ></ItemBlog>
            ))}
        </div>
      </div>
    </div>
  );
};

function ItemBlog({ img, title, note }) {
  return (
    <div className="w-[625px] h-[425px]  relative">
      <div className="w-full h-full ">
        <img
          className="w-[100%] h-full object-cover rounded-md"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute px-3 text-white bottom-2">
        <h2 className="text-2xl">{title}</h2>
        <a className="flex flex-col items-center justify-center mt-1" href="/">
          <button className="px-2 py-1 border rounded-xl hover:border-transparent hover:bg-yellow-400">
            Xem thêm
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
