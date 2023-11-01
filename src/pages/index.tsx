import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="mx-auto max-w-6xl p-5">
        <h2 className="my-10 text-center">
          An AI Based Advance <span className="text-primary">GitSearch</span>
        </h2>

        <form className="w-full text-center">
          <input
            type="text"
            className="inp mx-auto w-full placeholder:text-center md:w-1/2"
            placeholder="Search a Repo with Prompt"
          />
          <button className="mx-2 bg-primary">Search</button>
        </form>

        <div className="my-10 ">
          <h3 className="mb-5">Advance Filters</h3>

          <div className="flex">
            <div className="w-1/3  pr-2">
              <p className="font-semibold">Language</p>
              <select className="inp w-full">
                <option value="">Javascript</option>
                <option value="">Go</option>
                <option value="">Python</option>
                <option value="">Java</option>
                <option value="">Kotlin</option>
              </select>
            </div>
            <div className="w-1/3  pr-2">
              <p className="font-semibold">Framework</p>
              <select className="inp w-full">
                <option value="">React</option>
                <option value="">Next JS pages</option>
                <option value="">Next JS app</option>
                <option value="">Node Js</option>
                <option value="">Express</option>
                <option value="">Vue</option>
              </select>
            </div>
            <div className="w-1/3  pr-2">
              <p className="font-semibold">Package/Module</p>
              <select className="inp w-full">
                <option value="">react-toastify</option>
                <option value="">axios</option>
                <option value="">mongoose</option>
              </select>
            </div>
          </div>
          <div className="my-5 text-center">
            <button className="mx-auto mt-5 w-1/2 bg-primary ">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
