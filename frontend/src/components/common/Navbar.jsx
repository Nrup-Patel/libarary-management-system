// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     // Check if user exists in local storage
//     const user = localStorage.getItem("user");
//     setIsLoggedIn(!!user); // If user exists, set to true
//   }, [localStorage.getItem("user")]); // Runs once on component mount

//   useEffect(() => {
//     // This effect is triggered when localStorage changes
//     const handleStorageChange = () => {
//       const user = localStorage.getItem("user");
//       setIsLoggedIn(!!user);
//     };

//     // Add event listener to listen for localStorage changes
//     window.addEventListener("storage", handleStorageChange);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []); // Empty dependency array ensures the listener is set up only once

//   const handleLogout = () => {
//     // Remove user from local storage
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     // Optionally, redirect to login or home page
//     navigate("/login"); // Use navigate instead of history.push
//   };

//   return (
//     <div className="w-screen overflow-x-hidden" style={{width:screen, box}}>
//     <nav
//       className="navbar navbar-expand-lg navbar-dark  mb-5"
//       style={{ backgroundColor: "#127eff" }}
//     >
//       <a className="navbar-brand" href="#">
//         Library Management System
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavAltMarkup"
//         aria-controls="navbarNavAltMarkup"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           {isLoggedIn ? (
//             <>
//               <Link className="nav-item nav-link active" to="/bookDetails">
//                 Book
//               </Link>
//               <Link className="nav-item nav-link active" to="/booksearch">
//                 Search Book
//               </Link>
//               <Link className="nav-item nav-link active" to="/memberDetails">
//                 Member Details
//               </Link>
//               <Link className="nav-item nav-link active" to="/loanDetails">
//                 Loan Details
//               </Link>
//               <Link className="nav-item nav-link active" to="/dashboard">
//                 Dashboard
//               </Link>
//               <button
//                 className="nav-item nav-link btn btn-link active"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="nav-item nav-link active" to="/features">
//                 Features
//               </Link>
//               <Link className="nav-item nav-link active" to="/login">
//                 Login
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//     </div>

//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [localStorage.getItem("user")]);

  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <nav
        className=" fixed-top navbar navbar-expand-lg navbar-dark mb-5 px-4"
        style={{
          backgroundColor: "#127eff",
          width: "100%",
          boxSizing: "border-box",
          position: "sticky",
          top: "0",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <a className="navbar-brand" href="/features">
          Library Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {isLoggedIn ? (
              <>
                <Link className="nav-item nav-link active" to="/bookDetails">
                  Book
                </Link>
                <Link className="nav-item nav-link active" to="/booksearch">
                  Search Book
                </Link>
                <Link className="nav-item nav-link active" to="/memberDetails">
                  Member
                </Link>
                <Link className="nav-item nav-link active" to="/loanDetails">
                  Loan
                </Link>
                <Link className="nav-item nav-link active" to="/dashboard">
                  Dashboard
                </Link>
                <button
                  className="nav-item nav-link btn btn-link active"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-item nav-link active" to="/features">
                  Features
                </Link>
                <Link className="nav-item nav-link active" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
