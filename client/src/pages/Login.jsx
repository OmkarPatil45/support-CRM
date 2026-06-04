import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === "admin" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Support CRM
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Sign In
          </button>
        </form>

      </div>

    </div>
  );
};

export default Login;