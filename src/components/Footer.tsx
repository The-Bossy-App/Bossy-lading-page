import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
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
  const socials = React.useMemo(
    () => [
      {
        image: "facebook.png",
        href: "https://www.facebook.com/",
      },
      {
        image: "x.png",
        href: "https://x.com/",
      },
      {
        image: "instagram.png",
        href: "https://www.instagram.com/",
      },
      {
        image: "linkedin.png",
        href: "https://www.linkedin.com/",
      },
    ],
    []
  );
  const contacts = React.useMemo(
    () => [
      "20 Presidential Street, Garki, Abuja, Nigeria",
      "Support@bossy.com",
      "+234 810 6652 973",
    ],
    []
  );
  const legals = React.useMemo(
    () => [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
    ],
    []
  );
  return (
    <footer className="text-white bg-dark-800 w-full h-full z-10 lg:px-20 px-5 lg:py-10 py-6 font-normal flex flex-col space-y-12">
      <section className="grid lg:grid-cols-3 grid-cols-[1fr_0.5fr] place-content-between content-around justify-between items-start flex-wrap gap-y-8 ">
        <div className="flex flex-col space-y-5 w-full">
          <div className="flex space-x-4 items-center">
            <span className="w-14 h-14 grid place-content-center rounded-full bg-white">
              <Image src="/Logo.png" width={30} height={30} alt="Logo" />
            </span>
            <h4 className="font-black text-2xl">Bossy</h4>
          </div>
          <p className="text-lg font-normal text-grey-300 w-3/4">
            Bossy is a Financial Services Inc. company 2024
          </p>
          <div className="relative lg:w-3/4 w-11/12">
            <Mail className="absolute left-6 top-0 bottom-0 m-auto w-5 h-5 text-grey-600" />
            <input
              type="text"
              placeholder="Your email address"
              className="w-full px-12 h-14 border-2 border-grey-600 rounded-full text-sm lg:text-base"
            />
            <button className="lg:py-3.5 py-2 rounded-full bg-primary-800 flex items-center justify-center text-white lg:px-10 px-4 absolute right-0 top-0 bottom-0">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="flex lg:items-center w-fit items-start lg:space-x-10 underline font-medium lg:flex-row flex-col lg:text-base text-2xl space-y-4 lg:space-y-0">
          {navItems.map((val) => (
            <Link key={val.label} href={val.href}>
              {val.label}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex-col flex-col-reverse gap-4 lg:justify-end lg:items-end">
          <div className="flex space-x-4 items-start lg:justify-start">
            {socials.map((val) => (
              <Link key={val.image} href={val.href}>
                <Image
                  src={`/socials/${val.image}`}
                  alt={val.image}
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            {contacts.map((val) => (
              <p
                key={val}
                className="text-lg lg:w-3/4 lg:ml-auto lg:text-right font-normal text-grey-300"
              >
                {val}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:hidden">
          {legals.map((val) => (
            <Link key={val.label} href={val.href}>
              {val.label}
            </Link>
          ))}
        </div>
      </section>
      <div className="pt-6 border-t border-t-grey-800 flex lg:justify-between">
        <p className="mx-auto lg:mx-0">2024 Bossy. All rights reserved.</p>
        <div className="lg:flex space-x-12 hidden">
          {legals.map((val) => (
            <Link key={val.label} href={val.href}>
              {val.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
