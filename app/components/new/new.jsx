"use client";

import React from "react";
import Card from "../../components/card/card";
import Link from "next/link";
import data from "../../../public/utils/data";

const New = () => {
  const [goods, setGoods] = React.useState([]);

  React.useEffect(() => {
    setGoods(data.goods);
  }, []);

  if (!goods) {
    return <div>Loading...</div>;
  }
  console.log(goods);
  return (
    <div id="new">
      <div
        className="sm:text-3xl mt-7 pt-7 pb-7 uppercase text-center font-bold text-7xl border-t-2 border-zinc-700 border-b-2"
        style={{ marginBottom: "-1px" }}
      >
        новинки
      </div>
      <div className="lg:mr-7 lg:ml-7 mr-28 ml-28 flex items-center justify-center flex-wrap">
        {goods.slice(0, 6).map((good) => (
          <Card
            key={good.id}
            id={good.id}
            title={good.title}
            image={good.photo[0]}
            price={good.price}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-14 mb-14">
        <Link
          href="/catalog"
          className="pt-4 pb-4 pr-14 pl-14  lowercase font-bold text-center hover:scale-95"
          style={{
            background: "#D5DBFC",
            borderRadius: "10px",
            width: "253px",
            fontSize: "16px",
          }}
        >
          все товары
        </Link>
      </div>
    </div>
  );
};

export default New;
