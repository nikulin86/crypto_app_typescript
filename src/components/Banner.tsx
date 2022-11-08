import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <>
      <div className="flex flex-col justify-around py-25 h-400 mt-[100px]">
        <div className="flex flex-col justify-center h-3/5 text-center">
          <div
            className="mb-15
        text-yellow-200 font-bold"
          >
            {" "}
            Crypto App{" "}
          </div>
          <div className="text-lime-400 text-2xl font-bold">
            {" "}
            Aplication Using "Redux Toolkit & Typescript"{" "}
          </div>
        </div>
       
      </div>
      <Carousel />
    </>
  );
}

export default Banner;
