import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php"; // Your API base URL

const BookSearch = () => {
  const [books, setBooks] = useState([]); // To store all books
  const [filteredBooks, setFilteredBooks] = useState([]); // To store filtered books based on search
  const [searchFilters, setSearchFilters] = useState({
    book_title: '',
    author: '',
    genre: ''
  });

  // Fetch all books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch all books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=listBooks`);
      setBooks(response.data);
      setFilteredBooks(response.data); // Initially display all books
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to handle changes in the search inputs
  const handleSearchChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  // Function to filter books based on the search filters
  const filterBooks = () => {
    const { book_title, author, genre } = searchFilters;

    // Filter books based on the criteria
    const filtered = books.filter((book) => {
      const bookTitleMatch = book.title.toLowerCase().includes(book_title.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(author.toLowerCase());
      const genreMatch = book.genre.toLowerCase().includes(genre.toLowerCase());
      return bookTitleMatch && authorMatch && genreMatch;
    });

    setFilteredBooks(filtered); // Update filtered books
  };

  // Watch the search filters and apply filtering whenever they change
  useEffect(() => {
    filterBooks();
  }, [searchFilters]);

  return (
    <div>
      <h1>Book Search</h1>

      <h2>Search Filters</h2>
      <div>
        <input
          type="text"
          name="book_title"
          placeholder="Search by Book Title"
          value={searchFilters.book_title}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Search by Author"
          value={searchFilters.author}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Search by Genre"
          value={searchFilters.genre}
          onChange={handleSearchChange}
        />
      </div>

      <h2>Book Results</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>
                  <button>Borrow</button> {/* You can add action buttons like borrow here */}
                </td>
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
