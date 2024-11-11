// app/contact/page.tsx

import React from "react";
const ContactPage = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                <div className="contact-text mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                    <p className="text-gray-400">
                        Have a project in mind or just want to connect? I am always excited
                        to discuss new opportunities and collaborations. Drop me an email
                        at <a href="mailto:fatimariaz531@gmail.com" className="text-blue-500">fatimariaz531@gmail.com</a> or fill out the form below. I will
                        respond promptly to help you bring your vision to life!
                    </p>
                    <div className="contact-list flex flex-col mt-4">
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-send text-blue-500 mr-2" />
                            <span>fatimariaz531@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <i className="bx bxs-phone text-blue-500 mr-2" />
                            <span>012345678</span>
                        </li>
                    </div>
                    <div className="contact-icons flex mt-4 gap-4">
                        <a href="#" aria-label="Facebook">
                            <i className="bx bxl-facebook-circle text-blue-500" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="bx bxl-instagram text-blue-500" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="bx bxl-twitter text-blue-500" />
                        </a>
                        <a href="https://www.linkedin.com/in/fatima-r-87a1472b5/" aria-label="LinkedIn">
                            <i className="bx bxl-linkedin text-blue-500" />
                        </a>
                    </div>
                </div>
                <div className="contact-form w-full md:w-1/2 lg:w-1/3 text-blue-700">
                    <form className="space-y-4"> {/* Replace with form handling mechanism */}
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            className="block w-full p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="block w-full p-3 mt-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Subject"
                            required
                            className="block w-full p-3 mt-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Enter Your Message"
                            required
                            className="block w-full p-3 mt-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <input
                            type="submit"
                            value="Submit"
                            className="block w-full p-3 mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-bold cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default ContactPage;