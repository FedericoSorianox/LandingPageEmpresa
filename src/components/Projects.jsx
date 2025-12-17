import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2 } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-center mb-20 text-brand-text">
                    Casos de <span className="text-gradient">Éxito</span>
                </h2>

                <div className="space-y-32">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-6 text-brand-text">{project.title}</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.ctaLink || "#contact"}
                                    className="inline-block px-8 py-3 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-full font-semibold transition-all"
                                >
                                    {project.cta}
                                </a>
                            </div>

                            {/* Visual Placeholder */}
                            <div className="flex-1 w-full">
                                <div className="relative group perspective-1000">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-500" />

                                    <div className="flex flex-col gap-6">
                                        {project.images.map((img, i) => {
                                            const isObj = typeof img === 'object' && img !== null;
                                            const src = isObj ? img.src : img;
                                            const customClass = isObj ? img.className : '';

                                            return (
                                                <div key={i} className={`relative rounded-2xl shadow-lg border border-gray-100 overflow-hidden group/img ${isObj ? 'bg-transparent border-none shadow-none' : ''}`}>
                                                    <img
                                                        src={src}
                                                        alt={`${project.title} screenshot ${i + 1}`}
                                                        className={`w-full h-auto object-cover transform transition-transform duration-700 group-hover/img:scale-105 ${customClass}`}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
