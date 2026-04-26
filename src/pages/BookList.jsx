import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks(); // Updated function name
      setBooks(data); // No need for res.data since getBooks already returns data
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks(); // Refresh list after deletion
    } catch (err) {
      console.error("Failed to delete book:", err);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.bookName}</strong> by {book.bookAuthor}
              <button onClick={() => handleDelete(book.id)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
