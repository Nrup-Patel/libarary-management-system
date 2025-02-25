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
![Navigate to htdocs folder](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/navigate_to_htdocs.jpg)

3. Clone the repository into the htdocs folder with the name `Library-Management-System`:
![open command prompt](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/open_cmd_in_htdocs.jpg)
![open command prompt](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/cmd2.jpg)
   ```
      git clone https://github.com/Nrup-Patel/libarary-management-system.git
   ```

### 3.2 Create a New Database
1. Open pgAdmin4 and connect to your PostgreSQL server by clicking on the server name (e.g., `PostgreSQL 15`).
![open command prompt](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/open_pgadmin_and_click_on_servers.jpg)
2. Right-click on **Databases** in the left-hand panel and select **Create > Database**.
![open command prompt](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/databases.jpg)
3. Enter `lms` as the database name and click **Save**.
![open command prompt](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/lms.jpg)

### 3.3 Import the SQL File
1. Navigate to:
[!Navigate to lms.sql](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/lms.sql)
   ```
   C:\xampp\htdocs\Library-management-system\backend\sql
   ```
2. Open the `lms.sql` file in a text editor.
3. In pgAdmin4, select your `lms` database.
4. Right-click on the database and choose **Query Tool**.
[!Open query tool](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/open_query_tool.sql)
5. Copy the content of `lms.sql` and paste it into the Query Tool.
[!Navigate to lms.sql](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/lms.sql)
6. Click the **Execute/Run** button (lightning icon) to execute the SQL commands.

---

## Step 4: Configure Backend

### 4.1 Update `db.php`
1. Navigate to:
   ```
   C:\xampp\htdocs\Library-management-system\backend
   ```
2. Open `config\db.php` in a text editor.
[!Navigate to db.php](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/config.jpg)
[!open to db.php](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/db_php.jpg)


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
   C:\xampp\htdocs\Library-management-system\frontend
   ```
   [!Navigate to Frontend folder](https://raw.githubusercontent.com/Nrup-Patel/libarary-management-system/main/set-up-images/frontend.jpg)
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
   C:\xampp\htdocs\Library-management-system\backend
   ```
3. Open the browser and test API endpoints if needed.

---

## Troubleshooting

- If the frontend does not load:
  - Ensure `npm run start` is running.
  - Check for errors in the terminal.
- If the database connection fails:
  - Verify your `db.php` settings.
  - Check that PostgreSQL is running.
- If XAMPP does not start:
  - Ensure no other service is using ports 80 (Apache) or 3306 (MySQL).

---


# Library Management System UI

This project is the frontend for the Library Management System (LMS). It includes various pages that allow users to interact with the system, such as logging in, managing books, searching for books, managing members, and viewing loans. Below is an overview of each page and its functionality.

---

## Pages Overview

### 1. **Login Page**
- **Path**: `/login`
- **Purpose**: 
  - Allows users to log into the Library Management System using their credentials.
  - Users can log in using their email and phone number for verification.

  
- **Key Components**:
  - Form for email and phone number input.
  - Error handling for invalid credentials.
  - Redirection to the dashboard upon successful login.
  ![Login Page](./images/login-page.png)

---

### 2. **Features Page**
- **Path**: `/features`
- **Purpose**: 
  - Displays the main features of the Library Management System.
  - Highlights key functionalities such as book management, member management, loan system, and search capabilities.

- **Key Components**:
  - List of features available to users.
  - Brief descriptions and visual aids for each feature.

  ![Features Page](./images/features-page.png)
  
---

### 3. **Book Management Page**
- **Path**: `/book`
- **Purpose**: 
  - Allows users to view, add, edit, and delete books in the library catalog.
  - Users can input book details such as title, author, ISBN, and genre.

- **Key Components**:
  - Table or list to display all books in the catalog.
  - Form for adding or editing book details.
  - Options to delete a book or update its information.
  ![Book Management Page](./images/book-management-page.png)

---

### 4. **Search Book Page**
- **Path**: `/searchBook`
- **Purpose**: 
  - Allows users to search for books in the library catalog.
  - Users can filter by title, author, or genre.
  
- **Key Components**:
  - Search bar to input search queries.
  - Filters for narrowing down the search.
  - List of search results based on the query.
  ![Search Book Page](./images/search-book-page.png)

---

### 5. **Member Management Page**
- **Path**: `/member`
- **Purpose**: 
  - Allows the management of library members.
  - Admins can add, view, edit, or remove members.
  
- **Key Components**:
  - Table of all members with their details.
  - Form for adding or editing member information (e.g., name, email, phone number).
  - Options to delete a member from the system.
  ![Member Management Page](./images/member-management-page.png)

---

### 6. **Loan Management Page**
- **Path**: `/loan`
- **Purpose**: 
  - Displays information about book loans in the library.
  - Admins can manage loans, including issuing books to members and viewing loan status.

- **Key Components**:
  - List of current loans with member and book details.
  - Option to issue new loans and mark them as returned.
  - Filters to view overdue or pending loans.
  ![Loan Management Page](./images/loan-management-page.png)

---

### 7. **Dashboard Page**
- **Path**: `/dashboard`
- **Purpose**: 
  - Provides a summary view of the library system.
  - Displays key statistics such as total books, members, loans, and overdue items.
  
- **Key Components**:
  - Overview of library statistics in graphical or tabular form.
  - Links to other pages for managing books, members, loans, etc.
  - Recent activity or notifications related to the library system.
  ![Dashboard Page](./images/features-page.png)

---


You have now successfully set up and configured the Library Management System (LMS).

