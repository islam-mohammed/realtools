import React from "react";
import FeatureItem from "../FeatureItem";
import Slider from "../Slider";

type Props = {};

export interface IFeatured {
  id: number;
  title: string;
  location: string;
  totalUnits: number;
  occupancy: string;
  size: string;
  imageName: string;
}

export default function Featured({}: Props) {
  const featured: IFeatured[] = [
    {
      id: 1,
      title: "Heading of this Self Storage",
      location: "Jersy City, NJ",
      totalUnits: 89,
      occupancy: "56%",
      size: "40,233 Sq Ft",
      imageName: "store1.png",
    },
    {
      id: 2,
      title: "Heading of this Self Storage",
      location: "Jersy City, NJ",
      totalUnits: 89,
      occupancy: "56%",
      size: "40,233 Sq Ft",
      imageName: "store2.png",
    },
    {
      id: 3,
      title: "Heading of this Self Storage",
      location: "Jersy City, NJ",
      totalUnits: 89,
      occupancy: "56%",
      size: "40,233 Sq Ft",
      imageName: "store3.png",
    },
  ];
  return (
    <>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
          {featured.map((item) => (
            <FeatureItem key={item.id} featuredItem={item} />
          ))}
        </ul>
        <div className="mt-8 md:mt-14">
          <Slider />
        </div>
      </div>
    </>
  );
}
