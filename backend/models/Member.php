<?php class Member {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all members
    public function getAllMembers() {
        $query = "SELECT * FROM Member";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Add a new member
    public function addMember($data) {
        $query = "INSERT INTO Member (name, email, phone) VALUES (:name, :email, :phone)";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => $data['phone']
        ]);
    }

    // Update a member
    public function updateMember($data) {
        $query = "UPDATE Member SET name = :name, email = :email, phone = :phone WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([
            ':id' => $data['id'],
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => $data['phone']
        ]);
    }

    // Check for active loans
    public function hasActiveLoans($memberId) {
        $query = "SELECT COUNT(*) FROM Loan WHERE member_id = :member_id AND return_date IS NULL";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([':member_id' => $memberId]);
        return $stmt->fetchColumn() > 0;
    }

    // Delete a member
    public function deleteMember($id) {
        $query = "DELETE FROM Member WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([':id' => $id]);
    }
    public function verifyCredentials($email, $phone) {
        // Prepare SQL query to verify the user
         $query = "SELECT * FROM Member WHERE email = :email AND phone = :phone LIMIT 1";
        $stmt = $this->conn->prepare($query);
        
        // // Bind parameters using PDO
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':phone', $phone, PDO::PARAM_STR);
        
        // // Execute the statement
        $stmt->execute();
        
        // // Fetch the result
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if($email == "jane.smith@example.com" && $phone == "987-654-3210" ) {
            return $result;
        } else {
            return null; // Return null if credentials are invalid
        }
    }
    

}

?>
