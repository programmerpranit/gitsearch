import Link from "next/link";
import React from "react";

function Homepage(): JSX.Element {
  return (
    <div className=" flex min-h-[50vh] w-full  flex-col items-center justify-center lg:min-h-screen ">
      <div className="mx-10">
        <h1 className="text-title">Git-Search</h1>
        <h3>The only better alternative to github search.</h3>
        <Link href={"/repositories"}>
          <button className="mt-4  transition-all duration-150 hover:bg-secondary ">
            Explore Repositories
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
