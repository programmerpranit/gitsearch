import Image from "next/image";
import React from "react";

function RepoCard(): JSX.Element {
  return (
    <div className="mx-8 my-4 flex items-center justify-between rounded-md border border-black p-8 ">
      <div className=" w-9/12 ">
        <h3 className="text-primary">This is a demo Title</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non
          asperiores possimus odit, voluptatum ullam sint perferendis id
          molestias facere dolorum officia deserunt nisi maiores assumenda,
          laudantium natus magni deleniti!
        </h5>
        <div className="mt-4 flex gap-2 ">
          <div className="bg-ternary flex w-1/4 items-center gap-2 rounded-full border p-2 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h6 className="text-black">zustand</h6>
          </div>
          <div className="flex w-1/4 items-center gap-2 rounded-full border bg-primary p-2 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h6 className="text-white">Tailwind</h6>
          </div>
          <div className="flex w-1/4 items-center gap-2 rounded-full border bg-secondary p-2 ">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <h6 className="text-white">typescript</h6>
          </div>
        </div>
      </div>
      <div>
        <Image src={"/vercel.svg"} width={200} height={200} alt="RepoImage" />
      </div>
    </div>
  );
}

export default RepoCard;
