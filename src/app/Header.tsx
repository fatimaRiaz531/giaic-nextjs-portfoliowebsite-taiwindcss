 
import React from 'react';  
import Link from 'next/link';  
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for the menu icon  
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';  

const Header: React.FC = () => {  
    return (  
        <header className="flex justify-between py-4 px-4 bg-gray-800 text-white max-w-screen-2xl mx-auto items-center">  
            <Link href="/" className="logo text-4xl font-bold text-pink-600">FR.</Link>  

            <nav>  
                <ul className="hidden lg:flex space-x-5 py-4">  
                    <li>  
                        <Link href="/" className="mx-4 text-lg text-gray-300 hover:text-blue-400 active">Home</Link>  
                    </li>  
                    <li>  
                        <Link href="/about" className="mx-4 text-lg text-gray-300 hover:text-blue-400">About</Link>  
                    </li>  
                    <li>  
                        <Link href="/skills" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Skills</Link>  
                    </li>  
                    <li>  
                        <Link href="/services" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Services</Link>  
                    </li>  
                    <li>  
                        <Link href="/projects" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Projects</Link>  
                    </li>  
                    <li>  
                        <Link href="/contact" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Contact</Link>  
                    </li>  
                </ul>  

                {/* Mobile Menu Trigger */}  
                <Sheet>  
                    <SheetTrigger className="lg:hidden"><Menu className="text-white" />  
                    </SheetTrigger>  
                    <SheetContent>  
                        <ul className="space-y-4 py-4">  
                            <li>  
                                <Link href="/" className="block text-lg text-gray-600 hover:text-blue-400">Home</Link>  
                            </li>  
                            <li>  
                                <Link href="/about" className="block text-lg text-gray-600 hover:text-blue-400">About</Link>  
                            </li>  
                            <li>  
                                <Link href="/skills" className="block text-lg text-gray-600 hover:text-blue-400">Skills</Link>  
                            </li>  
                            <li>  
                                <Link href="/services" className="block text-lg text-gray-600 hover:text-blue-400">Services</Link>  
                            </li>  
                            <li>  
                                <Link href="/projects" className="block text-lg text-gray-600 hover:text-blue-400">Projects</Link>  
                            </li>  
                            <li>  
                                <Link href="/contact" className="block text-lg text-gray-600 hover:text-blue-400">Contact</Link>  
                            </li>  
                        </ul>  
                    </SheetContent>  
                </Sheet>  
            </nav>  
        </header>  
    );  
};  

export default Header;