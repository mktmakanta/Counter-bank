import { FaLandmark, FaChartLine, FaBrain } from "react-icons/fa";

export default function Service() {
  return (
    <section className="bg-white text-black">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-7xl pt-12 lg:pt-20 ">
          Your money's <span className="text-red-600 italic">worth</span> more
        </h1>
        <p className="my-3 text-sm lg:text-base">
          Maximize your financial returns with astute solutions <br /> and
          tailored guidance to cultivate enduring wealth.
        </p>
        <div className=" gap-3 flex justify-center font-medium my-10">
          <button className="bg-red-600 text-white rounded-full px-5 py-2">
            Get started
          </button>
          <button className="ring-1 ring-red-600 text-black rounded-full px-5 py-2  ">
            Learn more
          </button>
        </div>
      </div>
      <div className=" flex justify-center pt-6 lg:pt-14">
        <div className="flex flex-col lg:flex-row space-x-6 p-6">
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-200">
                {" "}
                <FaLandmark className="fill-red-600 text-3xl  " />
              </div>
            </div>
            <h1 className="font-semibold my-4">Unrevaled accessibility</h1>
            <p className="font-medium max-w-sm mx-auto text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              expedita at libero unde ea necessitatibus ratione!
            </p>
            <button className="font-semibold text-red-600 my-7">
              ReadMore
            </button>
          </div>
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-200">
                {" "}
                <FaChartLine className="fill-red-600 text-3xl  " />
              </div>
            </div>
            <h1 className="font-semibold my-4">Unrevaled accessibility</h1>
            <p className="font-medium max-w-sm mx-auto text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias officia numquam quidem possimus, excepturi similique?
            </p>
            <button className="font-semibold text-red-600 my-7">
              ReadMore
            </button>
          </div>
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-200">
                {" "}
                <FaBrain className="fill-red-600 text-3xl  " />
              </div>
            </div>
            <h1 className="font-semibold my-4">Unrevaled accessibility</h1>
            <p className="font-medium max-w-sm mx-auto text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit omnis unde similique illo qui expedita odio quae.
            </p>
            <button className="font-semibold text-red-600 my-7">
              ReadMore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
