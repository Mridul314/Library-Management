import { useState } from "react";
import Sidebar from "../components/Sidebar";

function FinePay() {

  const [fine] = useState(100);

  const [finePaid, setFinePaid] = useState(false);

  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fine > 0 && !finePaid) {
      alert("Please confirm fine payment");
      return;
    }

    alert("Book Returned Successfully");
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Fine Payment
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              value="Harry Potter"
              disabled
              className="w-full border p-3 rounded mb-4 bg-gray-100"
            />

            <input
              type="text"
              value="J.K Rowling"
              disabled
              className="w-full border p-3 rounded mb-4 bg-gray-100"
            />

            <input
              type="number"
              value={fine}
              disabled
              className="w-full border p-3 rounded mb-4 bg-gray-100"
            />

            <label className="flex items-center gap-3 mb-4">

              <input
                type="checkbox"
                checked={finePaid}
                onChange={(e) => setFinePaid(e.target.checked)}
              />

              Fine Paid

            </label>

            <textarea
              placeholder="Remarks"
              className="w-full border p-3 rounded mb-4"
              onChange={(e) => setRemarks(e.target.value)}
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded">
              Complete Transaction
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default FinePay;