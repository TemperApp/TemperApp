import React, { ReactNode } from 'react';
import './SettingsGroup.css';

type SettingsGroupProps = {
  title?: string,
  titleAside?: ReactNode,
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({
  children,
  title,
  titleAside,
}) => (
  <div>

    <div className="title-container pt-3 pb-2">
      <div className="titles">
        {title
          && <h3>{title}</h3>}
      </div>
      {titleAside || null}
    </div>

    <div className='w-full overflow-x-hidden'>
      <hr />
    </div>

    {children}
  </div>
);

export default SettingsGroup;
