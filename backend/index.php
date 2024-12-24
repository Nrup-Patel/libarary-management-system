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
        $bookController->addBook($data);
        break;

    case 'deleteBook':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $bookController->deleteBook($id);
        } else {
            echo json_encode(['error' => 'No book ID provided']);
        }
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
}
?>
