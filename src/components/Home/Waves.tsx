import React from 'react';
import "./Waves.css"

const Waves : React.FC = () => {

return (
    <div>
        <svg className = "wave" viewBox="0 0 360 286" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M302 62.79C197.97 106.854 72.5 45 1 45V287H360.5V45C360.5 45 344 45 302 62.79Z" fill="url(#paint0_linear)"/>
            </g>
            <g filter="url(#filter1_d)">
                <path d="M361.5 139C209.871 119.175 147.637 12 -0.5 12L-0.500061 284.936H361.5V139Z" fill="url(#paint1_linear)"/>
            </g>
            <g filter="url(#filter2_d)">
                <path d="M172.5 179.5C93.5 150 69.8262 248.36 77.5 288.5H359V196.5C359 196.5 245.369 206.711 172.5 179.5Z" fill="url(#paint2_linear)"/>
            </g>
            <defs>
                <filter id="filter0_d" x="-13" y="33" width="389.5" height="272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_d" x="-14.5001" y="0" width="392" height="302.936" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter2_d" x="62.1323" y="162.066" width="312.868" height="144.434" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="303.205" y1="166" x2="-127.262" y2="139.567" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE0B1"/>
                    <stop offset="0.480556" stop-color="#FFC09F"/>
                    <stop offset="1" stop-color="#F88F8F"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="303.806" y1="148.468" x2="-129.984" y2="124.686" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE0B1"/>
                    <stop offset="0.480556" stop-color="#FFC09F"/>
                    <stop offset="1" stop-color="#F88F8F"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="313.918" y1="231.283" x2="-22.553" y2="196.903" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE0B1"/>
                    <stop offset="0.480556" stop-color="#FFC09F"/>
                    <stop offset="1" stop-color="#F88F8F"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
);

}

export default Waves;