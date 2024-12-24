<?php

require_once '../config/db.php';

class MemberController
{
    // List all members
    public function listMembers()
    {
        global $pdo;
        $query = "SELECT * FROM Member";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Add a new member
    public function addMember($name, $email, $phone)
    {
        global $pdo;
        $query = "INSERT INTO Member (name, email, phone) VALUES (:name, :email, :phone)";
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone' => $phone
        ]);
    }

    // Delete a member
    public function deleteMember($id)
    {
        global $pdo;
        $query = "DELETE FROM Member WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->execute([':id' => $id]);
    }
}

?>
