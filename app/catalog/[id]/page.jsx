"use client";
import { useParams } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import data from "../../../public/utils/data";
import Tabs from "@/app/components/tabs/tabs";

const CatalogIdPage = () => {
  const [good, setGood] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    const foundGood = data.goods.find((good) => good.id == id);
    setGood(foundGood);
  }, [id]);

  if (!good) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ borderBottom: "1px solid black" }} className="bg-white">
        <div
          className="md:text-3xl pt-7 pb-7 uppercase text-center font-bold text-7xl border-zinc-950 border-b-2"
          style={{ marginBottom: "-1px" }}
        >
          {good.title}
        </div>
        <div className="w-full flex justify-between bg-white xl:flex-col">
          <div className="flex items-center gap-20">
            <div
              style={{ borderRight: "1px solid black" }}
              className="md:hidden w-72 h-full flex flex-col items-center justify-center"
            >
              {good.photo &&
                good.photo.map(
                  (p, index) =>
                    index !== 0 && <img key={index} className="w-40" src={p} />
                )}
            </div>
            <div className="md:w-full w-1/2 p-3 flex justify-center items-center bg-white">
              <img src={good.photo && good.photo[0]} />
            </div>
          </div>
          <div
            style={{ background: "#D5DBFC" }}
            className="xl:w-full w-1/2 box-border flex flex-col justify-between "
          >
            {good.brand === "converse" ? (
              <img
                style={{ borderBottom: "1px solid black" }}
                className="xl:pr-24 xl:pl-24 p-6"
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg"
              />
            ) : (
              <img
                className="p-6"
                src="https://download.logo.wine/logo/Adidas/Adidas-Logo.wine.png"
              />
            )}
            <div className="p-6 pb-4">
              <span className="font-bold ">размеры</span>
              <div className="flex gap-3 flex-wrap ">
                {good.size &&
                  good.size.map((s) => (
                    <span key={s} className="hover:bg-white p-1 rounded-xl">
                      {s}
                    </span>
                  ))}
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid black" }}
              className="p-6 pt-0"
            >
              <span className="font-bold">цвета</span>
              <div className="flex gap-5 mt-3">
                {good.colors &&
                  good.colors.map((color) => (
                    <div
                      key={color}
                      className="hover:scale-95"
                      style={{
                        background: color,
                        width: "30px",
                        height: "30px",
                      }}
                    ></div>
                  ))}
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid black" }}
              className="flex justify-between items-center gap-2 p-6"
            >
              <span className="text-4xl font-bold">
                {good.price && good.price[0]}₽
              </span>
              <div className="flex gap-2">
                <Link href="/" className="hover:scale-95">
                  <FaRegHeart size={30} />
                </Link>
                <Link href="/" className="hover:scale-95">
                  <MdOutlineShoppingCart size={35} />
                </Link>
              </div>
            </div>

            <button
              style={{ border: "1px solid black" }}
              className=" text-lg  p-3  m-6 bg-white text-zinc-900 rounded-xl hover:bg-black hover:text-zinc-50"
            >
              купить в один клик
            </button>
          </div>
        </div>
      </div>

      <Tabs text={good.characteristic} />
    </>
  );
};

export default CatalogIdPage;
