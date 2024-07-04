import React from 'react';

const ContentWrapper = ({ headStart, headSpan, headEnd, para, link, imageSrc }) => {
  return (
    <div className="content-wrapper">
      <div className="text-content">
        <h1>
          {headStart}<span>{headSpan}</span>{headEnd}
        </h1>
        <p>{para}</p>
        <button className="learn-more" onClick={() => window.location.href = link}>
          Learn more
        </button>
      </div>
      <div className="image-content">
        <img src={imageSrc} alt="Electric Scooter" />
      </div>
    </div>
  );
};

export default ContentWrapper;
