"use client";
import React, { useState } from "react";
import Card from "../components/card/card";
import data from "../../public/utils/data";

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.goods.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div
        className="sm:text-3xl pt-7 pb-7 uppercase text-center font-bold text-7xl border-zinc-950 border-b-2"
        style={{ marginBottom: "-1px" }}
      >
        каталог
      </div>
      <div className="lg:mr-7 lg:ml-7 mr-28 ml-28 flex items-center justify-center flex-wrap">
        {currentItems.map((good) => (
          <Card
            key={good.id}
            id={good.id}
            title={good.title}
            image={good.photo[0]}
            price={good.price}
          />
        ))}
      </div>

      <div>
        {data.goods.length > itemsPerPage && (
          <div className="mt-16 flex justify-center items-center gap-3 mb-14">
            {Array.from(
              { length: Math.ceil(data.goods.length / itemsPerPage) },
              (_, index) => (
                <button
                  style={{ border: "1px solid black", padding: "14px" }}
                  className={`hover:bg-black hover:text-zinc-50 ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
