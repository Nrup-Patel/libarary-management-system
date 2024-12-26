// // src/BookApp.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

// function Book() {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     publication_year: "",
//     total_copies: "",
//     available_copies: ""
//   });
//   const [editingBook, setEditingBook] = useState(null);

//   // Fetch all books
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}?action=listBooks`);
//       const booksData = Array.isArray(response.data)
//         ? response.data // Use the array directly if it is an array
//         : JSON.parse(response.data.replace(/^.*in backend/, '').trim()); // Parse if extra text exists
//       setBooks(booksData);
//       console.log(booksData);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Add a new book
//   const handleAddBook = async () => {
//     try {
//       console.log(newBook);
//       await axios.post(`${API_BASE_URL}?action=addBook`, JSON.stringify(newBook), {
//         headers: {
//           "Content-Type": "application/json", // Correct content type
//         },
//       });
//       fetchBooks();
//       setNewBook({
//         title: "",
//         author: "",
//         genre: "",
//         publication_year: "",
//         total_copies: "",
//         available_copies: ""
//       });
//     } catch (error) {
//       console.error("Error adding book:", error);
//     }
//   };

//   // Update a book
//   const handleUpdateBook = async () => {
//     try {
//       console.log("Editing book is:", editingBook);
//       await axios.post(
//         `${API_BASE_URL}?action=updateBook`, // Correct API endpoint
//         JSON.stringify(editingBook), // Ensure JSON data is sent
//         {
//           headers: {
//             "Content-Type": "application/json", // Correct content type
//           },
//         }
//       );
//       fetchBooks(); // Refresh books after update
//       setEditingBook(null); // Clear editing state
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   // Delete a book
//   const handleDeleteBook = async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}?action=deleteBook`, {
//         headers: {
//           "Content-Type": "application/json", // Correct content type
//         },
//         data: JSON.stringify({ id }), // Pass the id as part of the body
//       });
//       fetchBooks(); // Refresh the list of books after deletion
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }} className=" ">
//       <h1>Library Management System</h1>
      
//       <h2>Book List</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Title</th>
//             <th scope="col">Author</th>
//             <th scope="col">Genre</th>
//             <th scope="col">Publication Year</th>
//             <th scope="col">Total Copies</th>
//             <th scope="col">Available Copies</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books && books.map((book) => (
//             <tr key={book.id}>
//               <th scope="row">{book.id}</th>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.genre}</td>
//               <td>{book.publication_year}</td>
//               <td>{book.total_copies}</td>
//               <td>{book.available_copies}</td>
//               <td>
//                 <button onClick={() => setEditingBook(book)}>Edit</button>
//                 <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="w-screen flex flex-col gap-3 items-center justify-center ">
//       <h2>{editingBook ? "Edit Book" : "Add a New Book"}</h2>
//       <div className=" w-25 flex flex-col gap-2 w-50 p-4 bg-pure-greys-500 text-black">
//         {/* Title */}
//         <div className="form-group row">
//           <label htmlFor="bookTitle" className="col-sm-2 col-form-label col-form-label-sm">Title</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="bookTitle"
//               placeholder="Book Title"
//               value={editingBook ? editingBook.title : newBook.title}
//               onChange={(e) =>
//                 editingBook
//                   ? setEditingBook({ ...editingBook, title: e.target.value })
//                   : setNewBook({ ...newBook, title: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Author */}
//         <div className="form-group row">
//           <label htmlFor="bookAuthor" className="col-sm-2 col-form-label col-form-label-sm">Author</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="bookAuthor"
//               placeholder="Author"
//               value={editingBook ? editingBook.author : newBook.author}
//               onChange={(e) =>
//                 editingBook
//                   ? setEditingBook({ ...editingBook, author: e.target.value })
//                   : setNewBook({ ...newBook, author: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Genre */}
//         <div className="form-group row">
//           <label htmlFor="bookGenre" className="col-sm-2 col-form-label col-form-label-sm">Genre</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="bookGenre"
//               placeholder="Genre"
//               value={editingBook ? editingBook.genre : newBook.genre}
//               onChange={(e) =>
//                 editingBook
//                   ? setEditingBook({ ...editingBook, genre: e.target.value })
//                   : setNewBook({ ...newBook, genre: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Publication Year */}
//         <div className="form-group row">
//           <label htmlFor="publicationYear" className="col-sm-2 col-form-label col-form-label-sm">Publication Year</label>
//           <div className="col-sm-10">
//             <input
//               type="number"
//               className="form-control form-control-sm"
//               id="publicationYear"
//               placeholder="Publication Year"
//               value={editingBook ? editingBook.publication_year : newBook.publication_year}
//               onChange={(e) =>
//                 editingBook
//                   ? setEditingBook({ ...editingBook, publication_year: Number(e.target.value) })
//                   : setNewBook({ ...newBook, publication_year: Number(e.target.value) })
//               }
//             />
//           </div>
//         </div>

