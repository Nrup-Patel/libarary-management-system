import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md ">
        <div className="container mx-auto px-4">
          <h1 className=" font-bold text-lg">Library Management System</h1>
          <p className="text-sm">Manage your books and members efficiently</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gray-200 rounded-lg shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to LMS</h2>
          <p className="text-lg mb-6">
            Your one-stop solution for managing library operations.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Books Management</h3>
            <p className="text-gray-600">
              Add, update, and manage your collection of books effortlessly.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Members Management</h3>
            <p className="text-gray-600">
              Keep track of library members and their borrowing history.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Loan Tracking</h3>
            <p className="text-gray-600">
              Track issued books, return dates, and overdue fines seamlessly.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
