import React from "react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="20%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#A9A9A9" />
          <stop offset="60%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#808080" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        <filter id="silverBevel" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="20"
            lightingColor="#white"
            result="specOut"
          >
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite
            in="SourceGraphic"
            in2="specOut"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litGraphic"
          />
        </filter>
      </defs>
      
      <g filter="url(#silverBevel)">
        {/* Angel Wings */}
        <path
          d="M30 45C20 40 10 45 5 55C10 60 20 58 30 55C25 65 15 70 10 75C20 75 30 70 35 60C35 70 30 80 25 85C40 80 45 65 45 50"
          fill="url(#silverGradient)"
        />
        <path
          d="M70 45C80 40 90 45 95 55C90 60 80 58 70 55C75 65 85 70 90 75C80 75 70 70 65 60C65 70 70 80 75 85C60 80 55 65 55 50"
          fill="url(#silverGradient)"
        />

        {/* Sun */}
        <circle cx="50" cy="35" r="12" fill="url(#silverGradient)" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="48"
            y="18"
            width="4"
            height="6"
            rx="2"
            fill="url(#silverGradient)"
            transform={`rotate(${i * 45} 50 35)`}
          />
        ))}

        {/* Moon */}
        <path
          d="M42 35C42 30.5817 45.5817 27 50 27C46 27 43 30 43 35C43 40 46 43 50 43C45.5817 43 42 39.4183 42 35Z"
          fill="#E5E7EB"
          opacity="0.8"
        />

        {/* Star in center */}
        <path
          d="M50 28L52 33H57L53 36L54.5 41L50 38L45.5 41L47 36L43 33H48L50 28Z"
          fill="white"
        />

        {/* 7 Stars below */}
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M${20 + i * 10} 90 L${22 + i * 10} 93 H${25 + i * 10} L${23 + i * 10} 95 L${24 + i * 10} 98 L${20 + i * 10} 96 L${16 + i * 10} 98 L${17 + i * 10} 95 L${15 + i * 10} 93 H${18 + i * 10} Z`}
            fill="url(#silverGradient)"
          />
        ))}
      </g>
    </svg>
  );
}