//         {/* Total Copies */}
//         <div className="form-group row">
//           <label htmlFor="totalCopies" className="col-sm-2 col-form-label col-form-label-sm">Total Copies</label>
//           <div className="col-sm-10">
//             <input
//               type="number"
//               className="form-control form-control-sm"
//               id="totalCopies"
//               placeholder="Total Copies"
//               value={editingBook ? editingBook.total_copies : newBook.total_copies}
//               onChange={(e) =>
//                 editingBook
//                   ? setEditingBook({
//                       ...editingBook,
//                       total_copies: Number(e.target.value), // Convert to number
//                     })
//                   : setNewBook({
//                       ...newBook,
//                       total_copies: Number(e.target.value), // Convert to number
//                     })
//               }
//             />
//           </div>
//         </div>

//         {/* Available Copies (only for adding new books) */}
//         {!editingBook && (
//           <div className="form-group row">
//             <label htmlFor="availableCopies" className="col-sm-2 col-form-label col-form-label-sm">Available Copies</label>
//             <div className="col-sm-10">
//               <input
//                 type="number"
//                 className="form-control form-control-sm"
//                 id="availableCopies"
//                 placeholder="Available Copies"
//                 onChange={(e) =>
//                   setNewBook({
//                     ...newBook,
//                     available_copies: Number(e.target.value), // Convert to number
//                   })
//                 }
//               />
//             </div>
//           </div>
//         )}

//         <button className="btn btn-primary" onClick={editingBook ? handleUpdateBook : handleAddBook}>
//           {editingBook ? "Update Book" : "Add Book"}
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Book;
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

