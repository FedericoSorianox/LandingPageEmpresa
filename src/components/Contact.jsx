import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-20 relative overflow-hidden bg-brand-light">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-purple/5 to-brand-cyan/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-2xl bg-white text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6 text-brand-text">
                            ¡Mensaje <span className="text-gradient">Enviado!</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Gracias por contactarme. Te responderé a la brevedad posible a tu correo.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gradient-to-r from-brand-purple to-brand-cyan py-3 px-8 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02] transition-all"
                        >
                            Volver al formulario
                        </button>
                    </div>
                </div>
            </section>
        );
    }

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
                                name="name"
                                placeholder="Tu Nombre"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu Email"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="¿En qué puedo ayudarte?"
                                rows="4"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-800"
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan py-4 rounded-xl font-bold text-lg text-white hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
