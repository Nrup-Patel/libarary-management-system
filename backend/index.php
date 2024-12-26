<?php
require_once './utils/cors.php';
require_once './controllers/bookController.php';
require_once './controllers/memberController.php';
require_once './controllers/loanController.php';

$bookController = new BookController();
$memberController = new MemberController();
require_once 'models/loan.php'; // Include the LoanModel file
require_once 'controllers/loanController.php';



$loanController = new LoanController(); // Pass the model as a dependency



$action = $_GET['action'] ?? '';

switch ($action) {
    case 'listBooks':
        $bookController->listBooks();
        break;

    case 'addBook':
        $data = json_decode(file_get_contents('php://input'), true);
        // echo json_encode(["data at index php for new book"=>$data]);
        $bookController->addBook($data);
        break;

    case 'deleteBook':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'];
        // echo json_encode($data['id']);
        // echo json_encode(['at index.php deletebook id'=> $id]);
        if ($id) {
            $bookController->deleteBook($id);
        } else {
            echo json_encode(['error' => 'No book ID provided']);
        }
        break;
    case 'updateBook':
        // Retrieve the data sent in the POST body
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Debugging to verify data received
        if ($data === null) {
            echo json_encode(['error' => 'No data received or invalid JSON']);
            return;
        }
        
        
        // Uncomment below when testing is complete
        $bookController->updateBook($data);
        break;
    case 'listMembers':
        try {
            $members = $memberController->listMembers();
            echo json_encode(['success' => true, 'data' => $members]);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
        break;

    case 'addMember':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $memberController->addMember($data);
            echo json_encode(['success' => true, 'message' => 'Member added successfully']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
        break;

    case 'updateMember':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $memberController->updateMember($data);
            echo json_encode(['success' => true, 'message' => 'Member updated successfully']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
        break;

    case 'deleteMember':
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $id = $data['id'];
            echo json_encode( $id);
            if (!$id) {
                throw new Exception('Member ID is required');
            }
            $memberController->deleteMember($id);
            echo json_encode(['success' => true, 'message' => 'Member deleted successfully']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
        }
        break;
    case 'borrowBook':
        $data = json_decode(file_get_contents('php://input'), true);
        // echo json_encode($data);
        $loanController->borrowBook($data);
        break;
    
    case 'returnBook':
        $data = json_decode(file_get_contents('php://input'), true);
        $loanController->returnBook($data);
        break;
    
    case 'listLoans':
        $loanController->listLoans();
        break;
    
    case 'viewLoanDetails':
        $loanId = $_GET['loan_id'] ?? null;
        $loanController->viewLoanDetails($loanId);
        break;
    case 'listDetailedLoans':
        $loanController->listDetailedLoans();
        break;
    case 'login':
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? null;
        $phone = $data['phone'] ?? null;
        // echo json_encode(['success'=> true,'email'=> $email,'phone'=> $phone]);
        
        $memberController->login($email, $phone);
        break;

    
        
    default:
        echo json_encode(['error' => 'Invalid action']);
}
?>
