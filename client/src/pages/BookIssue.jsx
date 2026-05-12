import { useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function BookIssue() {

  const today = new Date().toISOString().split("T")[0];

  const futureDate = new Date();

  futureDate.setDate(
    futureDate.getDate() + 15
  );

  const maxDate = futureDate.toISOString().split("T")[0];

  const [bookName, setBookName] = useState("");

  const [author, setAuthor] = useState("");

  const [issueDate, setIssueDate] = useState(today);

  const [returnDate, setReturnDate] =useState(maxDate);

  const [remarks, setRemarks] =  useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!bookName || !author) {

      alert("Please fill required fields");

      return;
    }

    if (issueDate < today) {

      alert(
        "Issue date cannot be before today"
      );

      return;
    }

    if (returnDate > maxDate) {

      alert(
        "Return date cannot exceed 15 days"
      );

      return;
    }

    try {

      const response = await API.post(
        "/issue",
        {
          bookName,
          author,
          issueDate,
          returnDate,
          remarks,
        }
      );

      console.log(response.data);

      alert("Book Issued Successfully");

      setBookName("");
      setAuthor("");
      setRemarks("");

    } catch (error) {

      console.log(error);

      alert("Error Issuing Book");

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-xl bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Issue Book
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Book Name"
              value={bookName}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setBookName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Author Name"
              value={author}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setAuthor(e.target.value)
              }
            />

            <input
              type="date"
              value={issueDate}
              min={today}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setIssueDate(e.target.value)
              }
            />

            <input
              type="date"
              value={returnDate}
              max={maxDate}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
            />

            <textarea
              placeholder="Remarks"
              value={remarks}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) =>
                setRemarks(e.target.value)
              }
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded">

              Issue Book

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default BookIssue;