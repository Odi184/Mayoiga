USE mayoiga;

CREATE TABLE Books (
  book_id INT AUTO_INCREMENT PRIMARY KEY,
  book_title VARCHAR(255) NOT NULL,
  book_resume VARCHAR(2500) NULL,
  book_availability BIT NOT NULL DEFAULT 1 -- 1 Available | 0 Not available
);
