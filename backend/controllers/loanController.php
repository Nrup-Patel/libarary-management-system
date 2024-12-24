<?php

require_once '../config/db.php';

class LoanController
{
    // List all loans
    public function listLoans()
    {
        global $pdo;
        $query = "SELECT Loan.*, Book.title AS book_title, Member.name AS member_name 
                  FROM Loan
                  INNER JOIN Book ON Loan.book_id = Book.id
                  INNER JOIN Member ON Loan.member_id = Member.id";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Borrow a book
    public function borrowBook($book_id, $member_id, $due_date)
    {
        global $pdo;

        // Check if the book is available
        $query = "SELECT available_copies FROM Book WHERE id = :book_id";
        $stmt = $pdo->prepare($query);
        $stmt->execute([':book_id' => $book_id]);
        $book = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($book && $book['available_copies'] > 0) {
            // Create loan record
            $query = "INSERT INTO Loan (book_id, member_id, due_date) VALUES (:book_id, :member_id, :due_date)";
            $stmt = $pdo->prepare($query);
            $stmt->execute([
                ':book_id' => $book_id,
                ':member_id' => $member_id,
                ':due_date' => $due_date
            ]);

            // Decrease available copies
            $query = "UPDATE Book SET available_copies = available_copies - 1 WHERE id = :book_id";
            $stmt = $pdo->prepare($query);
            $stmt->execute([':book_id' => $book_id]);
        } else {
            throw new Exception("Book is not available for borrowing.");
        }
    }

    // Return a book
    public function returnBook($loan_id)
    {
        global $pdo;

        // Find loan details
        $query = "SELECT book_id FROM Loan WHERE id = :loan_id";
        $stmt = $pdo->prepare($query);
        $stmt->execute([':loan_id' => $loan_id]);
        $loan = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($loan) {
            // Mark loan as returned
            $query = "UPDATE Loan SET return_date = CURRENT_DATE WHERE id = :loan_id";
            $stmt = $pdo->prepare($query);
            $stmt->execute([':loan_id' => $loan_id]);

            // Increase available copies
            $query = "UPDATE Book SET available_copies = available_copies + 1 WHERE id = :book_id";
            $stmt = $pdo->prepare($query);
            $stmt->execute([':book_id' => $loan['book_id']]);
        } else {
            throw new Exception("Invalid loan ID.");
        }
    }
}

?>
