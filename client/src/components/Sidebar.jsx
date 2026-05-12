import { Link } from "react-router-dom";

function Sidebar() {

  const role = localStorage.getItem("role");

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      <h1 className="text-3xl font-bold mb-10 p-3 text-blue-400">
        Library
      </h1>

      <div className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        {/* Maintenance Module - Admin Only */}

        {
          role === "admin" && (
            <>
              <Link
                to="/add-book"
                className="hover:bg-gray-700 p-3 rounded-lg transition"
              >
                Add Book
              </Link>

              <Link
                to="/add-membership"
                className="hover:bg-gray-700 p-3 rounded-lg transition"
              >
                Add Membership
              </Link>

              <Link
                to="/update-membership"
                className="hover:bg-gray-700 p-3 rounded-lg transition"
              >
                Update Membership
              </Link>

              <Link
                to="/user-management"
                className="hover:bg-gray-700 p-3 rounded-lg transition"
              >
                User Management
              </Link>
            </>
          )
        }

        {/* Transactions */}

        <Link
          to="/issue-book"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Issue Book
        </Link>

        <Link
          to="/return-book"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Return Book
        </Link>

        <Link
          to="/fine-pay"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Fine Pay
        </Link>

        {/* Reports */}

        <Link
          to="/reports"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Reports
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;