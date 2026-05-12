import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function ReturnBook() {

  const navigate = useNavigate();

  const [bookName, setBookName] = useState("");

  const [serialNo, setSerialNo] =useState("");

  const [author, setAuthor] =useState("");

  const [issueDate, setIssueDate] = useState("");

  const [returnDate, setReturnDate] =useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!bookName || !serialNo) {

      alert(
        "Please fill all mandatory fields"
      );

      return;
    }

    try {

      const response = await API.post("/return",
        {
          bookName,
        }
      );

      console.log(response.data);

      alert("Book Returned Successfully");

      navigate("/fine-pay");

    } catch (error) {

      console.log(error);

      alert("Error Returning Book");

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">

            Return Book

          </h1>

          <form onSubmit={handleSubmit}>

            {/* Book Name */}

            <input
              type="text"
              placeholder="Book Name"
              value={bookName}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setBookName(e.target.value)
              }
            />

            {/* Author */}

            <input
              type="text"
              placeholder="Author Name"
              value={author}
              disabled
              className="w-full border p-3 rounded mb-4 bg-gray-100"
            />

            {/* Serial Number */}

            <input
              type="text"
              placeholder="Serial Number"
              value={serialNo}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setSerialNo(e.target.value)
              }
            />

            {/* Issue Date */}

            <input
              type="date"
              value={issueDate}
              disabled
              className="w-full border p-3 rounded mb-4 bg-gray-100"
            />

            {/* Return Date */}

            <input
              type="date"
              value={returnDate}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">

              Confirm Return

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ReturnBook;