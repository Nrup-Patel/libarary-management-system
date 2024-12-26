# Library Management System

This project is a **Library Management System** built with **React.js** on the frontend and **PHP** on the backend. It allows users to manage library functions such as managing books, members, loans, and more, with user authentication and a responsive user interface.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation Guide](#installation-guide)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [API Endpoints](#api-endpoints)
7. [License](#license)

---

## Features

- User Authentication (Login/Logout).
- Dashboard to manage books, members, loans, and more.
- Search functionality for books.
- Member and loan management.
- Fully responsive and user-friendly UI.
- Backend built using PHP with session-based authentication.

---

## Technologies Used

### Frontend:
- React.js
- React Router
- Bootstrap (for styling)

### Backend:
- PHP
- MySQL (Database)

---

## Installation Guide

Follow the steps below to set up the project on your local machine.

### Prerequisites

1. Node.js (for running React)
   - [Download Node.js](https://nodejs.org)
2. PHP (for backend)
   - [Download PHP](https://www.php.net/downloads)
3. MySQL or any other database system
   - [Download MySQL](https://dev.mysql.com/downloads/)
4. A local server like XAMPP/WAMP or an equivalent setup.

### Backend Setup (PHP)

1. Clone the repository or download the backend folder.
2. Move the backend files to your local server directory (e.g., `htdocs` for XAMPP).
3. Import the database:
   - Open PHPMyAdmin.
   - Create a database (e.g., `library_system`).
   - Import the SQL file provided in the `backend/sql/` folder.
4. Configure the database connection:
   - Update the `backend/config.php` file with your database credentials:
     ```php
     <?php
     $host = 'localhost';
     $user = 'root';
     $password = '';
     $database = 'library_system';
     ?>
     ```

### Frontend Setup (React)

1. Clone the repository or download the frontend folder.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
