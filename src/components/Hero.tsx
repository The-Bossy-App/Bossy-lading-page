import { Mail } from "lucide-react";
import Image from "next/image";
import * as React from "react";

export interface IHeroProps { }

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <section className="flex items-center md:flex-row flex-col space-y-12 md:space-y-0 justify-between">
      <div className="xl:basis-4/12 md:basis-5/12 flex flex-col space-y-4">
        <h2 className="xl:text-6xl md:text-5xl text-4xl font-semibold">
          Make Your Payment <span className="text-primary-800">Faster</span> and <span className="text-primary-800">Easier</span>
        </h2>
        <p className="text-grey-600 xl:text-2xl md:text-xl text:lg">
          Bossy is a free, secure and easy way to pay other people in your
          neighbourhood.<br /> No fees!
        </p>
        <div className="relative w-full">
          <Mail className="absolute left-6 top-0 bottom-0 m-auto w-5 h-5 text-grey-600" />
          <input
            type="text"
            placeholder="Your email address"
            className="w-full px-12 h-14 border-2 border-grey-600 rounded-full"
          />
          <button className="py-3.5 rounded-full bg-primary-800 flex items-center justify-center text-white px-10 absolute right-0 top-0 bottom-0">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="basis-5/12">
        <Image src="/hero-illustration.png" alt="Illustration" width={512 * 2} height={512 * 2} className="w-full" />
      </div>
    </section>
  );
};
export default Hero;
