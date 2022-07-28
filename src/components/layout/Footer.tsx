import Logo from "./Logo";
import styles from "./Footer.module.scss";
import Button from "../Button";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import { ChevronDownIcon } from "@heroicons/react/outline";
import EarthIcon from "../icons/EarthIcon";

export default function Footer() {
  return (
    <div
      className={`h-auto text-base bg-white pt-[154px] pb-5 md:pb-14 px-[76px] gap-10  text-footerColor font-roboto ${styles.footer}`}
    >
      <img
        src="/assets/images/shapes/shape_6.svg"
        alt=""
        className="hidden md:block absolute right-5 bottom-5 opacity-50"
      />
      <img
        src="/assets/images/shapes/shape_7.svg"
        alt=""
        className="hidden md:block absolute right-11 bottom-0 opacity-50"
      />
      <img
        src="/assets/images/shapes/shape_8.svg"
        alt=""
        className="hidden md:block absolute left-5 bottom-5 opacity-50"
      />
      <img
        src="/assets/images/shapes/shape_9.svg"
        alt=""
        className="hidden md:block absolute left-11 bottom-0 opacity-50"
      />

      <div className={`flex flex-col justify-start ${styles.about}`}>
        <Logo className="text-gray-900" fill="#1849C6" showText={true} />

        <p className="font-normal text-base mt-4">
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p className="font-normal text-base mt-9">
          © StorageConnect 2022, All Rights Reserved
        </p>
      </div>
      <div className={`flex flex-col justify-start ${styles.quickLinks}`}>
        <h4 className="text-heading font-bold text-lg uppercase">
          Quick Links
        </h4>
        <ul>
          {/* Should be links */}
          <li className="mt-5 cursor-pointer">Active Listings</li>
          <li className="mt-5 cursor-pointer">Self your Self Storage</li>
          <li className="mt-5 cursor-pointer">Free Evaluation</li>
          <li className="mt-5 cursor-pointer">Learn</li>
        </ul>
      </div>
      <div className={`flex flex-col justify-start ${styles.newsLetter}`}>
        <h4 className="text-heading font-bold text-lg uppercase">Newsleter</h4>
        <div className="mt-5">
          <span>Get latest updates right in your inbox</span>
          <input
            type="text"
            placeholder="Enter your emaill"
            className="w-full rounded-[10px] px-[26px] py-[17px] text-paragraphLight font-sans text-xs lg:w-[250px] border border-sectionColor mt-2"
          />
          <Button className="w-full md:w-auto text-white px-5 py-3 font-sans mt-[10px]">
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className={`flex flex-col justify-start ${styles.social}`}>
        <h4 className="text-heading font-bold text-lg uppercase">
          Let’s get social
        </h4>
        <div className="grid grid-cols-4 mt-7 justify-center items-center">
          <FacebookIcon fill="#1849C6" width={40} height={40} />
          <InstagramIcon fill="#1849C6" width={40} height={40} />
          <TwitterIcon fill="#1849C6" width={40} height={40} />
          <YouTubeIcon fill="#1849C6" width={46} height={46} />
        </div>
        <form className="mt-4 sm:max-w-xs">
          <fieldset className="w-full">
            <label htmlFor="language" className="sr-only">
              Language
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center">
                <EarthIcon
                  className="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <select
                id="language"
                name="language"
                className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-11 pr-10 text-lg text-gray-900 focus:outline-none sm:text-sm font-medium mt-4"
                defaultValue="English"
              >
                <option className="my-1">English</option>
                <option className="my-1">French</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
