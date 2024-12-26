import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Features from "./components/Features";
import Dashboard from "./components/dashboard/Dashboard";
import Book from "./components/dashboard/Book";
import Member from "./components/dashboard/Member";
import Loan from "./components/dashboard/Loan"
import BookSearch from "./components/dashboard/BookSearch"
function App() {
  return (
    <div className=" min-h-screen flex flex-col  overflow-x-hidden bg-light bg-gradient w-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookDetails" element={<Book />} />
          <Route path="/memberDetails" element={<Member />} />
          <Route path="/loanDetails" element={<Loan />} />
          <Route path="/booksearch" element={<BookSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
