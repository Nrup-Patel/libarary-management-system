


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

const Loan = () => {
  const [loanDetails, setLoanDetails] = useState([]);
  const [borrowData, setBorrowData] = useState({ member_id: '', book_id: '' });
  const [returnData, setReturnData] = useState({ loan_id: '' });

  useEffect(() => {
    fetchLoanDetails();
  }, []);

  const fetchLoanDetails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=listDetailedLoans`);
      setLoanDetails(response.data.data || []);
    } catch (error) {
      console.error("Error fetching loan details:", error);
    }
  };

  const handleBorrowBook = async () => {
    try {
      await axios.post(`${API_BASE_URL}?action=borrowBook`, borrowData, {
        headers: { "Content-Type": "application/json" },
      });
      setBorrowData({ member_id: '', book_id: '' });
      fetchLoans();
      fetchLoanDetails();
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  const handleReturnBook = async () => {
    try {
      await axios.post(`${API_BASE_URL}?action=returnBook`, returnData, {
        headers: { "Content-Type": "application/json" },
      });
      setReturnData({ loan_id: '' });
      fetchLoanDetails();
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div>
      <h1>Loan Management</h1>

      <h2>Borrow Book</h2>
      <input
        type="text"
        placeholder="Member ID"
        value={borrowData.member_id}
        onChange={(e) => setBorrowData({ ...borrowData, member_id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Book ID"
        value={borrowData.book_id}
        onChange={(e) => setBorrowData({ ...borrowData, book_id: e.target.value })}
      />
      <button onClick={handleBorrowBook}>Borrow Book</button>

      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="Loan ID"
        value={returnData.loan_id}
        onChange={(e) => setReturnData({ ...returnData, loan_id: e.target.value })}
      />
      <button onClick={handleReturnBook}>Return Book</button>

      <h2>Loan Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Member Name</th>
            <th>Book Title</th>
            <th>Loan Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>
          {loanDetails.map((detail) => (
            <tr key={detail.loan_id}>
              <td>{detail.loan_id}</td>
              <td>{detail.member_name}</td>
              <td>{detail.book_title}</td>
              <td>{detail.loan_date}</td>
              <td>{detail.due_date}</td>
              <td>{detail.return_date || "Not Returned"}</td>
              <td>${parseFloat(detail.fine).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loan;
