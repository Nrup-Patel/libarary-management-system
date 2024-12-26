# Library Management System (LMS) Setup Guide

This guide will help you set up the Library Management System (LMS) with a React-based frontend and a PHP backend using XAMPP, PostgreSQL, and pgAdmin4.

---

## Prerequisites

- **XAMPP**: [Download here](https://www.apachefriends.org/index.html).
- **PostgreSQL** and **pgAdmin4**: [Download here](https://www.postgresql.org/download/).
- **Node.js**: [Download here](https://nodejs.org/).
- A modern web browser.

---

## Step 1: Set Up XAMPP

### 1.1 Install XAMPP
1. Download XAMPP from the [Apache Friends website](https://www.apachefriends.org/index.html).
2. Run the installer and select **Apache** and **MySQL** during the setup process.

### 1.2 Start XAMPP Control Panel
1. Launch the XAMPP Control Panel from the installation directory (e.g., `C:\xampp\xampp-control.exe`).
2. Start the **Apache** and **MySQL** servers by clicking **Start** next to each service.

---

## Step 2: Install PostgreSQL and pgAdmin4

### 2.1 Install PostgreSQL
1. Download PostgreSQL from the [official website](https://www.postgresql.org/download/).
2. Run the installer and ensure you select **pgAdmin4** during the installation.
3. During installation, set a password for the default PostgreSQL superuser `postgres`. Keep this password safe.

### 2.2 Launch pgAdmin4
1. Open **pgAdmin4** from your applications.
2. Log in using the password you set during the PostgreSQL installation.

---
## Step 3: Set Up the Database in pgAdmin4
### 3.1 Clone the Repository

1. Open a terminal or command prompt.

2. Navigate to the htdocs folder of your XAMPP installation:
   ```
      cd C:\xampp\htdocs
   ```
3. Clone the repository into the htdocs folder with the name `Library-Management-System`:
   ```
      git clone https://github.com/Nrup-Patel/libarary-management-system.git
   ```

### 3.2 Create a New Database
1. Open pgAdmin4 and connect to your PostgreSQL server by clicking on the server name (e.g., `PostgreSQL 15`).
2. Right-click on **Databases** in the left-hand panel and select **Create > Database**.
3. Enter `lms` as the database name and click **Save**.

### 3.3 Import the SQL File
1. Navigate to:
   ```
   C:\xampp\htdocs\backend\sql
   ```
2. Open the `lms.sql` file in a text editor.
3. In pgAdmin4, select your `lms` database.
4. Right-click on the database and choose **Query Tool**.
5. Copy the content of `lms.sql` and paste it into the Query Tool.
6. Click the **Execute/Run** button (lightning icon) to execute the SQL commands.

---

## Step 4: Configure Backend

### 4.1 Update `config.php`
1. Navigate to:
   ```
   C:\xampp\htdocs\backend
   ```
2. Open `config.php` in a text editor.
3. Update the database connection details:
   ```php
   <?php
   $host = 'localhost';
   $port = '5432';
   $dbname = 'library_system';
   $user = 'postgres';
   $password = 'your_postgres_password';
   ?>
   ```

---

## Step 5: Set Up Frontend

### 5.1 Install Node.js Dependencies
1. Navigate to:
   ```
   C:\xampp\htdocs\frontend
   ```
2. Open a terminal or command prompt in this directory.
3. Run the following commands:
   ```bash
   npm install
   npm run start
   ```

### 5.2 Access the Application
- Open your browser and navigate to:
  ```
  http://localhost:3000
  ```

---

## Step 6: Run the Backend
1. Ensure XAMPP is running with **Apache** and **MySQL** servers started.
2. Navigate to:
   ```
   C:\xampp\htdocs\backend
   ```
3. Open the browser and test API endpoints if needed.

---

## Troubleshooting

- If the frontend does not load:
  - Ensure `npm run start` is running.
  - Check for errors in the terminal.
- If the database connection fails:
  - Verify your `config.php` settings.
  - Check that PostgreSQL is running.
- If XAMPP does not start:
  - Ensure no other service is using ports 80 (Apache) or 3306 (MySQL).

---

You have now successfully set up and configured the Library Management System (LMS).

