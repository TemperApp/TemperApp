import './ExploreContainer.css';
import Pitch from './Pitch';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Pitch />
    </div>
    
  );
};

export default ExploreContainer;
