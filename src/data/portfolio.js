import { MessageSquare, LineChart, Layout, Bot } from 'lucide-react';

import chatbotChat from '../assets/chatbot-chat.png';
import adminDashboard from '../assets/admin-dashboard.png';

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
            ctaLink: "#contact",
            images: [{ src: chatbotChat, className: "w-full mx-auto drop-shadow-2xl rounded-[2.5rem]" }]
        },
        {
            id: 2,
            title: "Sistema de Gestión de Academias",
            category: "Gestión Total",
            description: "Gestión de academia o gimnasio con manejo de socios, pagos y productos.",
            features: [
                "Control total de socios activos e inactivos.",
                "Gestión de pagos y deudas pendientes.",
                "Inventario de productos y fiados."
            ],
            cta: "Ver Demo",
            images: [{ src: adminDashboard, className: "w-full mx-auto drop-shadow-2xl rounded-[2.5rem]" }]
        }
    ]
};
