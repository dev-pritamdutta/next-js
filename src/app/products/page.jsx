import React from "react";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();
  // console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-6">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="border border-blue-500 shadow-lg shadow-yellow-500 p-4 rounded-lg flex flex-col items-center"
          >
            <h1 className="text-xl font-bold mb-2">{item.name}</h1>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-green-500 font-semibold">{item.price}</p>
            <img
              src={item.image}
              alt="no image here"
              className="w-48 h-48 object-cover mb-2 rounded-md"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
