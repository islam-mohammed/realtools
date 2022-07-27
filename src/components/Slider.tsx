import { useState } from "react";

type Props = {
  onMoveForword?: () => void;
  onMoveBackword?: () => void;
  numberOfPages?: number;
};
/* 
The slider should work with pagination when calling the backend.
This function is not working now it is just for demonstrating the design
*/
export default function Slider({
  onMoveForword,
  onMoveBackword,
  numberOfPages,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="width-full flex justify-center gap-x-[14px]">
      <button
        type="button"
        className={`border border-gray-300 w-[26px] h-[26px] rounded-full ${
          currentPage === 1 ? "bg-primary" : "bg-white"
        }`}
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
        onClick={() => setCurrentPage(1)}
      ></button>
      <button
        type="button"
        className={`border border-gray-300 w-[26px] h-[26px] rounded-full ${
          currentPage === 2 ? "bg-primary" : "bg-white"
        }`}
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
        onClick={() => setCurrentPage(2)}
      ></button>
      <button
        type="button"
        className={`border border-gray-300 w-[26px] h-[26px] rounded-full ${
          currentPage === 3 ? "bg-primary" : "bg-white"
        }`}
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
        onClick={() => setCurrentPage(3)}
      ></button>
      <button
        type="button"
        className={`border border-gray-300 w-[26px] h-[26px] rounded-full ${
          currentPage === 4 ? "bg-primary" : "bg-white"
        }`}
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
        onClick={() => setCurrentPage(4)}
      ></button>
    </div>
  );
}
