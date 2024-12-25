<?php
require_once './utils/cors.php';
require_once './controllers/bookController.php';

$bookController = new BookController();

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
        
        

    default:
        echo json_encode(['error' => 'Invalid action']);
}
?>
