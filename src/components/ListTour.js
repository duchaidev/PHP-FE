import React from "react";

const ListTour = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start w-full ">
        <div className="flex items-center justify-center w-full ">
          <h2 className="text-4xl font-medium text-gray-500">Danh sách tour</h2>
        </div>
        <div className="mx-[150px] my-5 grid grid-cols-5 gap-2">
          {data.map((item, index) => (
            <ItemTour
              key={index}
              img={item?.img}
              location={item?.location}
              quantity={item?.quantity}
            ></ItemTour>
          ))}
        </div>
      </div>
    </div>
  );
};

function ItemTour({ img, location, quantity }) {
  return (
    <div className=" relative h-[300px] pr-4 mb-5">
      <div className="w-full h-full ">
        <img
          className="object-cover w-full h-full rounded-md "
          src={img}
          alt=""
        />
      </div>
      <div className="absolute text-white left-4 bottom-4">
        <h2 className="text-xl">{location}</h2>
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}

export default ListTour;
