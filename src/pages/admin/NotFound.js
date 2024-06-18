import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h1 className="font-extrabold text-[150px] bg-gradient-to-br from-[#00c09e] to-[#70b7ff] bg-clip-text text-transparent">
        404
      </h1>
      <h1 className="font-bold text-[30px] text-gray-600">PAGE NOT FOUND</h1>
    </div>
  );
};

export default NotFound;
