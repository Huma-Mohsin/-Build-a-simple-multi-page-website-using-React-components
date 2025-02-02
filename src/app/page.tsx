"use client";
import Image from "next/image";
import React, { useState, useEffect, CSSProperties } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/LAndingpage/image1.avif",
    "/LAndingpage/image2.jpg",
    "/LAndingpage/image3.jpg",
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  },  [goToNextSlide]);

  return (
    <div style={mainContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Welcome to Travel Hub</h1>
        <p style={heroDescriptionStyle}>
          Your gateway to unforgettable adventures! Explore stunning destinations, plan your dream vacations, and embark on journeys that create memories for a lifetime.
        </p>
      </section>

      {/* Carousel Section */}
      <section style={carouselSectionStyle}>
        <button onClick={goToPrevSlide} style={carouselButtonStyle}>&lt;</button>
        <div style={carouselImageWrapperStyle}>
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}  width={500}  height={500} style={carouselImageStyle} />
        </div>
        <button onClick={goToNextSlide} style={carouselButtonStyle}>&gt;</button>
      </section>

      {/* Content Section */}
      <section style={contentSectionStyle}>
        <h2 style={contentTitleStyle}>Why Travel Hub?</h2>
        <p style={contentDescriptionStyle}>
          At Travel Hub, we believe in creating unforgettable experiences. Our platform makes it easy for you to discover the best travel destinations, book trips, and access helpful travel tips and guides.
        </p>
      </section>
    </div>
  );
}

// Main Container - Full Screen
const mainContainerStyle: CSSProperties = {
  width: "100vw",
  height: "100vh", // Full screen height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#2C3E50", // Dark blue-gray for a professional look
};

// Hero Section
const heroSectionStyle: CSSProperties = {
  textAlign: "center",
  color: "#ECF0F1",
  padding: "60px 30px",
};

const heroTitleStyle: CSSProperties = {
  fontSize: "40px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "700",
  color: "#ECF0F1",
};

const heroDescriptionStyle: CSSProperties = {
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  color: "#BDC3C7",
};

// Carousel Section - Full Width
const carouselSectionStyle: CSSProperties = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#34495B", // Darker shade for depth
  padding: "20px 0",
};

const carouselImageWrapperStyle: CSSProperties = {
  width: "80%",
  height: "550px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
};

const carouselImageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const carouselButtonStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent buttons
  border: "none",
  fontSize: "40px",
  color: "#ECF0F1",
  cursor: "pointer",
  padding: "10px 20px",
};

// Content Section
const contentSectionStyle: CSSProperties = {
  textAlign: "center",
  padding: "40px 20px",
  backgroundColor: "#2C3E50",
 
};

const contentTitleStyle: CSSProperties = {
  fontSize: "28px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  color: "white",
};

const contentDescriptionStyle: CSSProperties = {
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  color: "white",
};
