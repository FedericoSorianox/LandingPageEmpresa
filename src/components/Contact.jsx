import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado (Demo)');
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-brand-light">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-purple/5 to-brand-cyan/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-2xl bg-white">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-brand-text">
                        ¿Listo para mejorar <span className="text-gradient">tu sistema?</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
                        Hablemos sobre tu proyecto. Ya sea una simple landing page o un sistema complejo de automatización, tengo la solución.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                        <div>
                            <input
                                type="text"
                                placeholder="Tu Nombre"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Tu Email"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="¿En qué puedo ayudarte?"
                                rows="4"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan py-4 rounded-xl font-bold text-lg text-white hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02] transition-all"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
