import axios from "axios";

// Use environment variable for flexibility
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8081/books";

// Fetch all books
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // Return empty array on failure
  }
};

// Add a new book
export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    return null; // Return null on failure
  }
};

// Lend a book to a user
export const lendBook = async (bookId, userId) => {
  try {
    const response = await axios.post(`${API_URL}/lend`, { bookId, userId });
    return response.data;
  } catch (error) {
    console.error("Error lending book:", error);
    throw error;
  }
};

// Return a book from a user
export const returnBook = async (bookId, userId) => {
  try {
    const response = await axios.post(`${API_URL}/return`, { bookId, userId });
    return response.data;
  } catch (error) {
    console.error("Error returning book:", error);
    throw error;
  }
};
