import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import AddBook from "./pages/AddBook";
import BookIssue from "./pages/BookIssue";
import ReturnBook from "./pages/ReturnBook";
import FinePay from "./pages/FinePay";
import Reports from "./pages/Reports";

import AddMembership from "./pages/AddMembership";
import UpdateMembership from "./pages/UpdateMembership";

import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Book Management */}
        <Route path="/add-book" element={<AddBook />} />

        {/* Transactions */}
        <Route path="/issue-book" element={<BookIssue />} />

        <Route path="/return-book" element={<ReturnBook />} />

        <Route path="/fine-pay" element={<FinePay />} />

        {/* Membership */}
        <Route
          path="/add-membership"
          element={<AddMembership />}
        />

        <Route
          path="/update-membership"
          element={<UpdateMembership />}
        />

        {/* User Management */}
        <Route
          path="/user-management"
          element={<UserManagement />}
        />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;