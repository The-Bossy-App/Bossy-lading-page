import Image from "next/image";
import * as React from "react";
import Footer from "./Footer";

export interface IAppStoreProps { }

const AppStore: React.FC<IAppStoreProps> = (props) => {
  return (
    <section className="flex flex-col  items-center -z-10">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold lg:w-5/12 w-3/4 text-center mx-auto leading-normal">
        To be released on AppStore & PlayStore soon
      </h2>
      <Image
        src="/stores.png"
        width={512}
        height={512}
        alt="Stores"
        className="-mb-48"
      />
    </section>
  );
};
export default AppStore;
