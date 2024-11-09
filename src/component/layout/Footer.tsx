import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p className="text-gray-400 text-center md:text-left">
            Have a project in mind or just want to connect? I am always excited
            to discuss new opportunities and collaborations. Drop me an email
            at <a href="mailto:fatimariaz531@gmail.com" className="text-blue-500">fatimariaz531@gmail.com</a>.
          </p>
        </div>
        <div className="last-text text-center mt-8 md:mt-0">
          <p>Developed with best efforts by Fatima &copy; 2024</p>
        </div>
      </div>
      <a
        href="#"
        className="top fixed right-0 bottom-0 mr-4 mb-4 bg-blue-500 hover:bg-blue-700 rounded-full p-2 hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <i className="bx bx-up-arrow-alt text-white" /> {/* Up arrow icon */}
      </a>
    </footer>
  );
};

export default Footer;