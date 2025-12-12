import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="py-10 border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center gap-2 mb-6">
                    <Logo className="w-8 h-8" />
                    <h3 className="text-2xl font-display font-bold text-brand-text"><span className="text-gradient-brand">Vanguard Lab</span></h3>
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="p-3 bg-white rounded-full text-gray-600 hover:text-brand-purple hover:bg-white shadow-sm hover:shadow-md transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-gray-600 hover:text-brand-purple hover:bg-white shadow-sm hover:shadow-md transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-gray-600 hover:text-brand-purple hover:bg-white shadow-sm hover:shadow-md transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Vanguard Lab. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
