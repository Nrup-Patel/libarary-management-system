<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../models/Book.php';


class BookController {
    private $bookModel;

    public function __construct() {
        $db = new Database();
        $this->bookModel = new Book($db->connect());
    }

    // List all books
    public function listBooks() {
        $books = $this->bookModel->getAllBooks();
        echo json_encode($books);
    }

    // Add a new book
    public function addBook($data) {
        // echo json_encode(["data at book COnttoller php for new book"=>$data]);
        $this->bookModel->addBook($data);
        echo json_encode(['message' => 'Book added successfully']);
    }

    // Delete a book
    public function deleteBook($id) {
        $this->bookModel->deleteBook($id);
        echo json_encode(['message' => 'Book deleted successfully']);
    }
    public function updateBook($data) {
        // Decode JSON data from the POST body
        // Update the book in the database
        $this->bookModel->updateBook( $data);
        echo json_encode(['message' => 'Book updated successfully']);
    }
    
    
}

?>
