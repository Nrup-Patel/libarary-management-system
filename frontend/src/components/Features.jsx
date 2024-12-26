import React from "react";

function Features() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">LMS Features</h2>
      <div className="row mb-4">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body flex items-center justify-center flex-col gap-2">
              <h5 className="card-title">Book Management</h5>
              <img
                src="https://t3.ftcdn.net/jpg/10/64/43/10/240_F_1064431096_bDaNElatMgsWv5rqzbAyyOM424e1wCqZ.jpg"
                alt=""
              />
              <p className="card-text">
                Efficiently manage book inventory, categorize resources, and
                track availability seamlessly.
              </p>
              <a href="#" className="btn btn-primary">
                Manage Books
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body flex items-center justify-center flex-col gap-2">
              <h5 className="card-title">Member Management</h5>
              <img src="https://t3.ftcdn.net/jpg/03/64/90/68/240_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg" alt="" />
              <p className="card-text">
                Add, update, and manage member details with ease for a
                streamlined user experience.
              </p>
              <a href="#" className="btn btn-primary">
                Manage Members
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body flex items-center justify-center flex-col gap-2">
              <h5 className="card-title">Loan Management</h5>
              <img src="https://t3.ftcdn.net/jpg/09/78/90/54/240_F_978905463_1u3xsln52scwJyLvhv9ZlRmvEjxURUAH.jpg" alt="" />
              <p className="card-text">
                Track issued books, manage loan durations, and ensure smooth
                borrowing processes.
              </p>
              <a href="#" className="btn btn-primary">
                Manage Loans
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body flex items-center justify-center flex-col gap-2">
              <h5 className="card-title">Due Calculation</h5>
              <img src="https://t3.ftcdn.net/jpg/10/63/59/96/240_F_1063599692_pu9EuVfJUT0jgi52LVOVYAUvr8NrPfdH.jpg" alt="" />
              <p className="card-text">
                Automatically calculate overdue charges and notify members for
                timely returns.
              </p>
              <a href="#" className="btn btn-primary">
                Calculate Dues
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
