import React from "react";
import './PageHeader.css'

type PageHeaderProps = {
  mainTitle: string,
  subTitle: string,
  onShowModal?: (event: any) => void,
}

const PageHeader: React.FC<PageHeaderProps> = ({
  mainTitle, subTitle, onShowModal
}) => {

  const btnShowModal = (onShowModal !== undefined)
    ? (<button
        className="btn-show-modal h-10 w-10"
        onClick={onShowModal}
      />)
    : null;

  return (
    <>
      <div className="ph-content h-20 px-6 pb-0">
        <div className="ph-titles">
          <h3>{subTitle}</h3>
          <h2>{mainTitle}</h2>
        </div>
        {btnShowModal}
      </div>
      <hr />
    </>
  )
};

export default PageHeader;
