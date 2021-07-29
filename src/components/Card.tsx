import React from 'react';
import { IonCard, IonCardHeader,
  IonCardTitle, IonCardContent
} from '@ionic/react';

type CardProps = {
  title?: string,
}

const Card: React.FC<CardProps> = ({
  children,
  title,
}) => {
  return (
      <IonCard className="comma-card h-full">
        {title
          && <IonCardHeader className="py-0">
            <IonCardTitle className="px-1 text-left">
              <h4>{title}</h4>
            </IonCardTitle>
          </IonCardHeader>
        }
        <IonCardContent>
          {children}
        </IonCardContent>
      </IonCard>
  )
};

export default Card;
