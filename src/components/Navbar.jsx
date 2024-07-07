import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 max-w-screen-xl m-auto">
        <Link to={"/"} className="text-md text-sky-900">
          Home
        </Link>

        <button className="bg-rose-500 text-md hover:bg-rose-700">
          log out
        </button>
      </div>
    </>
  );
};
