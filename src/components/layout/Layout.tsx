import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export type menuItem = {
  id: number;
  name: string;
  href: string;
};

export default function Layout() {
  const menuItems: menuItem[] = [
    {
      id: 1,
      name: "Active Listings",
      href: "",
    },
    {
      id: 2,
      name: "Sell your Self Storage",
      href: "",
    },
    {
      id: 3,
      name: "Free Evaluation",
      href: "",
    },
    {
      id: 4,
      name: "Learn",
      href: "",
    },
  ];
  return (
    <div className="w-full md:max-w-[1440px] relative flex flex-col bg-white mx-auto">
      <Nav menuItems={menuItems} />
      <Outlet />
      <Footer />
    </div>
  );
}
