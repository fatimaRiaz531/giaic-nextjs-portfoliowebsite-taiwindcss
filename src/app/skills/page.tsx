// app/skills/page.tsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaRegKeyboard } from 'react-icons/fa';

const SkillsPage = () => {
    return (
        <section className="py-10 bg-gray-100" id="Skills">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">
                    My <span className="text-purple-600">Skills</span>
                </h1>

                {/* Technical Skills Section */}
                <h1 className="text-2xl font-semibold text-center mb-6">Technical Skills</h1>
                <div className="space-y-6">
                    {[
                        { icon: <FaHtml5 className="text-4xl text-orange-600 mr-4" />, skill: 'HTML', percentage: '90%', color: 'bg-orange-600' },
                        { icon: <FaCss3Alt className="text-4xl text-blue-600 mr-4" />, skill: 'CSS', percentage: '85%', color: 'bg-blue-600' },
                        { icon: <FaJs className="text-4xl text-yellow-500 mr-4" />, skill: 'JavaScript', percentage: '75%', color: 'bg-yellow-500' },
                        { icon: <FaRegKeyboard className="text-4xl text-blue-500 mr-4" />, skill: 'TypeScript', percentage: '80%', color: 'bg-blue-500' },
                        { icon: <span className="text-4xl text-green-500 mr-4">🌐</span>, skill: 'Next.js', percentage: '50%', color: 'bg-green-500' },
                        { icon: <span className="text-4xl text-teal-500 mr-4">🌊</span>, skill: 'Tailwind CSS', percentage: '50%', color: 'bg-pink-400' },
                    ].map(({ icon, skill, percentage, color }) => (
                        <div className="flex items-center" key={skill}>
                            {icon}
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span>{skill}</span>
                                    <span>{percentage}</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2">
                                    <div className={`${color} h-2 rounded-full`} style={{ width: percentage }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional Skills Section */}
                <h1 className="text-2xl font-semibold text-center mb-6 mt-10">Professional Skills</h1>
                <div className="flex flex-wrap justify-center space-x-4">
                    {[
                        { skill: 'Creativity', percentage: '80%', pathClass: 'path-1' },
                        { skill: 'Communication', percentage: '65%', pathClass: 'path-2' },
                        { skill: 'Problem Solving', percentage: '55%', pathClass: 'path-3' },
                        { skill: 'Teamwork', percentage: '85%', pathClass: 'path-4' },
                    ].map(({ skill, percentage, pathClass }) => (
                        <div key={skill} className="radial-bar flex flex-col items-center mb-8 md:mb-10 lg:mb-12">
                            <svg x="0px" y="0px" viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                                <circle className="progress-bar stroke-current text-gray-300" cx="100" cy="100" r="80" strokeWidth="10"></circle>
                                <circle className={`path ${pathClass} stroke-current text-teal-500`} cx="100" cy="100" r="80" strokeWidth="10"></circle>
                            </svg>
                            <div className="percentage text-2xl font-semibold">{percentage}</div>
                            <div className="text">{skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;