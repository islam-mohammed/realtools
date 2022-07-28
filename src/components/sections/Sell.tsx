import React from "react";
import Button from "../Button";

export default function Sell() {
  return (
    <div className="p-24 px-4 h-auto rounded-none relative overflow-hidden sm:px-6 md:px-24 md:h-[746px] md:rounded-br-[300px] bg-sectionColor flex items-center">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold md:text-3xl xl:text-4xl text-sectionTitle">
          Do you have a Self Storage for Sale?
        </h2>
        <p className="mt-5 text-lg leading-[30px] max-w-xl text-paragraphLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>
        <div className="mt-14">
          <Button className="px-8 py-5 font-semibold text-white text-[18px]">
            Sell Your Self Storage
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/assets/images/person_1.webp"
          alt=""
          className="h-[600px] absolute bottom-5 lg:right-[77px] xl:right-[117px]"
        />
        <img
          src="/assets/images/pngwing-1.webp "
          alt=""
          className="absolute -bottom-2 lg:right-[44px] xl:right-[84px] w-[679px]"
        />

        <img
          src="/assets/images/shapes/shape_4.webp"
          alt=""
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
}
