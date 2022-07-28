import { useEffect, useState } from "react";
import { getStorages } from "../../dataService";
import { Storage } from "../../models/Storage";
import Button from "../Button";
import FeatureItem from "../StorageCard";

export default function Listing() {
  const [storages, setStorages] = useState<Storage[]>([]);

  useEffect(() => {
    const getAsyncStrages = async () => {
      const list = await getStorages();
      setStorages(list);
    };
    getAsyncStrages();
  }, []);
  return (
    <div
      className="w-full mt-28 p-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: "url(/assets/images/listing_bg.jpg) #1849C6",
        backgroundSize: "cover",
        backgroundBlendMode: "color-burn",
      }}
    >
      <img
        src="/assets/images/shapes/shape_2.webp"
        alt=""
        className="hidden md:block absolute right-0 top-80"
      />
      <img
        src="/assets/images/shapes/shape_3.webp"
        alt=""
        className="hidden md:block absolute left-0 top-[778px]"
      />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl text-sectionDarkTitle">
          Active Listing Self Storages
        </h2>
        <p className="mt-5 text-lg leading-[30px] text-paragraphDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare.
        </p>
      </div>
      <div className="mx-auto mt-9 md:mt-12 lg:mt-[60px]">
        <ul className="w-full mx-auto flex flex-wrap gap-5 justify-center">
          {storages.map((item) => (
            <FeatureItem key={item.id} storageItem={item} />
          ))}
        </ul>
        <div className="mt-8 md:mt-14 flex justify-center">
          <Button
            varaity="cta"
            className="text-paragraphLight z-10 p-7 font-semibold text-xl w-[280px] md:w-[364px]"
          >
            View More Listing
          </Button>
        </div>
      </div>
    </div>
  );
}
