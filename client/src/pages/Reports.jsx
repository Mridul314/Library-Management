import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function Reports() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetchBooks();

  }, []);

  const fetchBooks = async () => {

    try {

      const response = await API.get(
        "/books"
      );

      setBooks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <button
            onClick={fetchBooks}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >

            Refresh

          </button>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-200">

              <tr>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Author
                </th>

                <th className="p-4 text-left">
                  Type
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {
                books.length > 0 ? (
                  books.map((book) => (

                    <tr
                      key={book._id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="p-4">
                        {book.title}
                      </td>

                      <td className="p-4">
                        {book.author}
                      </td>

                      <td className="p-4 capitalize">
                        {book.type}
                      </td>

                      <td className="p-4">

                        {
                          book.available ? (
                            <span className="text-green-600 font-semibold">

                              Available

                            </span>
                          ) : (
                            <span className="text-red-600 font-semibold">

                              Issued

                            </span>
                          )
                        }

                      </td>

                    </tr>

                  ))
                ) : (
                  <tr>

                    <td
                      colSpan="4"
                      className="p-6 text-center text-gray-500"
                    >

                      No Books Found

                    </td>

                  </tr>
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;