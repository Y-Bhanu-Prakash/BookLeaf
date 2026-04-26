import React, { createContext, useState } from "react";

// Creating the book context
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  // State to manage books and borrowed history
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to lend a book
  const lendBook = (book) => {
    setBorrowedBooks([...borrowedBooks, { ...book, borrowedOn: new Date().toISOString() }]);
  };

  // Function to return a book
  const returnBook = (bookId) => {
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
  };

  return (
    <BookContext.Provider value={{ books, setBooks, borrowedBooks, lendBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;