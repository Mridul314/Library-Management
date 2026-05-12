import { useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function UserManagement() {

  const [userType, setUserType] =
    useState("new");

  const [formData, setFormData] =
    useState({
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

    const {
      name,
      email,
      password,
    } = formData;

    if (
      !name ||
      !email ||
      !password
    ) {

      alert("All fields are mandatory");

      return;
    }

    try {

      const response = await API.post(
        "/users/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);

      alert("User Added Successfully");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Adding User"
      );

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">

            User Management

          </h1>

          <form onSubmit={handleSubmit}>

            {/* User Type */}

            <div className="flex gap-5 mb-5">

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  value="new"
                  checked={
                    userType === "new"
                  }
                  onChange={(e) =>
                    setUserType(
                      e.target.value
                    )
                  }
                />

                New User

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  value="existing"
                  checked={
                    userType === "existing"
                  }
                  onChange={(e) =>
                    setUserType(
                      e.target.value
                    )
                  }
                />

                Existing User

              </label>

            </div>

            {/* Name */}

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            {/* Password */}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">

              Save User

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default UserManagement;