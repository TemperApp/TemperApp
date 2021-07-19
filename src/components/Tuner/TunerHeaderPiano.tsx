import React, { useEffect } from 'react';
import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { TemperamentDBType } from '../../engine/DB';

type TunerHeaderPianoProps = {
  temperamentId: number,
}

const TunerHeaderPiano: React.FC<TunerHeaderPianoProps> = ({
  temperamentId,
}) => {
  //console.info('🔹 [TunerHeader]: Render')

  return (
    <section className="pt-3 px-4 w-full flex items-center justify-between">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 351.1 94.6">
          <rect y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="25.1" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="50.2" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="75.2" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="100.3" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="125.4" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="150.5" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="175.6" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="200.6" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="225.7" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="250.8" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="275.9" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="301" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="326" y="1.2" className="st0" width="25.1" height="94.6"/>
          <rect x="117.1" y="1.2" width="16.7" height="56"/>
          <rect x="292.6" y="1.2" width="16.7" height="56"/>
          <rect x="219.9" y="1.2" width="16.7" height="56"/>
          <rect x="189.4" y="1.2" width="16.7" height="56"/>
          <rect x="145" y="1.2" width="16.7" height="56"/>
          <rect x="89" y="1.2" width="16.7" height="56"/>
          <rect x="320.6" y="1.2" width="16.7" height="56"/>
          <rect x="264.6" y="1.2" width="16.7" height="56"/>
          <rect x="44.8" y="1.2" width="16.7" height="56"/>
          <rect x="13.8" y="1.2" width="16.7" height="56"/>
          <text transform="matrix(1 0 0 1 3.5442 92.0307)" className="st1 st2">C3</text>
          <text transform="matrix(1 0 0 1 28.7934 92.0307)" className="st1 st2">D3</text>
          <text transform="matrix(1 0 0 1 54.1743 92.0307)" className="st1 st2">E3</text>
          <text transform="matrix(1 0 0 1 79.1915 92.0307)" className="st1 st2">F3</text>
          <text transform="matrix(1 0 0 1 104.3668 92.0307)" className="st1 st2">G3</text>
          <text transform="matrix(1 0 0 1 129.0335 92.0307)" className="st1 st2">A3</text>
          <text transform="matrix(1 0 0 1 154.1673 92.0307)" className="st1 st2">B3</text>
          <text transform="matrix(1 0 0 1 179.5006 92.0307)" className="st1 st2">C4</text>
          <text transform="matrix(1 0 0 1 204.8343 92.0307)" className="st1 st2">D4</text>
          <text transform="matrix(1 0 0 1 229.8711 92.0307)" className="st1 st2">E4</text>
          <text transform="matrix(1 0 0 1 254.4959 92.0307)" className="st1 st2">F4</text>
          <text transform="matrix(1 0 0 1 280.0529 92.0307)" className="st1 st2">G4</text>
          <text transform="matrix(1 0 0 1 305.1549 92.0307)" className="st1 st2">A4</text>
          <text transform="matrix(1 0 0 1 329.8343 92.0307)" className="st1 st2">B4</text>
      </svg>

    </section>
  );
};

export default React.memo(
  TunerHeaderPiano,
  (prevProps, nextProps) =>
    prevProps.temperamentId === nextProps.temperamentId
);
