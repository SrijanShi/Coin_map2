import React, { useState } from 'react'
import "./styles.css"

function CoinInfo({ heading, desc }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const renderDescription = () => {
    if (desc.length <= 200) {
      return <p className="coin-info-desc" dangerouslySetInnerHTML={{ __html: desc }} />;
    }

    if (expanded) {
      return (
        <div>
          <p className="coin-info-desc" dangerouslySetInnerHTML={{ __html: desc }} />
          <p 
            className="read-more-less" 
            onClick={toggleDescription}
          >
            Read Less...
          </p>
        </div>
      );
    } else {
      const shortDesc = desc.slice(0, 200) + "...";
      return (
        <div>
          <p className="coin-info-desc" dangerouslySetInnerHTML={{ __html: shortDesc }} />
          <p 
            className="read-more-less" 
            onClick={toggleDescription}
          >
            Read More...
          </p>
        </div>
      );
    }
  };

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {renderDescription()}
    </div>
  );
}

export default CoinInfo;