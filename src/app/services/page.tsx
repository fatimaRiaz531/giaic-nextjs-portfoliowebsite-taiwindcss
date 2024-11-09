// app/services/page.tsx

import {  FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { FaRegKeyboard } from 'react-icons/fa';

const ServicesPage = () => {
    return (
        <section className="py-10 bg-gray-100" id="services">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <span className="text-purple-600">My</span> Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaRegKeyboard className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">TypeScript Expert</h2>
                        <p className="text-gray-600 mb-4">
                            I am a TypeScript expert proficient in harnessing its static typing
                            and modern JavaScript features to build scalable and maintainable
                            applications. My expertise ensures robust error detection, improved
                            code quality, and seamless integration across diverse development environments.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaJs className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">JavaScript Expert</h2>
                        <p className="text-gray-600 mb-4">
                            As a JavaScript expert, I specialize in building dynamic and interactive
                            web applications. With in-depth knowledge of JavaScript frameworks like
                            React and Node.js, I deliver efficient solutions that optimize performance
                            and enhance user experiences across platforms.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaHtml5 className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">HTML Expert</h2>
                        <p className="text-gray-600 mb-4">
                            I have expertise in CSS and Figma, allowing me to create visually
                            appealing and user-friendly web applications. My CSS skills ensure
                            precise, responsive designs, while Figma enables me to prototype
                            and iterate on user interfaces effectively. This combination
                            ensures seamless and intuitive user experiences.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaCss3Alt className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">CSS Expert</h2>
                        <p className="text-gray-600 mb-4">
                            As a CSS expert, I excel in creating visually stunning and responsive
                            designs. With a strong grasp of layout techniques, animations, and
                            preprocessors like Sass, I ensure consistency and elegance in user
                            interfaces, enhancing usability and brand identity.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;