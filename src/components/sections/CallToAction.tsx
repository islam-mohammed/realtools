import Button from "../Button";
import MessageIcon from "../icons/MessageIcon";

export default function CallToAction() {
  return (
    <div
      className=" h-auto pt-16 pb-16 md:pt-0 md:pb-0 md:h-[584px] flex flex-col md:flex-row justify-center items-center"
      style={{
        background: "url(/assets/images/bg_5.webp), #E8EFFF",
        backgroundSize: "cover",
        backgroundBlendMode: "unset",
      }}
    >
      <div className="relative">
        <img
          src="/assets/images/message.svg"
          alt=""
          className="absolute right-24 -top-12"
        />
        <div
          className="z-20 w-auto md:w-[790px] lg:w-[1029px] h-auto md:h-[295px] rounded-[10px] p-6 md:p-[40px] lg:p-[90px] bg-white flex flex-col md:flex-row items-center justify-between relative"
          style={{
            boxShadow: "0px 30px 40px rgba(24, 73, 198, 0.1)",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold md:text-3xl xl:text-4xl text-sectionTitle">
              Any Queries? Reach Out to Us
            </h2>
            <p className="mt-5 text-lg leading-[30px] max-w-xl text-paragraphLight">
              Feel free to write to us, we are happy to help you
            </p>
          </div>

          <Button className="mt-5  md:mt-0 w-full md:w-auto text-white px-7 py-5">
            <div className="flex items-center justify-center gap-5">
              <span>Write to Us</span>
              <MessageIcon />
            </div>
          </Button>
        </div>
        <img
          src="/assets/images/shapes/shape_5.svg"
          alt=""
          className="z-0 absolute -left-[52px] -bottom-[52px] opacity-70"
        />
      </div>
    </div>
  );
}
