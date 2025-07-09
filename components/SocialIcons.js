import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function SocialIcons ()  {
  
  return (
    <div>
       
        <a
        href="https://www.facebook.com/GamingStudioDamana"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
         <FaFacebookF className=" icons facebook" />
      </a>

      <a
        href="https://twitter.com/GSDamana"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
         <FaTwitter className="icons twitter" />
      </a>

      <a
        href=" https://www.instagram.com/gamingstudiodamana/"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
         <FaInstagram  className="icons instagram" />
      </a>
     
      <a
        href=" https://www.youtube.com/@CryptoMN_24"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
       <FaYoutube className="icons youtube" />
      </a>
      <a
        href="https://discord.gg/8DZxZBrC"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
        <GoMail className="icons go"/>
      </a>
       <a
        href="https://discord.gg/8DZxZBrC"
        target="_blank"
        rel="noopener noreferrer" // Security and performance
      >
       <FaDiscord  className="icons discord" />
      </a>
    
    </div>
  );
};

export default SocialIcons;

