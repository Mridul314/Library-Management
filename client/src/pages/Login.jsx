import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password) {

      alert("All fields are required");

      return;
    }

    try {

      /* REGISTER */

      if (isRegister) {

        await API.post("/users/register", {
          name,
          email,
          password,
          role: "user",
        });

        alert("Registration Successful");

        setIsRegister(false);

        return;
      }

      /* LOGIN */

      const response = await API.post(
        "/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "name",
        response.data.name
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">

          {
            isRegister
              ? "Register"
              : "Library Login"
          }

        </h2>

        {
          isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />
          )
        }

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">

          {
            isRegister
              ? "Register"
              : "Login"
          }

        </button>

        <p className="text-center mt-4">

          {
            isRegister
              ? "Already have an account?"
              : "New User?"
          }

          <button
            type="button"
            className="text-blue-600 ml-2"
            onClick={() =>
              setIsRegister(!isRegister)
            }
          >

            {
              isRegister
                ? "Login"
                : "Register"
            }

          </button>

        </p>

      </form>

    </div>
  );
}

export default Login;