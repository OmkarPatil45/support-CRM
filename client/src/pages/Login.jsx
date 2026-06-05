import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-blue-600">
            Support CRM
          </h1>

          <p className="text-slate-500 mt-2">
            Admin Login
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  username: e.target.value,
                })
              }
              className="w-full border border-slate-300 rounded-xl p-3"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              className="w-full border border-slate-300 rounded-xl p-3"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </form>

        <div className="mt-8 bg-slate-100 rounded-xl p-4">

          <p className="text-sm text-slate-600">
            Demo Credentials
          </p>

          <p className="font-medium">
            Username: admin
          </p>

          <p className="font-medium">
            Password: admin123
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;