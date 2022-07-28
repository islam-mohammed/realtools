import Button from "../Button";

export default function Buy() {
  return (
    <div
      className="p-24 px-4 h-auto rounded-none relative overflow-hidden sm:px-6 md:px-24 md:h-[754px] flex items-center"
      style={{
        backgroundImage: "url(assets/images/bg_3.webp)",
        backgroundSize: "cover",
      }}
    >
      <div className="hidden lg:block w-1/2">
        <img
          src="/assets/images/person_2.webp"
          alt=""
          className="absolute bottom-0 lg:-left-12 xl:left-7 "
        />
      </div>
      <div className="flex flex-col lg:w-1/2">
        <h2 className="text-2xl font-bold md:text-3xl xl:text-4xl text-sectionTitle">
          Do you want to buy a Self Storage?
        </h2>
        <p className="mt-5 text-lg leading-[30px] max-w-xl text-paragraphLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>
        <div className="mt-14">
          <Button className="px-8 py-5 font-semibold text-white text-[18px]">
            Buy Your Self Storage
          </Button>
        </div>
      </div>
    </div>
  );
}