function Book() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publication_year: "",
    total_copies: "",
    available_copies: ""
  });
  const [editingBook, setEditingBook] = useState(null);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=listBooks`);
      const booksData = Array.isArray(response.data)
        ? response.data // Use the array directly if it is an array
        : JSON.parse(response.data.replace(/^.*in backend/, '').trim()); // Parse if extra text exists
      setBooks(booksData);
      console.log(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Add a new book
  const handleAddBook = async () => {
    try {
      console.log(newBook);
      await axios.post(`${API_BASE_URL}?action=addBook`, JSON.stringify(newBook), {
        headers: {
          "Content-Type": "application/json", // Correct content type
        },
      });
      fetchBooks();
      setNewBook({
        title: "",
        author: "",
        genre: "",
        publication_year: "",
        total_copies: "",
        available_copies: ""
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Update a book
  const handleUpdateBook = async () => {
    try {
      console.log("Editing book is:", editingBook);
      await axios.post(
        `${API_BASE_URL}?action=updateBook`, // Correct API endpoint
        JSON.stringify(editingBook), // Ensure JSON data is sent
        {
          headers: {
            "Content-Type": "application/json", // Correct content type
          },
        }
      );
      fetchBooks(); // Refresh books after update
      setEditingBook(null); // Clear editing state
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Delete a book
  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}?action=deleteBook`, {
        headers: {
          "Content-Type": "application/json", // Correct content type
        },
        data: JSON.stringify({ id }), // Pass the id as part of the body
      });
      fetchBooks(); // Refresh the list of books after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Library Management System</h1>

      {/* Book List Table */}
      <h2>Book List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Publication Year</th>
            <th scope="col">Total Copies</th>
            <th scope="col">Available Copies</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publication_year}</td>
              <td>{book.total_copies}</td>
              <td>{book.available_copies}</td>
              <td>
                <button onClick={() => setEditingBook(book)}>Edit</button>
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Book Form */}
      <h2>{editingBook ? "Edit Book" : "Add a New Book"}</h2>
      <div className="w-screen flex flex-col gap-3 items-center justify-center">
        <div className="w-50 p-4 bg-lightgray text-black">
          {/* Title */}
          <div className="form-group row">
            <label htmlFor="bookTitle" className="col-sm-2 col-form-label col-form-label-sm">Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="bookTitle"
                placeholder="Book Title"
                value={editingBook ? editingBook.title : newBook.title}
                onChange={(e) =>
                  editingBook
                    ? setEditingBook({ ...editingBook, title: e.target.value })
                    : setNewBook({ ...newBook, title: e.target.value })
                }
              />
            </div>
          </div>

          {/* Author */}
          <div className="form-group row">
            <label htmlFor="bookAuthor" className="col-sm-2 col-form-label col-form-label-sm">Author</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="bookAuthor"
                placeholder="Author"
                value={editingBook ? editingBook.author : newBook.author}
                onChange={(e) =>
                  editingBook
                    ? setEditingBook({ ...editingBook, author: e.target.value })
                    : setNewBook({ ...newBook, author: e.target.value })
                }
              />
            </div>
          </div>

          {/* Genre */}
          <div className="form-group row">
            <label htmlFor="bookGenre" className="col-sm-2 col-form-label col-form-label-sm">Genre</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="bookGenre"
                placeholder="Genre"
                value={editingBook ? editingBook.genre : newBook.genre}
                onChange={(e) =>
                  editingBook
                    ? setEditingBook({ ...editingBook, genre: e.target.value })
                    : setNewBook({ ...newBook, genre: e.target.value })
                }
              />
            </div>
          </div>

          {/* Publication Year */}
          <div className="form-group row">
            <label htmlFor="publicationYear" className="col-sm-2 col-form-label col-form-label-sm">Publication Year</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control form-control-sm"
                id="publicationYear"
                placeholder="Publication Year"
                value={editingBook ? editingBook.publication_year : newBook.publication_year}
                onChange={(e) =>
                  editingBook
                    ? setEditingBook({ ...editingBook, publication_year: Number(e.target.value) })
                    : setNewBook({ ...newBook, publication_year: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* Total Copies */}
          <div className="form-group row">
            <label htmlFor="totalCopies" className="col-sm-2 col-form-label col-form-label-sm">Total Copies</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control form-control-sm"
                id="totalCopies"
                placeholder="Total Copies"
                value={editingBook ? editingBook.total_copies : newBook.total_copies}
                onChange={(e) =>
                  editingBook
                    ? setEditingBook({
                        ...editingBook,
                        total_copies: Number(e.target.value), // Convert to number
                      })
                    : setNewBook({
                        ...newBook,
                        total_copies: Number(e.target.value), // Convert to number
                      })
                }
              />
            </div>
          </div>

          {/* Available Copies (only for adding new books) */}
          {!editingBook && (
            <div className="form-group row">
              <label htmlFor="availableCopies" className="col-sm-2 col-form-label col-form-label-sm">Available Copies</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="availableCopies"
                  placeholder="Available Copies"
                  onChange={(e) =>
                    setNewBook({
                      ...newBook,
                      available_copies: Number(e.target.value), // Convert to number
                    })
                  }
                />
              </div>
            </div>
          )}

          <button className="btn btn-primary" onClick={editingBook ? handleUpdateBook : handleAddBook}>
            {editingBook ? "Update Book" : "Add Book"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
