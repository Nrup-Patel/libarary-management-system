<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../models/Book.php';


class BookController {
    private $bookModel;

    public function __construct() {
        echo 'in backend';
        $db = new Database();
        $this->bookModel = new Book($db->connect());
    }

    // List all books
    public function listBooks() {
        $books = $this->bookModel->getAllBooks();
        echo json_encode($books);
    }

    // Add a new book
    public function addBook() {
        $data = [
            ':title' => $_POST['title'],
            ':author' => $_POST['author'],
            ':genre' => $_POST['genre'],
            ':publication_year' => $_POST['publication_year'],
            ':total_copies' => $_POST['total_copies'],
            ':available_copies' => $_POST['total_copies'],
        ];
        $this->bookModel->addBook($data);
        echo json_encode(['message' => 'Book added successfully']);
    }

    // Delete a book
    public function deleteBook() {
        $id = $_POST['id'];
        $this->bookModel->deleteBook($id);
        echo json_encode(['message' => 'Book deleted successfully']);
    }
}

?>
