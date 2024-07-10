import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [state, setState] = useState(true);

  const navigate = useNavigate();

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
            <>
              <Link to={"/cart"}>
                <button className="m-0 p-2 px-4 bg-neutral-50 shadow-sm border-2 text-2xl hover:bg-neutral-100">
                  🛒
                </button>
              </Link>
              <button
                className="bg-rose-500 text-md hover:bg-rose-700"
                onClick={() => {
                  localStorage.clear();
                  setState(false);
                  navigate("/");
                }}
              >
                log out
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
