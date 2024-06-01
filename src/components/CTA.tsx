import { Mail } from "lucide-react";
import * as React from "react";

export interface ICTAProps { }

const CTA: React.FC<ICTAProps> = (props) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  return (
    <section className="w-full text-center items-center bg-primary-800 flex flex-col text-white px-6 py-16 space-y-4 rounded-3xl">
      <h2 className="lg:text-4xl md:text-3xl text-2xl lg:w-5/12 font-semibold leading-snug">Ready to take control of your finances? </h2>
      <p className="lg:w-3/5 lg:text-xl md:text-lg text-sm">
        Welcome to our platform, where we revolutionise your finance journey!
        Input your email and start your journey towards financial freedom
      </p>
      <div className="w-fit mx-auto lg:w-5/12 w-11/12">
        <div className="relative w-full">
          <Mail className="absolute left-6 top-0 bottom-0 m-auto w-5 h-5 text-grey-600" />
          <input
            type="text"
            placeholder="Your email address"
            className="w-full px-12 h-14 border-2 text-grey-600 border-grey-600 rounded-full text-sm lg:text-base"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="lg:py-3.5 py-2 rounded-full bg-black flex items-center justify-center text-white lg:px-10 px-4 absolute right-0 top-0 bottom-0"
            onClick={() => {
              if (email.match(emailRegex)) {
                setSubmitted(true)
              }
            }}
          >
            Join Waitlist
          </button>
        </div>
        {submitted && <p className="text-lg text-white">Thank you for joining our waitlist!</p>}
      </div>
    </section>
  );
};
export default CTA;
