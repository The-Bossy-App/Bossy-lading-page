import { Mail } from "lucide-react";
import Image from "next/image";
import * as React from "react";

export interface IHeroProps { }

const Hero: React.FC<IHeroProps> = (props) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
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
        <div>
          <div className="relative w-full">
            <Mail className="absolute left-6 top-0 bottom-0 m-auto w-5 h-5 text-grey-600" />
            <input
              type="text"
              placeholder="Your email address"
              className="w-full px-12 h-14 border-2 border-grey-600 rounded-full"
            />
            <button
              className="py-3.5 rounded-full bg-primary-800 flex items-center justify-center text-white px-10 absolute right-0 top-0 bottom-0"
              onClick={() => {
                if (email.match(emailRegex)) {
                  setSubmitted(true)
                }
              }}
            >
              Join Waitlist
            </button>
          </div>
          {submitted && <p className="text-lg text-green-600">Thank you for joining our waitlist!</p>}
        </div>
      </div>
      <div className="basis-5/12">
        <Image src="/hero-illustration.png" alt="Illustration" width={512 * 2} height={512 * 2} className="w-full" />
      </div>
    </section>
  );
};
export default Hero;
