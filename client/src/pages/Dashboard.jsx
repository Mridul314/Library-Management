import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function Dashboard() {

  const role = localStorage.getItem("role");

  const name = localStorage.getItem("name");

  const [stats, setStats] = useState({
    totalBooks: 0,
    issuedBooks: 0,
    totalUsers: 0,
  });

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const response = await API.get(
        "/dashboard"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-1">

              Welcome, {name}

            </p>

          </div>

          <div className="bg-white px-4 py-2 rounded-lg shadow">

            <span className="font-semibold">
              Role:
            </span>

            <span className="ml-2 text-blue-600 capitalize">

              {role}

            </span>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Total Books */}

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <h2 className="text-xl font-semibold">
              Total Books
            </h2>

            <p className="text-4xl mt-4 text-blue-600">

              {stats.totalBooks}

            </p>

          </div>

          {/* Issued Books */}

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <h2 className="text-xl font-semibold">
              Issued Books
            </h2>

            <p className="text-4xl mt-4 text-green-600">

              {stats.issuedBooks}

            </p>

          </div>

          {/* Users */}

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <h2 className="text-xl font-semibold">
              Users
            </h2>

            <p className="text-4xl mt-4 text-purple-600">

              {stats.totalUsers}

            </p>

          </div>

        </div>

        {/* Access Control */}

        <div className="mt-10 bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-5">
            Access Control
          </h2>

          {
            role === "admin" ? (
              <div>

                <p className="text-green-600 font-semibold mb-3">

                  Admin Access Granted

                </p>

                <ul className="list-disc ml-6 space-y-2">

                  <li>Maintenance Module</li>

                  <li>Transactions Module</li>

                  <li>Reports Module</li>

                </ul>

              </div>
            ) : (
              <div>

                <p className="text-blue-600 font-semibold mb-3">

                  User Access Granted

                </p>

                <ul className="list-disc ml-6 space-y-2">

                  <li>Transactions Module</li>

                  <li>Reports Module</li>

                </ul>

                <p className="text-red-500 mt-4">

                  Maintenance Module Restricted

                </p>

              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;