import { useState } from "react";
import Sidebar from "../components/Sidebar";

function UpdateMembership() {

  const [membershipNo, setMembershipNo] = useState("");

  const [extend, setExtend] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!membershipNo) {
      alert("Membership Number Required");
      return;
    }

    alert("Membership Updated");
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Update Membership
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Membership Number"
              className="w-full border p-3 rounded mb-4"
              onChange={(e) => setMembershipNo(e.target.value)}
            />

            <div className="flex gap-5 mb-5">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={extend}
                  onChange={() => setExtend(true)}
                />
                Extend Membership
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!extend}
                  onChange={() => setExtend(false)}
                />
                Cancel Membership
              </label>

            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded">
              Update Membership
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default UpdateMembership;