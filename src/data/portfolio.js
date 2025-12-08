import { MessageSquare, LineChart, Layout, Bot } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "DevStudio",
        headline: "Potencia tu Negocio con Software Inteligente",
        subheadline: "Freelancer especializado en Chatbots de WhatsApp con IA, Sistemas Financieros a medida y Automatización de Procesos.",
        contactEmail: "contacto@devstudio.com",
        whatsapp: "+59899123456" // Update with real number
    },
    services: [
        {
            title: "Chatbots WhatsApp IA",
            description: "Asistentes virtuales que entienden el contexto de tu empresa, responden a clientes 24/7 y automatizan ventas directamente en WhatsApp.",
            icon: MessageSquare
        },
        {
            title: "Sistemas Financieros",
            description: "Visualiza tus finanzas en tiempo real. Carga gastos vía Telegram, PDF o Excel y controla todo desde un dashboard personalizado conectado a Google Sheets.",
            icon: LineChart
        },
        {
            title: "Landing Pages Modernas",
            description: "Diseño web de alto impacto, optimizado para conversión y velocidad. Estética premium que diferencia tu marca de la competencia.",
            icon: Layout
        },
        {
            title: "Automatización n8n",
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
                "Responde preguntas frecuentes con contexto real.",
                "Escalable para cualquier tamaño de empresa.",
                "Integración directa con tu número de WhatsApp Business."
            ],
            cta: "Me interesa esto"
        },
        {
            id: 2,
            title: "Dashboard de Finanzas Personales",
            category: "Gestión Total",
            description: "Olvídate de las apps complejas. Tu contabilidad simplificada al máximo, alimentada desde donde estés.",
            features: [
                "Carga datos enviando un mensaje por Telegram.",
                "Sube tus estados de cuenta en PDF o Excel.",
                "Todo centralizado en Google Sheets y visualizado en web."
            ],
            cta: "Ver Demo"
        }
    ]
};
