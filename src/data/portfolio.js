import { MessageSquare, LineChart, Layout, Bot } from 'lucide-react';

import chatbotChat from '../assets/chatbot-chat.png';

export const portfolioData = {
    personal: {
        name: "Vanguard Lab",
        headline: "Potencia tu Negocio con Software Inteligente",
        subheadline: "Automatiza tus ventas y organiza tus finanzas sin esfuerzo",
        contactEmail: "contacto@gmail.com",
        whatsapp: "+59892506506"
    },
    services: [
        {
            title: "Chatbots WhatsApp IA",
            description: "Asistentes virtuales que entienden el contexto de tu empresa, responden a clientes 24/7 y automatizan ventas directamente en WhatsApp.",
            icon: MessageSquare
        },
        {
            title: "Sistemas Financieros",
            description: "Visualiza tus finanzas en tiempo real. Control de Gastos Empresarial",
            icon: LineChart
        },
        {
            title: "Landing Pages Modernas",
            description: "Diseño web de alto impacto, optimizado para conversión y velocidad. Estética premium que diferencia tu marca de la competencia.",
            icon: Layout
        },
        {
            title: "Automatización de aplicaciones",
            description: "Conecta tus aplicaciones favoritas y crea flujos de trabajo automáticos para ahorrar horas de tareas repetitivas.",
            icon: Bot
        }
    ],
    projects: [
        {
            id: 1,
            title: "Chatbot Inteligente para PyMEs",
            category: "Producto Destacado",
            description: "Un sistema robusto que transforma la atención al cliente. No es solo un bot de respuestas pregrabadas, es una IA entrenada con tu información.",
            features: [
                "Atención inmediata: Responde a tus clientes en 0 segundos, a cualquier hora.",
                "Cero respuestas robóticas: Tu cliente sentirá que habla con una persona real.",
                "Ventas automáticas: Se conecta a tu WhatsApp Business para agendar citas o vender productos sin que tú muevas un dedo."
            ],
            cta: "Quiero automatizar mis ventas",
            images: [{ src: chatbotChat, className: "w-full mx-auto drop-shadow-2xl rounded-[2.5rem]" }]
        },
        {
            id: 2,
            title: "Dashboard de Finanzas",
            category: "Gestión Total",
            description: "Olvídate de las apps complejas. Tu contabilidad simplificada al máximo, alimentada desde donde estés.",
            features: [
                "Carga datos enviando un mensaje por Telegram.",
                "Sube tus estados de cuenta en PDF o Excel.",
                "Todo centralizado y visualizado en web."
            ],
            cta: "Ver Demo",
            images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"]
        }
    ]
};
