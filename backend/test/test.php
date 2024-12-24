<?php
require_once '../controllers/bookController.php';
require_once '../controllers/memberController.php';
require_once '../controllers/loanController.php';

if (1==1) {
    $controller = new BookController();
    $controller->listBooks(); // Or any other method to test
} elseif (1==1) {
    $controller = new MemberController();
    $controller->listMembers();
} elseif (1==1) {
    $controller = new LoanController();
    $controller->listLoans();
} else {
    echo "No valid action provided!";
}
?>