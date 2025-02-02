import Image from "next/image";
import React from "react";

// ✅ Destination data
const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "/home/santorini.jpg",
    description: "Famous for its white-washed buildings, blue domes, and stunning sunsets over the Aegean Sea.",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "/home/kyoto.jpg",
    description: "A cultural treasure filled with ancient temples, cherry blossoms, and breathtaking landscapes.",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image: "/home/machu-picchu.jpg",
    description: "A historic Incan citadel nestled in the Andes, offering incredible views and mystery.",
  },
  {
    name: "Venice",
    country: "Italy",
    image: "/home/venice.jpg",
    description: "Romantic canals, gondola rides, and Renaissance architecture make this city a must-visit.",
  },
  {
    name: "Great Barrier Reef",
    country: "Australia",
    image: "/home/great-barrier-reef.jpg",
    description: "The world's largest coral reef system, offering snorkeling, diving, and marine biodiversity.",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "/home/bali.jpg",
    description: "A tropical paradise known for its rice terraces, beaches, temples, and yoga retreats.",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "/home/dubai.jpg",
    description: "Futuristic skyscrapers, luxury shopping, and desert safaris define this modern oasis.",
  },
  {
    name: "Paris",
    country: "France",
    image: "/home/paris.jpg",
    description: "The city of love, home to the Eiffel Tower, Louvre Museum, and world-class cuisine.",
  },
  {
    name: "Cappadocia",
    country: "Turkey",
    image: "/home/cappadocia.jpg",
    description: "Famous for hot air balloon rides over unique rock formations and underground cities.",
  },
  {
    name: "New York City",
    country: "USA",
    image: "/home/nyc.jpg",
    description: "The city that never sleeps, with iconic landmarks like Times Square and Central Park.",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    image: "/home/cape-town.jpg",
    description: "A scenic city with stunning mountains, beaches, and rich history.",
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "/home/rio.jpg",
    description: "Home to the famous Christ the Redeemer statue, beautiful beaches, and vibrant festivals.",
  },
];

const Destinations = () => {
  return (
    <div style={homeContainerStyle}>
      <h1 style={titleStyle}>Explore Breathtaking Travel Destinations</h1>
      <p style={subtitleStyle}>Discover the beauty, culture, and adventures each place has to offer.</p>

      {/* Destination Grid */}
      <div style={destinationGridStyle}>
        {destinations.map((destination, index) => (
          <div key={index} style={destinationCardStyle}>
            <Image src={destination.image} alt={destination.name} width={500} height={500} style={imageStyle} />
            <h2 style={destinationTitleStyle}>{destination.name}, {destination.country}</h2>
            <p style={descriptionStyle}>{destination.description}</p>
          </div>
        ))}
      </div>

      {/* Media Query */}
      <style>
        {`
          @media (max-width: 768px) {
            .destination-grid {
              grid-template-columns: 1fr;
            }
            h1 {
              font-size: 24px;
            }
            p {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

// ✅ Inline CSS Styles
const homeContainerStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#2C3E50",
  padding: "40px 20px",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  fontSize: "32px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "700",
  color: "white",
  marginBottom: "10px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  color: "white",
  marginBottom: "30px",
};

const destinationGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
};

const destinationCardStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  cursor: "pointer",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
};

const destinationTitleStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "600",
  fontFamily: "Poppins, sans-serif",
  marginTop: "10px",
  color: "#2C3E50",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "16px",
  fontFamily: "Roboto, sans-serif",
  color: "#666",
};

export default Destinations;
