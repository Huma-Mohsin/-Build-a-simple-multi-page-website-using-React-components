import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2025 Travel Blog | Designed with passion</p>
    </footer>
  );
};

// ✅ Inline CSS Styles
const footerStyle: React.CSSProperties = {
  width: "100%",  
  padding: "20px 10px",  
  backgroundColor: "#2C3E50", // Dark footer for contrast  
  color: "#ECF0F1", // Light text for readability  
  textAlign: "center",  
  position: "relative",  
  bottom: "0",
};

// ✅ Responsive Design (Using a Function for Media Query)
const textStyle: React.CSSProperties = {
  fontSize: "16px",
  fontFamily: "Poppins, sans-serif",
};

// ✅ Media Query (Responsive Footer)
const mediaQuery = `
  @media (max-width: 600px) {
    footer {
      padding: 15px 5px;
      font-size: 14px;
    }
  }
`;

// Inject the media query into the document
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = mediaQuery;
  document.head.appendChild(styleSheet);
}

export default Footer;
