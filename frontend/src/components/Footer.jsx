import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
       <footer className="footer p-3 m-0"  style={{
        padding: "15px 20px",
        display: "flex",
        justifyContent: "center",  // horizontal center
        alignItems: "center",      // vertical center
        gap: "20px",               // gap
        borderTop: "1px solid #dee2e6",
       
        flexWrap: "wrap",          //  wrap 
      }}>
          <span>© 2025 - {new Date().getFullYear()} Iconic Unity Group. All Rights Reserved.</span>

      {/* আইকনগুলোর মধ্যে gap */}
      <a href="#" className="text-dark">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a href="#" className="text-dark">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="#" className="text-dark">
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
       </footer>
           
    </>
  );
};

export default Footer;
