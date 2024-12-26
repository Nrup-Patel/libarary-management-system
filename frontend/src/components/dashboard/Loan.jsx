// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

// const Loan = () => {
//   const [loanDetails, setLoanDetails] = useState([]);
//   const [borrowData, setBorrowData] = useState({ member_id: '', book_id: '' });
//   const [returnData, setReturnData] = useState({ loan_id: '' });

//   useEffect(() => {
//     fetchLoanDetails();
//   }, []);

//   const fetchLoanDetails = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}?action=listDetailedLoans`);
//       setLoanDetails(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching loan details:", error);
//     }
//   };

//   const handleBorrowBook = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}?action=borrowBook`, borrowData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setBorrowData({ member_id: '', book_id: '' });
//       fetchLoanDetails();
//     } catch (error) {
//       console.error("Error borrowing book:", error);
//     }
//   };

//   const handleReturnBook = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}?action=returnBook`, returnData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setReturnData({ loan_id: '' });
//       fetchLoanDetails();
//     } catch (error) {
//       console.error("Error returning book:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Loan Management</h1>

//       <h2>Borrow Book</h2>
//       <input
//         type="text"
//         placeholder="Member ID"
//         value={borrowData.member_id}
//         onChange={(e) => setBorrowData({ ...borrowData, member_id: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Book ID"
//         value={borrowData.book_id}
//         onChange={(e) => setBorrowData({ ...borrowData, book_id: e.target.value })}
//       />
//       <button onClick={handleBorrowBook}>Borrow Book</button>

//       <h2>Return Book</h2>
//       <input
//         type="text"
//         placeholder="Loan ID"
//         value={returnData.loan_id}
//         onChange={(e) => setReturnData({ ...returnData, loan_id: e.target.value })}
//       />
//       <button onClick={handleReturnBook}>Return Book</button>

//       <h2>Loan Details</h2>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Loan ID</th>
//             <th>Member Name</th>
//             <th>Book Title</th>
//             <th>Loan Date</th>
//             <th>Due Date</th>
//             <th>Return Date</th>
//             <th>Fine</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loanDetails.map((detail) => (
//             <tr key={detail.loan_id}>
//               <td>{detail.loan_id}</td>
//               <td>{detail.member_name}</td>
//               <td>{detail.book_title}</td>
//               <td>{detail.loan_date}</td>
//               <td>{detail.due_date}</td>
//               <td>{detail.return_date || "Not Returned"}</td>
//               <td>${parseFloat(detail.fine).toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Loan;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_BASE_URL =
  "http://localhost/Library-management-system/backend/index.php";

const Loan = () => {
  const [loanDetails, setLoanDetails] = useState([]);
  const [borrowData, setBorrowData] = useState({ member_id: "", book_id: "" });
  const [returnData, setReturnData] = useState({ loan_id: "" });

  useEffect(() => {
    fetchLoanDetails();
  }, []);

  const fetchLoanDetails = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}?action=listDetailedLoans`
      );
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
      setBorrowData({ member_id: "", book_id: "" });
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
      setReturnData({ loan_id: "" });
      fetchLoanDetails();
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }} className="container d-flex flex-col justify-content-center w-100">
      <div className="  gap-3 d-flex flex-col justify-content-center w-full">
      <h2 style={{ fontSize: '2em' }} className="mb-2">Loan Details</h2>
      <div className=" w-25 flex flex-col gap-2 w-50 p-4  text-black border-2 rounded" style={{ backgroundColor: '#dadee6' }}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Member ID</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Member ID"
                value={borrowData.member_id}
                onChange={(e) =>
                  setBorrowData({ ...borrowData, member_id: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Book ID</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Book ID"
                value={borrowData.book_id}
                onChange={(e) =>
                  setBorrowData({ ...borrowData, book_id: e.target.value })
                }
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={handleBorrowBook}>
            Borrow Book
          </button>

          <h2>Return Book</h2>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Loan ID</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Loan ID"
                value={returnData.loan_id}
                onChange={(e) =>
                  setReturnData({ ...returnData, loan_id: e.target.value })
                }
              />
            </div>
          </div>

          <button className="btn btn-danger" onClick={handleReturnBook}>
            Return Book
          </button>
        </div>
      </div>
      <h2 style={{fontSize:"1.5em"}}>Loan Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Loan ID</th>
            <th scope="col">Member Name</th>
            <th scope="col">Book Title</th>
            <th scope="col">Loan Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Fine</th>
          </tr>
        </thead>
        <tbody>
          {loanDetails.length > 0 ? (
            loanDetails.map((detail) => (
              <tr key={detail.loan_id}>
                <td>{detail.loan_id}</td>
                <td>{detail.member_name}</td>
                <td>{detail.book_title}</td>
                <td>{detail.loan_date}</td>
                <td>{detail.due_date}</td>
                <td>{detail.return_date || "Not Returned"}</td>
                <td>${parseFloat(detail.fine).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No loan details available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Loan;
