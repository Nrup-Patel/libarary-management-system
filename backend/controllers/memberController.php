<?php
require_once __DIR__ . '/../models/Member.php';

class MemberController {
    private $memberModel;

    public function __construct() {
        $db = new Database();
        $this->memberModel = new Member($db->connect());
    }

    // List all members
    public function listMembers() {
        $members = $this->memberModel->getAllMembers();
        echo json_encode($members);
    }

    // Add a new member
    public function addMember($data) {
        if (!isset($data['name'], $data['email'], $data['phone'])) {
            echo json_encode(['error' => 'Missing required fields']);
            return;
        }
        $this->memberModel->addMember($data);
        echo json_encode(['message' => 'Member added successfully']);
    }

    // Update a member
    public function updateMember($data) {
        if (!isset($data['id'], $data['name'], $data['email'], $data['phone'])) {
            echo json_encode(['error' => 'Missing required fields']);
            return;
        }
        $this->memberModel->updateMember($data);
        echo json_encode(['message' => 'Member updated successfully']);
    }

    // Delete a member
    public function deleteMember($id) {
        if ($this->memberModel->hasActiveLoans($id)) {
            echo json_encode(['error' => 'Member has active loans']);
            return;
        }
        $this->memberModel->deleteMember($id);
        echo json_encode(['message' => 'Member deleted successfully']);
    }
    public function login($email, $phone) {
        // Use $this->memberModel to access the member model and verify credentials
        $member = $this->memberModel->verifyCredentials($email, $phone);
        
        if ($member) {
            $_SESSION['user_id'] = $member['id'];
            $_SESSION['user_name'] = $member['name'];
            $_SESSION['user_email'] = $member['email'];
            $_SESSION['user_phone'] = $member['phone'];
            
            echo json_encode(['success'=>true, "member"=> $member]);
            // header('Location: dashboard.php');
            // exit();
            return;
        } else {
            header('Location: login.php?error=Invalid email or phone');
            exit();
        }
        
    }
}


?>
