import { useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

function AddBook() {

  const [type, setType] = useState("book");

  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title || !author) {

      alert("All fields mandatory");

      return;
    }

    try {

      const response = await API.post("/books", {
        title,
        author,
        type,
      });

      console.log(response.data);

      alert("Book Added Successfully");

      setTitle("");
      setAuthor("");
      setType("book");

    } catch (error) {

      console.log(error);

      alert("Error Adding Book");

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Add Book
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="flex gap-5 mb-4">

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  value="book"
                  checked={type === "book"}
                  onChange={(e) => setType(e.target.value)}
                />

                Book

              </label>

              <label className="flex items-center gap-2">

                <input
                  type="radio"
                  value="movie"
                  checked={type === "movie"}
                  onChange={(e) => setType(e.target.value)}
                />

                Movie

              </label>

            </div>

            <input
              type="text"
              placeholder="Book Title"
              value={title}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Author Name"
              value={author}
              className="w-full border p-3 rounded mb-4"
              onChange={(e) => setAuthor(e.target.value)}
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">

              Add Book

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddBook;