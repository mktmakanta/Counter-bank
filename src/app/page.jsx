import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white bg-red-600 p-5 pb-0">
      <div className="max-w-3xl mx-auto text-center space-y-5 lg:space-y-8 px-6 pt-10 lg:pt-20">
        <h1 className="text-5xl lg:text-6xl">
          Change the bank account you use.{" "}
          <span className="italic">Obtain more </span>
        </h1>
        <p className=" lg:w-2/3 mx-auto">
          Get a $100 bonus when you move qualifying direct deposit to Counter-
          our high interest, no monthly fee account. T&Cs apply. Change the bank
          account you use. Obtain more{" "}
        </p>
        <button className="px-4 py-2 bg-white text-black rounded-full font-medium shadow-md hover:bg-slate-200">
          Open a Cash Account
        </button>

        <div className="">
          <div className=" flex flex-col justify-start  lg:flex-row lg:justify-between lg:font-thin">
            <div className="flex justify-center items-center">
              <FaCheck className="inline-block bg-white rounded-full text-red-600 p-1 mr-2" />
              Exempt from state taxes
            </div>
            <div className="flex justify-center items-center">
              <FaCheck className="inline-block bg-white rounded-full text-red-600 p-1 mr-2" />
              Backed by the US Govt
            </div>
            <div className="flex justify-center items-center">
              <FaCheck className="inline-block bg-white rounded-full text-red-600 p-1 mr-2" />
              Easy to use experience
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            className="mx-auto  "
            src="/images/hero.png"
            layout="responsive"
            alt="hero"
            width={200}
            height={100}
          />
        </div>
      </div>
    </main>
  );
}
