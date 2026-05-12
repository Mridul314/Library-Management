import { useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function AddMembership() {

  const [duration, setDuration] =
    useState("6months");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {

      alert("All fields are mandatory");

      return;
    }

    try {

      const response = await API.post("/membership",{...formData, duration, } );

      console.log(response.data);

      alert("Membership Added Successfully" );

      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      setDuration("6months");

    } catch (error) {

      console.log(error);

      alert("Error Adding Membership");

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Add Membership
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              className="w-full border p-3 rounded mb-4"
              onChange={handleChange}
            />

            {/* Duration */}

            <div className="mb-5">

              <p className="font-semibold mb-2">
                Membership Duration
              </p>

              <div className="flex gap-5">

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    value="6months"
                    checked={
                      duration === "6months"
                    }
                    onChange={(e) =>
                      setDuration(e.target.value)
                    }
                  />

                  6 Months

                </label>

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    value="1year"
                    checked={
                      duration === "1year"
                    }
                    onChange={(e) =>
                      setDuration(e.target.value)
                    }
                  />

                  1 Year

                </label>

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    value="2years"
                    checked={
                      duration === "2years"
                    }
                    onChange={(e) =>
                      setDuration(e.target.value)
                    }
                  />

                  2 Years

                </label>

              </div>

            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">

              Add Membership

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddMembership;