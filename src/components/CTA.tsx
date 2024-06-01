import { Mail } from "lucide-react";
import * as React from "react";

export interface ICTAProps {}

const CTA: React.FC<ICTAProps> = (props) => {
  return (
    <section className="w-full text-center items-center bg-primary-800 flex flex-col text-white px-6 py-16 space-y-4 rounded-3xl">
      <h2 className="lg:text-4xl md:text-3xl text-2xl lg:w-5/12 font-semibold leading-snug">Ready to take control of your finances? </h2>
      <p className="lg:w-3/5 lg:text-xl md:text-lg text-sm">
        Welcome to our platform, where we revolutionise your finance journey!
        Input your email and start your journey towards financial freedom
      </p>
      <div className="relative lg:w-5/12 w-11/12">
          <Mail className="absolute left-6 top-0 bottom-0 m-auto w-5 h-5 text-grey-600" />
          <input
            type="text"
            placeholder="Your email address"
            className="w-full px-12 h-14 border-2 border-grey-600 rounded-full text-sm lg:text-base"
          />
          <button className="lg:py-3.5 py-2 rounded-full bg-black flex items-center justify-center text-white lg:px-10 px-4 absolute right-0 top-0 bottom-0">
            Join Waitlist
          </button>
        </div>
    </section>
  );
};
export default CTA;
