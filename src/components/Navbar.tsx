import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
  const [pathname, setPathname] = useState("/");

  const path = useRouter().asPath;

  useEffect(() => {
    setPathname(path);
  }, [path]);

  if (path.startsWith("/admin")) return <></>;

  return (
    <>
      <nav className="m-auto flex max-w-6xl justify-between p-10 max-md:flex-col ">
        <div className="max-md:my-5 max-md:text-center">
          <Link href="/homepage">
            <h2 className="text-[28px] font-medium text-black">Git Search</h2>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Link href="/">
            <p
              className={`text-lg  font-medium ${
                pathname === "/" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Search
            </p>
          </Link>
          <Link href="/repositories">
            <p
              className={`text-lg  font-medium ${
                pathname === "/add-repo" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Repositories
            </p>
          </Link>
          <Link href="/add-repo">
            <p
              className={`text-lg  font-medium ${
                pathname === "/add-repo" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Add Repo
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
