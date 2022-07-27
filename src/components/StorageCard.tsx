import { ListingItem } from "../models/ListingItem";
import Button from "./Button";
import LocationIcon from "./icons/LocationIcon";
import OccupancyIcon from "./icons/OccupancyIcon";
import SizeIcon from "./icons/SizeIcon";
import UnitIcon from "./icons/UnitIcon";

type Props = {
  storageItem: ListingItem;
};

export default function StorageCard({ storageItem }: Props) {
  return (
    <li>
      <div className="bg-cardBackground border box-border border-cardBorderColor rounded-[10px] w-[360px] p-5 md:w-[398px] md:p-[23px] md:pt-[19px]">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover shadow-lg rounded-lg"
            src={`/assets/images/${storageItem.imageName}`}
            alt=""
          />
        </div>
        <div className="space-y-2 mt-[30px]">
          <div className="text-2xl leading-7 font-semibold space-y-1 overflow-hidden text-ellipsis flex-nowrap">
            <h3 className="text-heading">{storageItem.title}</h3>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 grid-rows-2 justify-start text-sm md:text-base gap-x-[30px] gap-y-3 text-paragraphLight">
          <div className="flex gap-1 items-center">
            <LocationIcon />
            {storageItem.location}
          </div>
          <div className="flex gap-1 items-center">
            <UnitIcon />
            <span className="font-medium">Total Units:</span>
            {storageItem.totalUnits}
          </div>
          <div className="flex gap-1 items-center">
            <SizeIcon />
            <span className="font-medium">Size:</span> {storageItem.size}
          </div>
          <div className="flex gap-1 items-center">
            <OccupancyIcon />
            <span className="font-medium">Occupancy:</span>
            {storageItem.occupancy}
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <Button className="px-[70px] py-[15px] text-white text-base">
            View More Details
          </Button>
        </div>
      </div>
    </li>
  );
}
