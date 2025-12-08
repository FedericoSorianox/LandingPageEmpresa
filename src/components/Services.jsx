import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-center mb-16 text-brand-text">
                    Soluciones <span className="text-gradient">a Medida</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioData.services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="mb-6 p-4 bg-brand-purple/5 rounded-xl w-fit group-hover:bg-brand-purple/20 transition-colors">
                                    <Icon className="w-8 h-8 text-brand-purple" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-brand-text">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
