import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        mvn="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo-600 */}
                <stop offset="100%" stopColor="#06B6D4" /> {/* Cyan-500 */}
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* The V shape representing Vanguard */}
        <path
            d="M25 30 L50 75 L75 30"
            stroke="url(#logoGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Automation Circuit: Connected node extending from the V */}
        <path
            d="M75 30 L85 30 L85 45"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
        />
        <circle cx="85" cy="50" r="4" fill="url(#logoGradient)" />

        {/* Evolution/Growth: Upward arrow/chevron floating above/inside */}
        <path
            d="M35 50 L50 35 L65 50"
            stroke="url(#logoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
        />
    </svg>
);

export default Logo;
