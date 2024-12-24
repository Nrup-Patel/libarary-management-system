<?php
class Loan {
    private $conn;
    private $table = "Loan";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all loans
    public function getAllLoans() {
        $query = "SELECT * FROM {$this->table}";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Add a new loan
    public function addLoan($data) {
        $query = "INSERT INTO {$this->table} (book_id, member_id, due_date, loan_date, return_date, fine_amount)
                  VALUES (:book_id, :member_id, :due_date, :loan_date, :return_date, :fine_amount)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }

    // Update loan return date and fine
    public function updateLoan($id, $return_date, $fine_amount) {
        $query = "UPDATE {$this->table} 
                  SET return_date = :return_date, fine_amount = :fine_amount
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([
            ':id' => $id,
            ':return_date' => $return_date,
            ':fine_amount' => $fine_amount
        ]);
    }

    // Delete a loan
    public function deleteLoan($id) {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([':id' => $id]);
    }
}
?>
