// app/projects/page.tsx

import React from 'react';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100" id="project">
            <div className="container mx-auto px-4">
                <div className="main-text text-center mb-8">
                    <h2 className="text-3xl font-bold">
                        Latest <span className="text-purple-600">Projects</span>
                    </h2>
                </div>

                <div className="portfolio">
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold">Analog Clock</h3>
                        <p className="text-gray-700">
                            Project description: 
                            <br />
                            <strong>HTML:</strong> Structure clock with divs for face, hour, minute, second hands.
                            <br />
                            <strong>CSS:</strong> Style clock is appearance, size, colors, hand lengths.
                            <br />
                            <strong>JavaScript:</strong> Get current time, calculate hand angles, update hand positions using transform: rotate() every second. Key to dynamic clock behavior.
                        </p>
                        <a href="https://github.com/fatimaRiaz531/analogclock-HTML-CSS-JS.git" className="text-blue-500 hover:underline">GitHub Repository</a>
                        <Image
                         src="/clock.png"
                          alt="Analog Clock"
                          width={200}
                          height={200}
                           className="w-32 h-auto rounded-lg " />
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold">Calculator</h3>
                        <p className="text-gray-700">
                            Project Description: 
                            <br />
                            Built a functional calculator from scratch using HTML, CSS, and JavaScript. It is a small step, but a giant leap in my coding journey!
                            <br />
                            Excited to share my new calculator project! I focused on creating a clean interface with HTML and CSS, while the JavaScript handles the calculations and button logic.
                            <br />
                            This calculator project allowed me to practice HTML, CSS, and JavaScript while building a practical tool. I am proud of the outcome!
                        </p>
                        <a href="https://github.com/fatimaRiaz531/simple-calculator" className="text-blue-500 hover:underline">GitHub Repository</a>
                        <Image
                         src="/calculator.png" 
                         alt="calculator" 
                         width={200}
                         height={200}
                         className="w-32 h-auto rounded-lg " />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;