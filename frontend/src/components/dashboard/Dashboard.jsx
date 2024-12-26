import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

function Dashboard() {
  const cards = [
    {
      image: "https://t3.ftcdn.net/jpg/06/19/10/66/240_F_619106612_5rZyJxq95LAHBrbugnKD2qZagwhlLh1y.jpg",
      alt: "Hollywood Sign on The Hill",
      title: "Book Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "/bookDetails",  // Add link to Book page
    },
    {
      image: "https://t3.ftcdn.net/jpg/06/07/41/96/240_F_607419661_nMcszyZE2Hl8DTJHIW2OlfEqvQ8GTSxO.jpg",
      alt: "Palm Springs Road",
      title: "Members Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      link: "/memberDetails",  // Add link to Member page
    },
    {
      image: "https://t3.ftcdn.net/jpg/03/52/53/30/240_F_352533000_VCnmMP1wfqJt95TwlzGkCBvx0nFNFqha.jpg",
      alt: "Los Angeles Skyscrapers",
      title: "Loan Details",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      link: "/loanDetails",  // Add link to Loan page
    },
    {
      image: "https://t4.ftcdn.net/jpg/09/17/67/27/240_F_917672787_bpLxP1DLtaxAOSkadwHikqHHS2zPUFfP.jpg",
      alt: "Skyscrapers",
      title: "Book Search",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      link: "/booksearch",  // Add link to BookSearch page
    }
  ];

  return (
    <div className="w-screen container flex flex-col items-center justify-center">
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {cards.map((card, index) => (
        <div className="col w-full" key={index}>
          <div className="card">
            <img
              src={card.image}
              className="card-img-top"
              alt={card.alt}
              style={{
                height: '400px',     // Fixed height
                width: '100%',       // Set width to fill the container
                objectFit: 'cover'   // Ensure image fills container without distortion
              }}
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
