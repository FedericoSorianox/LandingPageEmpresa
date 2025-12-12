import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
    return (
        <div className="min-h-screen bg-brand-dark overflow-x-hidden">
            {/* Simple Nav Overlay */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-gray-200 bg-white/80">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 text-2xl font-display font-bold text-brand-text">
                        <Logo className="h-10 w-10" />
                        <span className="text-gradient-brand">Vanguard Lab</span>
                    </a>
                    <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <li><a href="#services" className="hover:text-brand-purple transition-colors">Servicios</a></li>
                        <li><a href="#projects" className="hover:text-brand-purple transition-colors">Proyectos</a></li>
                        <li><a href="#contact" className="hover:text-brand-purple transition-colors">Contacto</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <Hero />
                <Services />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
