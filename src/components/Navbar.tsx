import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface INavbarProps { }

const Navbar: React.FC<INavbarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = React.useMemo(
    () => [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Why Bossy",
        href: "/why-bossy",
      },
    ],
    []
  );
  return (
    <nav className="flex justify-between items-center p-5 w-full border-b border-b-primary-800 lg:border-b-transparent px-5 md:px-16 lg:px-20">
      <div className="flex space-x-4 items-center">
        <span className="w-14 h-14 grid place-content-center rounded-full bg-primary-200/[0.18]">
          <Image src="/Logo.png" width={30} height={30} alt="Logo" />
        </span>
        <h4 className="font-black text-2xl">Bossy</h4>
      </div>
      <div
        className="fixed inset-0 inset-y-0 gap-8 top-[88px] h-full z-30 w-full lg:w-auto items-center flex translate-x-[100%] flex-col space-y-4 px-5 py-8 transition-transform duration-700 ease-in-out data-true:-translate-x-2 data-true:bg-white data-true:backdrop-blur-xl lg:relative lg:inset-auto lg:top-0 lg:flex lg:translate-x-0 lg:flex-row lg:items-center  lg:space-x-2 lg:space-y-0 lg:px-0 lg:py-0 lg:data-true:translate-x-0 lg:data-true:bg-transparent"
        data-true={isMenuOpen}
      >
        <div className="flex gap-12 lg:flex-row flex-col items-center text-xl lg:text-base text-primary-800">
          {navItems.map((val) => (
            <Link key={val.label} href={val.href}>
              {val.label}
            </Link>
          ))}
        </div>
        <button className="py-3.5 rounded-full bg-primary-800 text-white px-10 ">
          Join Waitlist
        </button>
      </div>
      <div
        className="relative z-50 h-0.5 w-6 cursor-pointer rounded-full bg-primary-800 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:h-0.5 before:w-6 before:rounded-full before:bg-primary-800 before:transition-all before:duration-300 before:ease-in-out after:absolute after:top-2 after:h-0.5 after:w-6 after:rounded-full after:bg-primary-800 after:transition-all after:duration-300 after:ease-in-out data-true:bg-transparent data-true:before:top-0 data-true:before:-rotate-45 data-true:after:top-0 data-true:after:rotate-45 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-true={isMenuOpen}
      />
    </nav>
  );
};
export default Navbar;
