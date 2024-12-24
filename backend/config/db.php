<?php
// Database configuration constants
define('DB_HOST', 'localhost');          // Hostname of your database server
define('DB_PORT', '5432');               // Port number for PostgreSQL (default: 5432)
define('DB_NAME', 'lms');                // Your database name
define('DB_USER', 'postgres');           // Your PostgreSQL username
define('DB_PASS', 'nrup2004');           // Your PostgreSQL password

class Database {
    private $pdo;

    // Connect to the database and return the PDO instance
    public function connect() {
        if ($this->pdo === null) {
            try {
                $this->pdo = new PDO(
                    "pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME,
                    DB_USER,
                    DB_PASS
                );
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // echo "Database connection established successfully."; // Debugging message
            } catch (PDOException $e) {
                die("Database connection failed: " . $e->getMessage());
            }
        }
        return $this->pdo;
    }
}
