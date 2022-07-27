import Button from "../components/Button";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col absolute top-0 w-full">
      <Hero backgroundUrl="/assests/images/home_header.webp">
        <div className="w-full mt-16 sm:mt-24 px-4 flex flex-col justify-center items-center md:max-w-[700px] md:mt-[60px]">
          <h1 className=" text-4xl leading-tight sm:text-5xl sm:leading-tight font-sans font-extrabold md:text-6xl md:leading-tight text-center text-white">
            Self Storage Business Buy. Sell. Learn.
          </h1>
          <p className="font-sans text-lg font-medium max-w-[594px] md:text-xl text-center text-white mt-4 md:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            sagittis, aliquam non tortor blandit lobortis. blandit
          </p>
          <div className="w-full md:w-auto flex flex-col md:flex-row justify-between gap-5 mt-[52px]">
            <Button
              className="w-full md:w-[251px] h-[60px] text-lg font-medium"
              varaity="secondry"
            >
              Sell Your Self Storage
            </Button>
            <Button
              varaity="secondry"
              className="w-full md:w-[251px] h-[60px] text-base bg-white font-semibold"
            >
              Active Self Storage Listings
            </Button>
          </div>
        </div>
      </Hero>
    </div>
  );
}
