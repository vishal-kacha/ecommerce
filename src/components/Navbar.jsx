import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center p-4 max-w-screen-xl m-auto">
        <Link to={"/"} className="text-md text-sky-900">
          Home
        </Link>

        <div className="flex gap-2 items-center">
          {localStorage.getItem("token") === null ? (
            <>
              <Link to={"/signin"} className="text-md text-sky-900">
                signin
              </Link>

              <Link to={"/signup"} className="text-md text-sky-900">
                signup
              </Link>
            </>
          ) : (
            <button
              className="bg-rose-500 text-md hover:bg-rose-700"
              onClick={() => {
                localStorage.clear();
                setState(false);
              }}
            >
              log out
            </button>
          )}
        </div>
      </div>
    </>
  );
};
