import Image from "next/image";
import * as React from "react";

export interface IServicesProps {}

const Services: React.FC<IServicesProps> = (props) => {
  const services = React.useMemo(
    () => [
      {
        title: "Money Transfer",
        description:
          "Start your first money transfer with just a few clicks. Select the amount, choose the recipient, and confirm the transfer.",
        image: "image_1.png",
      },
      {
        title: "Bills Payment",
        description:
          "Initiate your first bill payment. Select the bill, choose the payment method, and confirm the payment.",
        image: "image_2.png",
      },
      {
        title: "Virtual Cards",
        description:
          "Generate a virtual card instantly. Use it for online purchases, subscriptions, and more.",
        image: "image_3.png",
      },
    ],
    []
  );
  return (
    <section id="services" className="flex flex-col space-y-6">
      <h2 className="text-3xl font-semibold">
        <span className="text-primary-800">Quick Steps</span> to Use Our
        Services
      </h2>
      <div className="flex justify-between lg:space-x-16 space-y-3.5 lg:space-y-0 lg:flex-row flex-col">
        {services.map((val) => (
          <div key={val.title} className="flex flex-col space-y-5 lg:basis-1/3 w-full">
            <Image
              src={`/services/${val.image}`}
              alt={val.title}
              width={512}
              height={512}
              className="w-full h-full"
            />
            <div className="flex flex-col space-y-1">
              <h3 className="text-2xl font-semibold">{val.title}</h3>
              <p className="text-base text-grey-600">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
