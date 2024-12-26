<?php
class Loan {
    private $conn;
    private $table = "Loan";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getBookById($bookId) {
        $stmt = $this->conn->prepare("SELECT * FROM book WHERE id = :id");
        $stmt->execute([':id' => $bookId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createLoan($data) {
        $stmt = $this->conn->prepare("INSERT INTO loan (member_id, book_id, loan_date, due_date) VALUES (:member_id, :book_id, :loan_date, :due_date)");
        $stmt->execute([
            ':member_id' => $data['member_id'],
            ':book_id' => $data['book_id'],
            ':loan_date' => $data['loan_date'],
            ':due_date' => $data['due_date']
        ]);
    }

    public function updateBookCopies($bookId, $delta) {
        $stmt = $this->conn->prepare("UPDATE book SET available_copies = available_copies + :delta WHERE id = :id");
        $stmt->execute([':delta' => $delta, ':id' => $bookId]);
    }

    public function getLoanById($loanId) {
        $stmt = $this->conn->prepare("SELECT * FROM loan WHERE id = :id");
        $stmt->execute([':id' => $loanId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function updateLoan($loanId, $data) {
        $stmt = $this->conn->prepare("UPDATE loan SET return_date = :return_date, fine = :fine WHERE id = :id");
        $stmt->execute([
            ':return_date' => $data['return_date'],
            ':fine' => $data['fine'],
            ':id' => $loanId
        ]);
    }

    public function getAllLoans() {
        $stmt = $this->conn->prepare("SELECT * FROM loan");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getLoanDetails() {
        $query = "
            SELECT 
                l.id AS loan_id,
                m.name AS member_name,
                b.title AS book_title,
                l.loan_date,
                l.due_date,
                l.return_date,
                l.fine
            FROM loan l
            INNER JOIN member m ON l.member_id = m.id
            INNER JOIN book b ON l.book_id = b.id
            ORDER BY l.loan_date DESC";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
}
?>
