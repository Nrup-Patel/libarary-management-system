// import React from "react";

// function Login() {
//   return (
//     <>
//       <section className="vh-100 container w-full overflow-hidden">
//         <div className="container-fluid h-custom">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-9 col-lg-6 col-xl-5">
//               <img
//                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                 className="img-fluid"
//                 alt="Sample"
//               />
//             </div>
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <form>
//               <h2 className="mb-4 h1">Login</h2>

//                 <div className="form-outline mb-4">
//                   <input
//                     type="email"
//                     id="form3Example3"
//                     className="form-control form-control-lg"
//                     placeholder="Enter a valid email address"
//                   />
//                   <label className="form-label" htmlFor="form3Example3">
//                     Email address
//                   </label>
//                 </div>
//                 <div className="form-outline mb-3">
//                   <input
//                     type="password"
//                     id="form3Example4"
//                     className="form-control form-control-lg"
//                     placeholder="Enter password"
//                   />
//                   <label className="form-label" htmlFor="form3Example4">
//                     Password
//                   </label>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="form-check mb-0">
//                     <input
//                       className="form-check-input me-2"
//                       type="checkbox"
//                       id="form2Example3"
//                     />
//                     <label className="form-check-label" htmlFor="form2Example3">
//                       Remember me
//                     </label>
//                   </div>
//                   <a href="#!" className="text-body">
//                     Forgot password?
//                   </a>
//                 </div>
//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button
//                     type="button"
//                     className="btn btn-primary btn-lg"
//                     style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
//                   >
//                     Login
//                   </button>
//                   <p className="small fw-bold mt-2 pt-1 mb-0">
//                     Don't have an account?{" "}
//                     <a href="#!" className="link-danger">
//                       Register
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//       </section>
//     </>
//   );
// }

// export default Login;

// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     // Basic validation
//     if (!email || !password) {
//       setError("Both fields are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://your-backend-api.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // Handle success (e.g., save token, redirect user)
//       console.log("Login successful:", data);
//       alert("Login successful!");
//       setLoading(false);
//     } catch (err) {
//       console.error("Error during login:", err.message);
//       setError(err.message || "Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="vh-100 container w-full overflow-hidden">
//       <div className="container-fluid h-custom">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-md-9 col-lg-6 col-xl-5">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//               className="img-fluid"
//               alt="Sample"
//             />
//           </div>
//           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//             <form onSubmit={handleLogin}>
//               <h2 className="mb-4 h1">Login</h2>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <div className="form-outline mb-4">
//                 <input
//                   type="email"
//                   id="form3Example3"
//                   className="form-control form-control-lg"
//                   placeholder="Enter a valid email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="form3Example3">
//                   Email address
//                 </label>
//               </div>
//               <div className="form-outline mb-3">
//                 <input
//                   type="password"
//                   id="form3Example4"
//                   className="form-control form-control-lg"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="form3Example4">
//                   Password
//                 </label>
//               </div>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="form-check mb-0">
//                   <input
//                     className="form-check-input me-2"
//                     type="checkbox"
//                     id="form2Example3"
//                   />
//                   <label className="form-check-label" htmlFor="form2Example3">
//                     Remember me
//                   </label>
//                 </div>
//                 <a href="#!" className="text-body">
//                   Forgot password?
//                 </a>
//               </div>
//               <div className="text-center text-lg-start mt-4 pt-2">
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-lg"
//                   style={{
//                     paddingLeft: "2.5rem",
//                     paddingRight: "2.5rem",
//                     backgroundColor: loading ? "#6c757d" : "#007bff", // Gray for loading, blue for normal
//                     color: "#fff", // White text color
//                     cursor: loading ? "not-allowed" : "pointer", // Not allowed when loading
//                   }}
//                   disabled={loading}
//                 >
//                   {loading ? "Logging in..." : "Login"}
//                 </button>
//                 <p className="small fw-bold mt-2 pt-1 mb-0">
//                   Don't have an account?{" "}
//                   <a href="#!" className="link-danger">
//                     Register
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

function Login() {
  const [email, setEmail] = useState("jane.smith@example.com");
  const [phone, setPhone] = useState("987-654-3210");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const response = await axios.post(`${API_BASE_URL}?action=login`, {
            email,
            phone,
        }, {
            headers: {
                "Content-Type": "application/json", // Correct content type
            }
        });
        console.log(response.data);

      if (response.data.success) {
        console.log(response.data.member);
        localStorage.setItem("user", JSON.stringify(response.data.member))
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100 container w-full overflow-hidden">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <h2 className="mb-4 h1">Login</h2>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <label className="form-label">Phone Number</label>
              </div>
              {error && <div className="text-danger mb-3">{error}</div>}
             <div className="text-center text-lg-start mt-4 pt-2">
                 <button
                   type="submit"
                   className="btn btn-primary btn-lg"
                   style={{
                     paddingLeft: "2.5rem",
                     paddingRight: "2.5rem",
                     backgroundColor: loading ? "#6c757d" : "#007bff", // Gray for loading, blue for normal
                     color: "#fff", // White text color
                     cursor: loading ? "not-allowed" : "pointer", // Not allowed when loading
                   }}
                   disabled={loading}
                 >
                   {loading ? "Logging in..." : "Login"}
                 </button>
                 {/* <p className="small fw-bold mt-2 pt-1 mb-0">
                   Don't have an account?{" "}
                   <a href="#!" className="link-danger">
                     Register
                   </a>
                 </p> */}
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
