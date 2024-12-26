<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../models/Loan.php';


class LoanController {
    private $loanModel;

    public function __construct() {
        $db = new Database();
        $this->loanModel = new Loan($db->connect()); // Correct assignment
    }

    public function borrowBook($data) {
        $book = $this->loanModel->getBookById($data['book_id']);
        if (!$book) {
            throw new Exception('Book not found');
        }

        if ($book['available_copies'] <= 0) {
            throw new Exception('Book is not available');
        }

        // Set loan and due dates
        $data['loan_date'] = date('Y-m-d');
        $data['due_date'] = date('Y-m-d', strtotime('+7 days')); // Example: 7 days loan period

        $this->loanModel->createLoan($data);
        $this->loanModel->updateBookCopies($data['book_id'], -1); // Decrease available copies
        echo json_encode(['success' => true, 'message' => 'Book borrowed successfully']);
    }

    public function returnBook($data) {
        $loan = $this->loanModel->getLoanById($data['loan_id']);
        if (!$loan) {
            throw new Exception('Invalid loan ID');
        }

        $fine = $this->calculateFine($loan['due_date'], date('Y-m-d'));
        $this->loanModel->updateLoan($data['loan_id'], ['return_date' => date('Y-m-d'), 'fine' => $fine]);
        $this->loanModel->updateBookCopies($loan['book_id'], 1); // Increase available copies
        echo json_encode(['success' => true, 'message' => 'Book returned successfully']);
    }

    public function listLoans() {
        $loans = $this->loanModel->getAllLoans();
        echo json_encode($loans);
    }

    public function viewLoanDetails($loanId) {
        $loan = $this->loanModel->getLoanById($loanId);
        if (!$loan) {
            echo json_encode(['success' => false, 'message' => 'Loan not found']);
            return;
        }
        echo json_encode($loan);
    }

    private function calculateFine($dueDate, $returnDate) {
        $diff = (strtotime($returnDate) - strtotime($dueDate)) / (60 * 60 * 24);
        return $diff > 0 ? $diff * 5 : 0; // $5 fine per day late
    }
    public function listDetailedLoans() {
        $loans = $this->loanModel->getLoanDetails();
        if (empty($loans)) {
            echo json_encode(['success' => false, 'message' => 'No loans found']);
            return;
        }
    
        echo json_encode(['success' => true, 'data' => $loans]);
    }
    
}
?>
