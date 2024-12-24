// src/BookApp.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

function BookApp() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publication_year: "",
    total_copies: "",
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
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};


  // Add a new book
  const handleAddBook = async () => {
    try {
      await axios.post(`${API_BASE_URL}?action=addBook`, newBook);
      fetchBooks();
      setNewBook({
        title: "",
        author: "",
        genre: "",
        publication_year: "",
        total_copies: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Update a book
  const handleUpdateBook = async () => {
    try {
      await axios.put(`${API_BASE_URL}?action=updateBook`, editingBook);
      fetchBooks();
      setEditingBook(null);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Delete a book
  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}?action=deleteBook`, {
        data: { id },
      });
      fetchBooks();
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
      
      <h2>Book List</h2>
      <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication Year</th>
            <th>Total Copies</th>
            <th>Available Copies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
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

      <h2>{editingBook ? "Edit Book" : "Add a New Book"}</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={editingBook ? editingBook.title : newBook.title}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, title: e.target.value })
              : setNewBook({ ...newBook, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author"
          value={editingBook ? editingBook.author : newBook.author}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, author: e.target.value })
              : setNewBook({ ...newBook, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Genre"
          value={editingBook ? editingBook.genre : newBook.genre}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, genre: e.target.value })
              : setNewBook({ ...newBook, genre: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Publication Year"
          value={editingBook ? editingBook.publication_year : newBook.publication_year}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, publication_year: e.target.value })
              : setNewBook({ ...newBook, publication_year: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Total Copies"
          value={editingBook ? editingBook.total_copies : newBook.total_copies}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, total_copies: e.target.value })
              : setNewBook({ ...newBook, total_copies: e.target.value })
          }
        />
        <button onClick={editingBook ? handleUpdateBook : handleAddBook}>
          {editingBook ? "Update Book" : "Add Book"}
        </button>
      </div>
    </div>
  );
}

export default BookApp;
