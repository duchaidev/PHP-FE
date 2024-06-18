import React from "react";

const BlogHearder = ({ title }) => {
  return (
    <div>
      <div>
        <div className="flex items-center text-center  bg-gray-100 p-2 pl-10 cursor-pointer mt-0">
          <span className="leading-5">
            {" "}
            <svg
              width="8"
              height="15"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="leading-5 px-2">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogHearder;
