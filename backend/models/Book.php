<?php
class Book {
    private $conn;
    private $table = "Book";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all books
    public function getAllBooks() {
        $query = "SELECT * FROM {$this->table}";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Add a new book
    public function addBook($data) {
        $query = "INSERT INTO {$this->table} (title, author, genre, publication_year, total_copies, available_copies)
                  VALUES (:title, :author, :genre, :publication_year, :total_copies, :available_copies)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }

    // Delete a book
    public function deleteBook($id) {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([':id' => $id]);
    }
}
?>
