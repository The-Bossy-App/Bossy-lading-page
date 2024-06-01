import Image from "next/image";
import * as React from "react";

export interface IFeaturesProps {}

const Features: React.FC<IFeaturesProps> = (props) => {
  const features = React.useMemo(
    () => [
      {
        heading: "User Friendly",
        description:
          "BossyPay is a free, secure and easy way to pay other people in your neighbourhood.",
        image: "image_1.png",
      },
      {
        heading: "24/7 Hour Support",
        description:
          "Our support team is available 24/7 to help you with any questions or issues you might encounter when using the app.",
        image: "image_2.png",
      },
      {
        heading: "Best Security",
        description:
          "Your security is our highest priority. We use encryption to protect your personal information and ensure your data is always safe.",
        image: "image_3.png",
      },
    ],
    []
  );
  return (
    <section className="flex justify-between">
      <div className="bg-primary-800 w-5/12 hidden md:flex items-center justify-center rounded-3xl px-6 h-fit pt-28">
        <Image
          src="/features-illustration.png"
          alt="Features"
          width={512}
          height={512}
          className="h-auto w-full mt-auto"
        />
      </div>
      <div className="md:w-5/12 flex flex-col space-y-5">
        <h2 className="text-3xl font-semibold">
          Take <span className="text-primary-800">Control of Everything </span>
          in Your Hands
        </h2>
        <p className="leading-relaxed text-xl text-grey-600">The only fintech app you&apos;ll ever need.</p>

        <div className="flex flex-col space-y-10">
          {features.map((val) => (
            <div key={val.heading} className="flex w-full space-x-6">
              <div className="rounded-lg border-l-4 shadow-lg border-l-primary-800 basis-32 h-20 items-center flex justify-center">
                <Image
                  src={`/features/${val.image}`}
                  alt={val.heading}
                  width={512}
                  height={512}
                  className="w-8/12 h-auto"
                />
              </div>
              <div className="basis-11/12 space-y-2">
                <h3 className="text-3xl font-semibold">{val.heading}</h3>
                <p className="lg:text-lg text-sm text-grey-600">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
