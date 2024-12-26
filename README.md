# Library Management System

This project is a **Library Management System** built with **React.js** on the frontend and **PHP** on the backend. It uses **PostgreSQL** as the database, managed via **pgAdmin**. The system allows users to manage library functions such as books, members, loans, and more, with user authentication and a responsive UI.

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
- Dashboard to manage books, members, and loans.
- Search functionality for books.
- Member and loan management.
- Fully responsive and user-friendly UI.
- PostgreSQL database with powerful querying.

---

## Technologies Used

### Frontend:
- React.js
- React Router
- Bootstrap (for styling)

### Backend:
- PHP
- PostgreSQL (Database)
- pgAdmin (Database Management)

---

## Installation Guide

Follow the steps below to set up the project on your local machine.

### Prerequisites

1. Node.js (for running React)
   - [Download Node.js](https://nodejs.org)
2. PHP (for backend)
   - [Download PHP](https://www.php.net/downloads)
3. PostgreSQL and pgAdmin
   - [Download PostgreSQL](https://www.postgresql.org/download/)

---

### Backend Setup (PHP + PostgreSQL)

1. **Clone the repository** or download the backend folder.
2. **Install PostgreSQL**:
   - Download and install PostgreSQL from the official site.
   - Set up a PostgreSQL database and user during installation.
3. **Set up the database**:
   - Open **pgAdmin** and create a new database (e.g., `library_system`).
   - Import the provided SQL file (`backend/sql/library_system.sql`) into the database.
     - Go to `pgAdmin > Your Database > Query Tool`.
     - Paste the SQL file content and run it.
4. **Configure the database connection**:
   - Open `backend/config.php` and update the credentials:
     ```php
     <?php
     $host = 'localhost';
     $port = '5432'; // Default PostgreSQL port
     $dbname = 'library_system';
     $user = 'your_username';
     $password = 'your_password';
     ?>
     ```
5. **Run the backend server**:
   - Place the backend files in your server directory (e.g., `htdocs` for XAMPP).
   - Start your server.

---

### Frontend Setup (React)

1. **Clone the repository** or download the frontend folder.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
