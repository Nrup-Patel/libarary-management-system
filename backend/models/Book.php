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
        echo json_encode(["data at book php for new book"=>$data]);
        $query = "INSERT INTO {$this->table} (title, author, genre, publication_year, total_copies, available_copies)
                  VALUES (:title, :author, :genre, :publication_year, :total_copies, :available_copies)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }

    // Delete a book
    public function deleteBook($id) {
        echo json_encode(["id at book.php deletebook"=>$id]);
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([':id' => $id]);
    }
    public function updateBook($data) {
        echo json_encode(["recieved:" => $data]);
        $id = $data['id'];
        $query = "UPDATE book SET 
                    title = :title, 
                    author = :author, 
                    genre = :genre, 
                    publication_year = :publication_year, 
                    total_copies = :total_copies, 
                    available_copies = :available_copies 
                  WHERE id = :id";
    
        $stmt = $this->conn->prepare($query);
    
        $data[':id'] = $id; // Add ID to the data array
    
        if ($stmt->execute($data)) {
            // echo json_encode($data);
            return true;
        } else {
            throw new Exception('Failed to update book');
        }
    }
    
    
}
?>