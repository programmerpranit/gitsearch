import React from "react";

function Footer(): JSX.Element {
  return (
    <footer className=" font-Inter mt-8 flex w-full flex-col items-center justify-around bg-white pb-2 pt-10 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]">
      <div className="flex w-full flex-col items-center  justify-between md:flex-row  ">
        <div className="mx-10 flex w-full flex-col items-start  justify-between space-y-6 px-10 md:items-center md:space-y-0 md:px-10 lg:flex-row lg:px-2">
          <div className="w-full  sm:w-2/3 lg:w-3/12">
            <div className="mb-4 w-full">
              <h3>gitsearch</h3>
              <p className="text-body-color mb-4 text-base">
                The only better alternative to github search
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 h-px w-11/12 self-center border-0 bg-black" />
      <h6 className="mx-6">Copyright © 2023. All rights reserved.</h6>
      <h6 className="mx-6">gitsearch </h6>
    </footer>
  );
}

export default Footer;
