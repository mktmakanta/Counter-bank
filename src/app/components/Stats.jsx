import { FaChartLine } from "react-icons/fa";

export default function Stats() {
  return (
    <section className="bg-black p-8 lg:p-20 text-white divide-y-2 divide-slate-600">
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none pb-4">
        <div className="">
          <h1 className="text-5xl  lg:text-7xl font-medium mb-5">
            Trusted by over <br />
            <span className="text-red-600 italic">9 Million</span> People
          </h1>
          <p className="text-neutral-200 w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quis beatae dolor corrupti distinctio ratione maiores temporibus,
            voluptatem veniam, incidunt animi quo eveniet tenetur officiis qui
            consequatur repudiandae harum eligendi vitae sequi voluptate error.
            Perspiciatis asperiores iste beatae vvoluptatum distinctio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sunt, modi.
          </p>
        </div>
        <div className="flex justify-end">
          <div className=" lg:rounded-lg h-full lg:h-80  w-full lg:w-4/5 my-2">
            <img
              className="mx-auto lg:rounded-lg w-full h-full"
              src="/images/stats.jpg"
              //   layout="responsive"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-3 gap-12 lg:max-w-6xl mx-auto mt-14">
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-600">
                {" "}
                <FaChartLine className="fill-slate-200 text-3xl  " />
              </div>
            </div>
            <h1 className=" text-3xl my-4">$54+ Billion</h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-600">
                {" "}
                <FaChartLine className="fill-slate-200 text-3xl  " />
              </div>
            </div>
            <h1 className=" text-3xl my-4">$500,000</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="text-center gap-4">
            <div className="flex justify-center items-center ">
              <div className="p-4 ring-1 rounded-full ring-slate-600">
                {" "}
                <FaChartLine className="fill-slate-200 text-3xl  " />
              </div>
            </div>
            <h1 className=" text-3xl my-4">4x lower</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
