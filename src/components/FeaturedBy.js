import React, { useState } from "react";
import investing from "./assets/investing.jpg";
import investingbw from "./assets/investingbw.jpg";
import webull from "./assets/webull.jpg";
import webullbw from "./assets/webullbw.jpg";
import tvicon from "./assets/tvicon.jpg";
import tviconbw from "./assets/tviconbw.jpg";
import marketwatch from "./assets/marketwatch.jpg";
import marketwatchbw from "./assets/marketwatchbw.jpg";

export const FeaturedBy = () => {
  const [investingImage, setInvestingImage] = useState(investingbw);
  const [webullImage, setWebullImage] = useState(webullbw);
  const [tviconImage, setTviconImage] = useState(tviconbw);
  const [marketwatchImage, setMarketwatchImage] = useState(marketwatchbw);

  const handleInvestingMouseOver = () => {
    setInvestingImage(investing);
  };

  const handleInvestingMouseOut = () => {
    setInvestingImage(investingbw);
  };

  const handleWebullMouseOver = () => {
    setWebullImage(webull);
  };

  const handleWebullMouseOut = () => {
    setWebullImage(webullbw);
  };

  const handleTviconMouseOver = () => {
    setTviconImage(tvicon);
  };

  const handleTviconMouseOut = () => {
    setTviconImage(tviconbw);
  };

  const handleMarketwatchMouseOver = () => {
    setMarketwatchImage(marketwatch);
  };

  const handleMarketwatchMouseOut = () => {
    setMarketwatchImage(marketwatchbw);
  };

  return (
    <>
      <div className="featuredbytext">
        <p className="somespace">FEATURED BY</p>
      </div>
      <div className="featuredby">
        <a href="https://www.investing.com">
          <img
            src={investingImage}
            alt="investing.com"
            onMouseOver={handleInvestingMouseOver}
            onMouseOut={handleInvestingMouseOut}
            width="155px"
          />
        </a>
        <a href="https://www.tradingview.com">
          <img
            src={tviconImage}
            alt="tradingview.com"
            onMouseOver={handleTviconMouseOver}
            onMouseOut={handleTviconMouseOut}
            width="155px"
          />
        </a>
        <a href="https://www.webull.com">
          <img
            src={webullImage}
            alt="webull.com"
            onMouseOver={handleWebullMouseOver}
            onMouseOut={handleWebullMouseOut}
            width="155px"
          />
        </a>
        <a href="https://www.marketwatch.com">
          <img
            src={marketwatchImage}
            alt="marketwatch.com"
            onMouseOver={handleMarketwatchMouseOver}
            onMouseOut={handleMarketwatchMouseOut}
            width="155px"
          />
        </a>
      </div>
    </>
  );
};
