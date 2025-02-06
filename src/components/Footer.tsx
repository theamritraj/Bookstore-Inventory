import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>© {new Date().getFullYear()} All Rights Reserved Amrit Raj .</p>
    </footer>
  );
};

export default Footer;
