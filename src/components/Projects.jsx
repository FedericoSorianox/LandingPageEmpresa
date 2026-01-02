import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2, X } from 'lucide-react';

const Projects = () => {
    const [selectedVideo, setSelectedVideo] = React.useState(null);

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

                                {project.cta === "Ver Demo" && project.videoUrl ? (
                                    <button
                                        onClick={() => setSelectedVideo(project.videoUrl)}
                                        className="inline-block px-8 py-3 bg-brand-purple text-white hover:bg-brand-purple/90 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-purple/20"
                                    >
                                        {project.cta}
                                    </button>
                                ) : (
                                    <a
                                        href={project.ctaLink || "#contact"}
                                        className="inline-block px-8 py-3 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-full font-semibold transition-all"
                                    >
                                        {project.cta}
                                    </a>
                                )}
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
            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <video
                                src={selectedVideo}
                                className="w-full h-full"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
