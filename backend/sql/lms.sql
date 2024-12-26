-- Create Book Table

CREATE TABLE Book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    publication_year INT NOT NULL CHECK (publication_year >= 1000 AND publication_year <= 9999),
    total_copies INTEGER NOT NULL CHECK (total_copies >= 0),
    available_copies INTEGER NOT NULL CHECK (available_copies >= 0)
);

-- Create Member Table
CREATE TABLE Member (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    membership_date DATE DEFAULT CURRENT_DATE
);

-- Create Loan Table
CREATE TABLE Loan (
    id SERIAL PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    loan_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    fine DECIMAL(10, 2) DEFAULT 0,
    FOREIGN KEY (member_id) REFERENCES Member(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Book(id) ON DELETE CASCADE
);


-- Add Books
INSERT INTO Book (title, author, genre, publication_year, total_copies, available_copies)
VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 1925, 5, 5),
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960, 3, 3);

-- Add Members
INSERT INTO Member (name, email, phone)
VALUES
('John Doe', 'john.doe@example.com', '123-456-7890'),
('Jane Smith', 'jane.smith@example.com', '987-654-3210');

-- Add Loans
INSERT INTO Loan (book_id, member_id, due_date)
VALUES
(3, 1, '2024-01-15'),
(4, 2, '2024-01-20');

select * from loan;
select * from book;
select * from member;
