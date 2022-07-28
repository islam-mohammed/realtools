import { useEffect, useState } from "react";
import { getFeaturedStorages } from "../../dataService";
import { Storage } from "../../models/Storage";
import FeatureItem from "../StorageCard";
import Slider from "../Slider";

export default function Featured() {
  const [storages, setStorages] = useState<Storage[]>([]);

  useEffect(() => {
    const getAsyncStrages = async () => {
      const list = await getFeaturedStorages();
      setStorages(list);
    };
    getAsyncStrages();
  }, []);
  return (
    <>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative ">
        <h2 className="text-3xl font-semibold sm:text-4xl text-sectionTitle">
          Featured Self Storages
        </h2>
        <p className="mt-5 text-lg leading-[30px] text-paragraphLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare.
        </p>
      </div>
      <div className="mx-auto mt-9 md:mt-12 lg:mt-[60px]">
        <ul className="w-full mx-auto flex flex-wrap gap-5 justify-center">
          {storages.map((storage) => (
            <FeatureItem key={storage.id} storageItem={storage} />
          ))}
        </ul>
        <div className="mt-8 md:mt-14">
          <Slider />
        </div>
      </div>
    </>
  );
}
