import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex h-[90vh] flex-col place-content-center place-items-center gap-8">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");
            setLoading(true);

            const response = await fetch("http://localhost:3000/signin", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
            });

            if (response.status !== 200) {
              setLoading(false);
            }

            if (response.status === 200) {
              const { token } = await response.json();
              localStorage.setItem("token", token);
              navigate("/");
            }
          }}
        >
          <h1 className="m-4 p-2">Signin</h1>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" placeholder="Enter a username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          {!loading ? (
            <button type="submit">Sign In</button>
          ) : (
            <button
              type="submit"
              disabled
              className="bg-slate-200 text-black border border-1 border-slate-400 opacity-80 hover:bg-slate-200"
            >
              Loading...
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Signin;
