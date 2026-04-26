import React from "react";
import "./BookHistory.css";

const BookHistory = () => {
  const books = [
    {
      id: 1,
      name: "The Hound of the Baskervilles",
      author: "Arthur Conan",
      borrowDate: "19-01-2025",
      returnDate: "28-01-2025",
      status: "Returned",
    },
    {
      id: 2,
      name: "Educated",
      author: "Tara Westover",
      borrowDate: "02-01-2025",
      returnDate: "05-01-2025",
      status: "Returned",
    },
    {
      id: 3,
      name: "The Hound of the Baskervilles",
      author: "Arthur Conan",
      borrowDate: "20-12-2024",
      returnDate: "22-12-2024",
      status: "Returned",
    },
    {
      id: 4,
      name: "Big Little Lies",
      author: "Liane Moriarty",
      borrowDate: "07-12-2024",
      returnDate: "15-12-2024",
      status: "Returned",
    },
    {
      id: 5,
      name: "Mindset: Psychology of Success",
      author: "Carol S. Dweck",
      borrowDate: "23-11-2024",
      returnDate: "28-11-2024",
      status: "Returned",
    },
    {
      id: 6,
      name: "The Woman in the Window",
      author: "A.J. Finn",
      borrowDate: "10-10-2024",
      returnDate: "Book Lost",
      status: "Lost",
    },
    {
      id: 7,
      name: "The Silent Patient",
      author: "Alex Michaelides",
      borrowDate: "19-09-2024",
      returnDate: "27-09-2024",
      status: "Returned",
    },
    {
      id: 8,
      name: "Gone Girl",
      author: "Gillian Flynn",
      borrowDate: "16-08-2024",
      returnDate: "02-09-2024",
      status: "Returned",
    },
    {
      id: 9,
      name: "And Then There Were None",
      author: "Agatha Christie",
      borrowDate: "19-07-2024",
      returnDate: "Book Lost",
      status: "Lost",
    },
  ];

  return (
    <div className="book-history-container">
      {/* <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h1>Book Leaf</h1>
        </div>
        <nav className="nav">
          <button>Home</button>
          <button>Catalog</button>
          <button>Lend a Book</button>
          <button>My Profile</button>
        </nav>
      </header> */}

      <div className="table-wrapper">
        <h2>Book History</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.borrowDate}</td>
                <td className={book.status === "Lost" ? "lost" : ""}>{book.returnDate}</td>
                <td className={book.status === "Lost" ? "status-lost" : "status-returned"}>{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookHistory;
