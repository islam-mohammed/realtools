import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../Button";
import { menuItem } from "./Layout";
import Logo from "./Logo";

type Props = {
  isTransparent?: boolean;
  menuItems: menuItem[];
};

const Nav = ({ isTransparent = true, menuItems }: Props) => {
  return (
    <>
      <div
        className={`hidden w-full lg:flex md:px-9 xl:px-[98px] z-10 h-24 overflow-hidden text-white  justify-between items-center ${
          !isTransparent ? "bg-primary" : "bg-transparent"
        }`}
      >
        <Logo showText={true} />
        <div className="flex lg:ml-10 lg:gap-5 xl:gap-10 xl:ml-0 items-center w-full">
          <div className="flex gap-1 md:gap-3 lg:gap-5 xl:gap-10 justify-end items-center w-full">
            {menuItems.map((item) => (
              <span
                className="md:text-sm lg:text-lg cursor-pointer"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
            <Button
              varaity="cta"
              className="w-[110px] md:h-8 lg:h-9 md:text-sm lg:text-lg"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="relative pt-6 z-20 lg:hidden">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Logo showText={true} />
                  <div className="flex items-center lg:hidden">
                    <Popover.Button className="bg-transparent p-1 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset border-2 rounded border-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Logo className="text-gray-900" showText={true} />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <Button
                  varaity="cta"
                  className="block w-full px-5 py-3 text-center font-medium rounded-none"
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                online business
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main> */}
      </div>
    </>
  );
};
export default Nav;
