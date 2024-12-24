<?php
class Member {
    private $conn;
    private $table = "Member";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all members
    public function getAllMembers() {
        $query = "SELECT * FROM {$this->table}";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Add a new member
    public function addMember($data) {
        $query = "INSERT INTO {$this->table} (name, email, phone, membership_date)
                  VALUES (:name, :email, :phone, :membership_date)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }

    // Delete a member
    public function deleteMember($id) {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute([':id' => $id]);
    }
}
?>
