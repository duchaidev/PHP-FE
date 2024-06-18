import React from "react";
import { convertBase64ToImage } from "../until/componentsHandle";

const BlogContent = ({ data, text }) => {
  //   console.log(data);
  return (
    <div className="mb-[100px]">
      <div className="m-10">
        <h2 className="flex items-center justify-center text-3xl font-medium text-[#0052b0] text-center w-full">
          {text}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10 mx-[5%] mt-10">
        {data?.length > 0 &&
          data?.map((item, index) => (
            <BlogItem
              key={index}
              image={convertBase64ToImage(item?.image)}
              title={item?.title}
              link={item?.link}
              detail={convertBase64ToImage(item?.content)}
            ></BlogItem>
          ))}
      </div>
    </div>
  );
};

function BlogItem({ title, image, detail }) {
  return (
    <div className=" aspect-[4/3]">
      <div className="w-full aspect-[4/3]">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center mt-3 overflow-hidden ">
        <h2 className="text-xl font-medium" aria-label={title}>
          {title}
        </h2>
        <h2 className="border-b-2 border w-[90px] border-black"></h2>
        <h3
          className="text-base text-[#606060] p-3 overflow-hidden overflow-ellipsis h-[100px] line-clamp-6 "
          aria-label={detail}
          dangerouslySetInnerHTML={{
            __html: detail,
          }}
        ></h3>
        <button className="px-2 py-1 mt-2 border rounded-2xl hover:bg-cyan-500">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default BlogContent;
