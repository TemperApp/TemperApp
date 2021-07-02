import React from 'react';
import Settings from '../../engine/Settings';
import "./Waves.css"

const Waves : React.FC = () => {

  let colorWave1_1;
  let colorWave1_2;
  let colorWave1_3;
  let colorWave2_1;
  let colorWave2_2;
  let colorWave2_3;
  let colorWave3_1;
  let colorWave3_2;
  let colorWave3_3;
console.log(Settings.darkTheme())
  if(Settings.darkTheme()){
    colorWave1_1 = "#45CBC7"
    colorWave1_2 = "#2EA39B"
    colorWave1_3 = "#A3719D"
    colorWave2_1 = "#45CBC7"
    colorWave2_2 = "#2EA39B"
    colorWave2_3 = "#A3719D"
    colorWave3_1 = "#45CBC7"
    colorWave3_2 = "#2EA39B"
    colorWave3_3 = "#A3719D"
  }
  else{
    colorWave1_1 = "#FFE0B1"
    colorWave1_2 = "#FFC09F"
    colorWave1_3 = "#F88F8F"
    colorWave2_1 = "#FFE0B1"
    colorWave2_2 = "#FFC09F"
    colorWave2_3 = "#F88F8F"
    colorWave3_1 = "#FFE0B1"
    colorWave3_2 = "#FFC09F"
    colorWave3_3 = "#F88F8F"
  }


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
                <filter id="filter0_d" x="-13" y="33" width="389.5" height="272" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_d" x="-14.5001" y="0" width="392" height="302.936" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter2_d" x="62.1323" y="162.066" width="312.868" height="144.434" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="3"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="345.234" y1="84.9279" x2="83.7084" y2="-67.1134" gradientUnits="userSpaceOnUse">
                    <stop stopColor={colorWave1_1}/>
                    <stop offset="0.294083" stopColor={colorWave1_2}/>
                    <stop offset="1" stopColor={colorWave1_3}/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="517.95" y1="248.239" x2="-25.3662" y2="84.5014" gradientUnits="userSpaceOnUse">
                    <stop stopColor={colorWave2_1}/>
                    <stop offset="0.294083" stopColor={colorWave2_2}/>
                    <stop offset="1" stopColor={colorWave2_3}/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="497.75" y1="208.927" x2="1.62861" y2="41.194" gradientUnits="userSpaceOnUse">
                    <stop stopColor={colorWave3_1}/>
                    <stop offset="0.294083" stopColor={colorWave3_2}/>
                    <stop offset="1" stopColor={colorWave3_3}/>
                </linearGradient>
            </defs>
        </svg>
    </div>
);

}

export default Waves;