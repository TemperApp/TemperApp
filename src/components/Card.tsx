import React from 'react';
import { IonCard, IonCardHeader,
  IonCardTitle, IonCardContent
} from '@ionic/react';

type CardProps = {
  title?: string,
  className?: string,
  classNameDefault?: string,
  classNameContent?: string,
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  classNameDefault = 'h-full',
  classNameContent = '',
}) => {
  return (
      <IonCard className={`${classNameDefault} ${className}`}>
        {title
          && <IonCardHeader className="py-0">
            <IonCardTitle className="px-1 text-left">
              <h4>{title}</h4>
            </IonCardTitle>
          </IonCardHeader>
        }
        <IonCardContent className={classNameContent}>
          {children}
        </IonCardContent>
      </IonCard>
  )
};

export default Card;
