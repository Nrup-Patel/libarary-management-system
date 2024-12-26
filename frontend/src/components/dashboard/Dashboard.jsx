import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

function Dashboard() {
  const cards = [
    {
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      alt: "Hollywood Sign on The Hill",
      title: "Book Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "/bookDetails",  // Add link to Book page
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
      alt: "Palm Springs Road",
      title: "Members Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "/memberDetails",  // Add link to Member page
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
      alt: "Los Angeles Skyscrapers",
      title: "Loan Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      link: "/loanDetails",  // Add link to Loan page
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
      alt: "Skyscrapers",
      title: "Book Search",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      link: "/booksearch",  // Add link to BookSearch page
    }
  ];

  return (
    <div className="w-screen flex flex-col items-center justify-center">
    <div className="row row-cols-1 row-cols-md-2 g-3 w-50">
      {cards.map((card, index) => (
        <div className="col" key={index}>
          <div className="card">
            <img
              src={card.image}
              className="card-img-top"
              alt={card.alt}
            />
            <div className="card-body w-full flex flex-col items-center justify-center gap-2">
              <h5 className="card-title text-3xl">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              {/* Add Link button here */}
              <Link to={card.link}>
                <button className="btn btn-primary">Go to {card.title}</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Dashboard;
