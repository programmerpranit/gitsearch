import RepoCard from "@/components/RepoCard";
import Link from "next/link";
import React from "react";

function Repositories(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      <div className="hidden h-screen w-1/4 md:block  ">
        <div className="m-4">
          <h4 className="text-primary">Filter by</h4>
          <h4 className="text-primary underline">Languages</h4>
          <div className="my-2 flex w-full items-center gap-2 rounded-md  border p-1 px-3 transition-all duration-200 hover:bg-slate-300 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h5>Java</h5>
          </div>
          <div className="my-2 flex w-full items-center gap-2 rounded-md  border p-1 px-3 transition-all duration-200 hover:bg-slate-300 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h5>Javascript</h5>
          </div>
          <div className="my-2 flex w-full items-center gap-2 rounded-md  border p-1 px-3 transition-all duration-200 hover:bg-slate-300 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h5>Typescript</h5>
          </div>
          <div className="my-2 flex w-full items-center gap-2 rounded-md  border p-1 px-3 transition-all duration-200 hover:bg-slate-300 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h5>C</h5>
          </div>
          <div className="my-2 flex w-full items-center gap-2 rounded-md  border p-1 px-3 transition-all duration-200 hover:bg-slate-300 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h5>C++</h5>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center justify-start  border-2 ">
        <Link className="mx-8 mt-4 self-end" href={"/add-repo"}>
          {" "}
          <button className=" bg-black text-white transition-all duration-150 hover:bg-secondary ">
            Add Repo
          </button>
        </Link>
        <h4 className="mt-10 text-primary">Search for repositories</h4>

        <input
          className="focus:shadow-outline mt-2 w-1/2 appearance-none rounded border border-black px-3 py-2 leading-tight  text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="search"
        />

        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
      <div className="lg:h-screen lg:w-1/3  ">
        <div className="m-4 rounded-md border p-4">
          <h4 className="text-primary">
            Sponsor open source projects you depend on
          </h4>
          <h6 className="mt-4">
            Contributors are working behind the scenes to make open source
            better for everyone—give them the help and recognition they deserve.
          </h6>

          <h6 className="text-ternary mt-2">
            Explore sponsorable projects -{">"}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Repositories;
