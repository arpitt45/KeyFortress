import React from "react";

const Manager = () => {
  return (
    <div>
      <div className="relative h-full w-full bg-slate-50">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="mycontainer bg-slate-50">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-yellow-400">&lt;</span>
            Key<span className="text-yellow-400">Fortress/ &gt;</span>
          </h1>
          <p className="text-slate-950 text-lg text-center">
            Your own Password Manager
          </p>
        </div>
      </div>
      <div className=" mycontainer w-1/2 -mt-4 flex flex-col p-4 text-black gap-6 items-center">
        <input
          className="rounded-full border border-yellow-400  p-80 py-1"
          type="text"
        />
        <div className="flex w-full justify-between gap-6">
          <input
            className="rounded-full border border-yellow-400 p-24 py-1"
            type="text"
            name=""
            id=""
          />
          <input
            className="rounded-full border border-yellow-400 p-24 py-1"
            type="text"
            name=""
            id=""
          />
        </div>
        <button className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-200 rounded-full px-4 py-2 w-fit gap-2 border-2 border-slate-950">
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover"
          style={{color:"white"}}
        ></lord-icon>
         Add Password</button>
      </div>
    </div>
  );
};

export default Manager;
