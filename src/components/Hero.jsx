import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import heroImage from '../assets/hero-image.jpeg';

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white to-brand-light">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-brand-text">
                                {personal.headline.split('Software Inteligente')[0]}
                                <span className="text-gradient">Software Inteligente</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10"
                        >
                            {personal.subheadline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-brand-purple/25 transition-all transform hover:-translate-y-1 text-center">
                                Agendar Consultoría
                            </a>
                            <a href="#projects" className="px-8 py-4 border border-gray-300 rounded-full font-bold text-lg text-gray-700 hover:bg-gray-50 transition-all text-center">
                                Ver Portafolio
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-20 blur-2xl rounded-[30px]" />
                            <img
                                src={heroImage}
                                alt="Intelligent Software Visualization"
                                className="relative rounded-[30px] shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
