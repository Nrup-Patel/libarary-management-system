// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php"; // Your API base URL

// const BookSearch = () => {
//   const [books, setBooks] = useState([]); // To store all books
//   const [filteredBooks, setFilteredBooks] = useState([]); // To store filtered books based on search
//   const [searchFilters, setSearchFilters] = useState({
//     book_title: '',
//     author: '',
//     genre: ''
//   });

//   // Fetch all books when the component mounts
//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Function to fetch all books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}?action=listBooks`);
//       setBooks(response.data);
//       setFilteredBooks(response.data); // Initially display all books
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Function to handle changes in the search inputs
//   const handleSearchChange = (e) => {
//     setSearchFilters({
//       ...searchFilters,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Function to filter books based on the search filters
//   const filterBooks = () => {
//     const { book_title, author, genre } = searchFilters;

//     // Filter books based on the criteria
//     const filtered = books.filter((book) => {
//       const bookTitleMatch = book.title.toLowerCase().includes(book_title.toLowerCase());
//       const authorMatch = book.author.toLowerCase().includes(author.toLowerCase());
//       const genreMatch = book.genre.toLowerCase().includes(genre.toLowerCase());
//       return bookTitleMatch && authorMatch && genreMatch;
//     });

//     setFilteredBooks(filtered); // Update filtered books
//   };

//   // Watch the search filters and apply filtering whenever they change
//   useEffect(() => {
//     filterBooks();
//   }, [searchFilters]);

//   return (
//     <div>
//       <h1>Book Search</h1>

//       <h2>Search Filters</h2>
//       <div>
//         <input
//           type="text"
//           name="book_title"
//           placeholder="Search by Book Title"
//           value={searchFilters.book_title}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="Search by Author"
//           value={searchFilters.author}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="genre"
//           placeholder="Search by Genre"
//           value={searchFilters.genre}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <h2>Book Results</h2>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Book Title</th>
//             <th>Author</th>
//             <th>Genre</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBooks.length > 0 ? (
//             filteredBooks.map((book) => (
//               <tr key={book.id}>
//                 <td>{book.title}</td>
//                 <td>{book.author}</td>
//                 <td>{book.genre}</td>
//                 <td>
//                   <button>Borrow</button> {/* You can add action buttons like borrow here */}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No books found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookSearch;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_BASE_URL =
  "http://localhost/Library-management-system/backend/index.php"; // Your API base URL

const BookSearch = () => {
  const [books, setBooks] = useState([]); // To store all books
  const [filteredBooks, setFilteredBooks] = useState([]); // To store filtered books based on search
  const [searchFilters, setSearchFilters] = useState({
    book_title: "",
    author: "",
    genre: "",
  });

  // Fetch all books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch all books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=listBooks`);
      const booksData = Array.isArray(response.data)
        ? response.data
        : JSON.parse(response.data.replace(/^.*in backend/, "").trim());
      setBooks(booksData);
      setFilteredBooks(booksData); // Initially display all books
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to handle changes in the search inputs
  const handleSearchChange = (e) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to filter books based on the search filters
  const filterBooks = useCallback(() => {
    const { book_title, author, genre } = searchFilters;

    // Filter books based on the criteria
    const filtered = books.filter((book) => {
      const bookTitleMatch = book.title
        .toLowerCase()
        .includes(book_title.toLowerCase());
      const authorMatch = book.author
        .toLowerCase()
        .includes(author.toLowerCase());
      const genreMatch = book.genre.toLowerCase().includes(genre.toLowerCase());
      return bookTitleMatch && authorMatch && genreMatch;
    });

    setFilteredBooks(filtered); // Update filtered books
  }, [searchFilters, books]);

  // Watch the search filters and apply filtering whenever they change
  useEffect(() => {
    filterBooks();
  }, [searchFilters, filterBooks]);

  return (
    <div
      style={{ padding: "20px" }}
      className="flex  flex-col gap-4 items-center justify-center w-screen"
    >
      <h1 style={{ fontSize: "2.5em" }} className="mb-3">
        Book Search
      </h1>


      <div className="w-screen flex flex-col gap-3 items-center justify-center ">
      <h2 style={{ fontSize: '2em' }} className="mb-2">Search Filters</h2>
      <div className=" w-25 flex flex-col gap-2 w-50 p-4  text-black border-2 rounded" style={{ backgroundColor: '#dadee6' }}>
          {/* Book Title Input */}
          <div className="form-group row flex">
            <label className="col-sm-2 col-form-label">Book Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="book_title"
                placeholder="Search by Book Title"
                value={searchFilters.book_title}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Author Input */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Author</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="author"
                placeholder="Search by Author"
                value={searchFilters.author}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Genre Input */}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Genre</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="genre"
                placeholder="Search by Genre"
                value={searchFilters.genre}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '2em' }} className="mb-2">Book Results</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Book Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                {/* <td>
                  <button className="btn btn-primary">Borrow</button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookSearch;
