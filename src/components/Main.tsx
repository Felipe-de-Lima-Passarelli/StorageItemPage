"use client";

//Next
import Image from "next/image";
import { useState } from "react";

const Main = () => {
  const [actualImage, setActualImage] = useState<number>(1);
  const [actualValor, setActualValor] = useState<number>(0);

  const changeImage = (paramName: string) => {
    if (paramName === "prev") {
      if (actualImage === 1) {
        setActualImage(4);
      } else {
        setActualImage(actualImage - 1);
      }
    } else {
      if (actualImage === 4) {
        setActualImage(1);
      } else {
        setActualImage(actualImage + 1);
      }
    }
  };

  return (
    <main className="flex-1">
      <div className="md:flex md:items-center md:mx-26 gap-10">
        <Image
          src={`/img/image-product-${actualImage}.jpg`}
          alt="Tenis Image"
          width={500}
          height={500}
          className="w-full h-150 md:w-150 md:h-120 md:rounded-xl"
        />
        <div className="md:hidden m-10">
          <h2 className="text-[#696D70] font-black tracking-widest">
            SNEAKER COMPANY
          </h2>
          <h1 className="mt-4 mb-8 font-black text-6xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mb-6 text-[#696D70] text-xl">
            These low-profile sneakers are you perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they&apos;ll
            <br />
            withstand everything the weather can offer.
          </p>
          <div className="flex flex-row gap-6 font-black text-3xl items-center">
            <p>$125.00</p>
            <p className="text-white bg-black py-1 px-2 rounded-xl text-center">
              50%
            </p>
            <p className="flex-1"></p>
            <p className="opacity-80 line-through text-[#696D70] text-xl">
              $250.00
            </p>
          </div>
          <div>
            <div className="relative">
              <input
                type="number"
                className="hidden sm:block bg-[#F7F8FD] w-full mt-6 rounded-xl text-center py-4 appearance-none border-none outline-none focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
                value={actualValor}
                disabled
              />
              <button className="cursor-pointer">
                <Image
                  src="img/icon-plus.svg"
                  alt="Plus Logo"
                  width={15}
                  height={15}
                  className="absolute top-5 right-10"
                  onClick={() => setActualValor(actualValor + 1)}
                />
                <Image
                  src="img/icon-minus.svg"
                  alt="Minus Logo"
                  width={15}
                  height={15}
                  className="absolute top-6 left-10"
                  onClick={() => {
                    if (actualValor != 0) {
                      setActualValor(actualValor - 1);
                    }
                  }}
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <button className="bg-[#FFAC6A] py-4 w-full rounded-xl text-[#290B00] font-black text-xl mr-50 cursor-pointer">
              <span className="ml-10">Add to cart</span>
            </button>
            <Image
              src="img/icon-cart.svg"
              alt="Cart Logo"
              width={30}
              height={30}
              className="absolute top-4 left-10"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="text-[#696D70] font-black tracking-widest">
            SNEAKER COMPANY
          </h2>
          <h1 className="mt-4 mb-8 font-black text-6xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mb-6 text-[#696D70] text-xl">
            These low-profile sneakers are you perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they&apos;ll
            <br />
            withstand everything the weather can offer.
          </p>
          <div className="flex flex-row gap-4 font-black text-3xl items-center">
            <p>$125.00</p>
            <p className="text-white bg-black py-1 px-2 rounded-xl text-center">
              50%
            </p>
          </div>
          <p className="opacity-80 line-through mt-6 text-[#696D70] text-xl">
            $250.00
          </p>
          <div className="flex flex-row gap-4 mt-10 items-center">
            <div className="relative">
              <button className="cursor-pointer">
                <Image
                  src="img/icon-plus.svg"
                  alt="Plus Logo"
                  width={15}
                  height={15}
                  className="absolute top-5 right-4"
                  onClick={() => setActualValor(actualValor + 1)}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="img/icon-minus.svg"
                  alt="Minus Logo"
                  width={15}
                  height={15}
                  className="absolute top-6 left-4"
                  onClick={() => {
                    if (actualValor != 0) {
                      setActualValor(actualValor - 1);
                    }
                  }}
                />
              </button>
              <input
                type="number"
                className="bg-[#F7F8FD] w-40 rounded-xl text-center py-4 appearance-none border-none outline-none focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]"
                value={actualValor}
                disabled
              />
            </div>
            <div className="relative">
              <button className="bg-[#FFAC6A] py-4 w-full rounded-xl text-[#290B00] font-black text-xl mr-50 cursor-pointer">
                <span className="ml-10">Add to cart</span>
              </button>
              <Image
                src="img/icon-cart.svg"
                alt="Cart Logo"
                width={30}
                height={30}
                className="absolute top-4 left-10"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-white w-16 h-16 rounded-full absolute top-85 left-5 font-black text-4xl md:hidden"
            onClick={() => changeImage("prev")}
          >
            &lt;
          </button>
          <button
            className="bg-white w-16 h-16 rounded-full absolute top-85 right-5 font-black text-4xl md:hidden"
            onClick={() => changeImage("next")}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="mx-26 mt-10 flex-row w-150 justify-between gap-10 hidden md:flex">
        <div>
          <button
            className={`cursor-pointer rounded-xl ${actualImage === 1 ? "border-3 border-orange-500" : ""}`}
            onClick={() => {
              if (actualImage != 1) {
                setActualImage(1);
              }
            }}
          >
            <Image
              src={`/img/image-product-1.jpg`}
              alt="Tenis Image"
              width={150}
              height={150}
              className={
                actualImage === 1 ? "opacity-50 rounded-md" : "rounded-md"
              }
            />
          </button>
        </div>
        <div>
          <button
            className={`cursor-pointer rounded-xl ${actualImage === 2 ? "border-3 border-orange-500" : ""}`}
            onClick={() => {
              if (actualImage != 2) {
                setActualImage(2);
              }
            }}
          >
            <Image
              src={`/img/image-product-2.jpg`}
              alt="Tenis Image"
              width={150}
              height={150}
              className={
                actualImage === 2 ? "opacity-50 rounded-md" : "rounded-md"
              }
            />
          </button>
        </div>
        <div>
          <button
            className={`cursor-pointer rounded-xl ${actualImage === 3 ? "border-3 border-orange-500" : ""}`}
            onClick={() => {
              if (actualImage != 3) {
                setActualImage(3);
              }
            }}
          >
            <Image
              src={`/img/image-product-3.jpg`}
              alt="Tenis Image"
              width={150}
              height={150}
              className={
                actualImage === 3 ? "opacity-50 rounded-md" : "rounded-md"
              }
            />
          </button>
        </div>
        <div>
          <button
            className={`cursor-pointer rounded-xl ${actualImage === 4 ? "border-3 border-orange-500" : ""}`}
            onClick={() => {
              if (actualImage != 4) {
                setActualImage(4);
              }
            }}
          >
            <Image
              src={`/img/image-product-4.jpg`}
              alt="Tenis Image"
              width={150}
              height={150}
              className={
                actualImage === 4 ? "opacity-50 rounded-md" : "rounded-md"
              }
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
