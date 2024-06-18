import React from "react";

const HeaderManageTour = () => {
  return (
    <div className="p-5 pb-8 bg-white">
      <h2 className="text-lg font-semibold">Tìm kiếm sản phẩm</h2>
      <div className="mt-3">
        <div className="grid grid-cols-5 gap-10">
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            className="w-full h-[38px] col-span-3 px-3 border rounded-sm border-blue1 outline-none focus:border-blue6 transition-all"
          />
        </div>
        <div className="flex gap-3 mt-4">
          <button className="px-3 h-[36px] flex items-center bg-blue6 text-white rounded-sm justify-center hover:bg-grayEC transition-all hover:text-blue6 border-[2px] border-blue6">
            Tìm kiếm
          </button>
          <button className="px-3 h-[36px] flex items-center justify-center border-[2px] rounded-sm transition-all hover:text-white hover:bg-blue7 text-blue6 border-blue6">
            Đặt lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderManageTour;
