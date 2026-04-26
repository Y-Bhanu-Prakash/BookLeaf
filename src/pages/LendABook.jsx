import React, { useState } from "react";
import "./Lend.css"; // Ensure you have this file for styling


// Importing book images
import ReactKCI from "../images/REACT.jpg";
import PWIJ from "../images/PWJ.jpg";
import PIPI from "../images/PIP.webp";
import HTMLI from "../images/HTML.jpg";
import KM5 from "../images/KM5.png";
import A6 from "../images/A6.png";
import B7 from "../images/B7.png";
import TKR8 from "../images/TKR8.png";
import MAM9 from "../images/MAM9.png";
import M10 from "../images/M10.png";
import TR11 from "../images/TR11.png";
import RD12 from "../images/RD12.png";
import TLS13 from "../images/TLS13.png";
import POC14 from "../images/POC14.png";
import RM15 from "../images/RM15.png";
import HPL16 from "../images/HPL16.png";
import ICB17 from "../images/ICB17.png";
import IBG18 from "../images/IBG18.png";
import MIT19 from "../images/MIT19.png";

// Book data with Year of Publication
const books = [
  { id: 1, title: "React Key Concepts", author: "Maximilian Schwarzmüller", year: "2020", image: ReactKCI, description: "Learn the fundamentals of React with practical examples.", content: "This book covers React's core concepts and helps you build real-world applications." },
  { id: 2, title: "Programming with Java", author: "E. Balagurusamy", year: "2018", image: PWIJ, description: "Master Java programming with this comprehensive guide.", content: "A great book for beginners to understand the Java language with hands-on projects." },
  { id: 3, title: "Python Programming", author: "Reema Thareja", year: "2021", image: PIPI, description: "Dive into Python programming from beginner to expert.", content: "It provides in-depth insights into Python, from basic syntax to advanced concepts." },
  { id: 4, title: "HTML, CSS and JS", author: "Laura Lemay", year: "2019", image: HTMLI, description: "A complete guide to web development with HTML, CSS, and JavaScript.", content: "A perfect resource for front-end developers to get hands-on experience with web technologies." },
  { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960", image: KM5, description: "A novel about the injustices of the American South.", content: "A Pulitzer Prize-winning novel that explores racial injustice and moral growth." },
  { id: 6, title: "Atonement", author: "Jonathan Cape", year: "2001", image: A6, description: "A tragic love story during World War II.", content: "A heart-wrenching story about love, guilt, and redemption set against the backdrop of war." },
  { id: 7, title: "Beloved", author: "Toni Morrison", year: "1987", image: B7, description: "A powerful narrative of slavery and freedom.", content: "An acclaimed novel that examines the horrors of slavery and the need for personal freedom." },
  { id: 8, title: "The Kite Runner", author: "Khaled Hosseini", year: "2003", image: TKR8, description: "A tale of friendship and redemption in Afghanistan.", content: "A moving story about loyalty, forgiveness, and the consequences of betrayal." },
  { id: 9, title: "Of Mice and Men", author: "John Steinbeck", year: "1937", image: MAM9, description: "A classic novel exploring dreams and friendship during the Great Depression.", content: "A tragic story about two displaced migrant workers who struggle to make a living during the Great Depression." },
  { id: 10, title: "Meditations", author: "Marcus Aurelius", year: "180", image: M10, description: "Philosophical reflections from the Roman emperor.", content: "A series of personal writings by the Roman emperor, providing insights on Stoic philosophy." },
  { id: 11, title: "The Republic", author: "Plato", year: "380 BC", image: TR11, description: "A philosophical work that discusses justice and the ideal state.", content: "Plato’s seminal work on political philosophy, ethics, and justice, outlining his vision of an ideal society." },
  { id: 12, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: "1997", image: RD12, description: "A guide to financial literacy and wealth-building strategies.", content: "A book that contrasts the mindset of the wealthy versus the poor and offers financial wisdom." },
  { id: 13, title: "The Lean Startup", author: "Eric Ries", year: "2011", image: TLS13, description: "A methodology for developing businesses and products efficiently.", content: "A guide to building businesses with fewer resources and greater chances of success." },
  { id: 14, title: "Pedagogy of the Oppressed", author: "Paulo Freire", year: "1970", image: POC14, description: "An important work on education and social justice.", content: "Freire’s theory of education that emphasizes dialogue, equality, and critical thinking." },
  { id: 15, title: "Research Methods in Education", author: "Louis Cohen, Lawrence Manion, Keith Morrison", year: "2017", image: RM15, description: "A comprehensive guide to research methodology in education.", content: "A thorough book covering both qualitative and quantitative research methods in education." },
  { id: 16, title: "How People Learn: Brain, Mind, Experience, and School", author: "National Research Council", year: "2000", image: HPL16, description: "Insights into cognitive science and how it relates to education.", content: "A look at how the brain processes information and how this affects teaching and learning." },
  { id: 17, title: "In Cold Blood", author: "Truman Capote", year: "1966", image: ICB17, description: "A true crime novel exploring the murder of a Kansas family.", content: "Capote’s in-depth investigation into a brutal murder, pioneering the true crime genre." },
  { id: 18, title: "I'll Be Gone in the Dark", author: "Michelle McNamara", year: "2018", image: IBG18, description: "A true crime exploration of the Golden State Killer.", content: "A gripping and tragic account of the hunt for the elusive Golden State Killer." },
  { id: 19, title: "Mindhunter: Inside the FBI’s Elite Serial Crime Unit", author: "John E. Douglas & Mark Olshaker", year: "1995", image: MIT19, description: "A behind-the-scenes look at the FBI's work on serial crimes.", content: "A fascinating exploration of the FBI’s Behavioral Science Unit and their work on solving serial crimes." }
];

const Lend = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLent, setIsLent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (book) => {
    setSelectedBook(book);
    setIsLent(false);
    setShowPopup(false);
  };

  const handleLend = () => {
    setIsLent(true);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedBook(null);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lend-container">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>The book is successfully chosen!</h3>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {selectedBook ? (
        <div className="selected-book">
          <img
            src={selectedBook.image}
            alt={selectedBook.title}
            className="book-image"
            style={{ width: "18vw", height: "auto" }}
          />
          <div className="book-info">
            <h2>Book Name: {selectedBook.title}</h2>
            <h3>Author: {selectedBook.author}</h3>
            <h3>Year of Publication: 2021</h3>
            <h3>Description:</h3>
            <p>{selectedBook.description}</p>
            <h3>About the Book:</h3>
            <p>{selectedBook.content}</p>
            <button className="lend-btn" onClick={handleLend} disabled={isLent}>
              {isLent ? "Already Lent" : "Lend"}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search your favourite book"
              className="search-bar"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa fa-search search-icon"></i>
          </div>

          <div className="book-list">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-card"
                onClick={() => handleClick(book)}
              >
                <img src={book.image} alt={book.title} />
                <div className="book-title">{book.title}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Lend;
