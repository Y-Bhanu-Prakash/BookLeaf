import React, { useState } from "react";
import "./Home.css";

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

const books = [
  { id: 1, title: "React Key Concepts", author: "Maximilian Schwarzmüller", image: ReactKCI },
  { id: 2, title: "Programming with Java", author: "E. Balagurusamy", image: PWIJ },
  { id: 3, title: "Python Programming", author: "Reema Thareja", image: PIPI },
  { id: 4, title: "HTML, CSS and JS", author: "Laura Lemay", image: HTMLI },
  { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", image: KM5 },
  { id: 6, title: "Atonement", author: "Jonathan Cape", image: A6 },
  { id: 7, title: "Beloved", author: "Toni Morrison", image: B7 },
  { id: 8, title: "The Kite Runner", author: "Khaled Hosseini", image: TKR8 },
  { id: 9, title: "Of Mice and Men", author: "John Steinbeck", image: MAM9 },
  { id: 10, title: "Meditations", author: "Marcus Aurelius", image: M10 },
  { id: 11, title: "The Republic", author: "Plato", image: TR11 },
  { id: 12, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", image: RD12 },
  { id: 13, title: "The Lean Startup", author: "Eric Ries", image: TLS13 },
  { id: 14, title: "Pedagogy of the Oppressed", author: "Paulo Freire", image: POC14 },
  { id: 15, title: "Research Methods in Education", author: "Louis Cohen, Lawrence Manion, Keith Morrison", image: RM15 },
  { id: 16, title: "How People Learn: Brain, Mind, Experience, and School", author: "National Research Council", image: HPL16 },
  { id: 17, title: "In Cold Blood", author: "Truman Capote", image: ICB17 },
  { id: 18, title: "I'll Be Gone in the Dark", author: "Michelle McNamara", image: IBG18 },
  { id: 19, title: "Mindhunter: Inside the FBI’s Elite Serial Crime Unit", author: "John E. Douglas & Mark Olshaker", image: MIT19 },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
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
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-title">{book.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
