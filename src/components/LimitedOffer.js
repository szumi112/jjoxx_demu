import React from "react";
import discordchat from "./discordchat.png";

export const LimitedOffer = () => {
  return (
    <div className="limitedofferContainer">
      <h4>Limited Time Offer -40% OFF</h4>
      <div className="limitedoffer">
        <div className="limitedofferWrapper">
          <h3>Act fast and take advantage of our limited time offer!</h3>

          <p className="limitedOfferDarkP">
            For a limited time only, we're offering an exclusive deal that you
            won't want to miss. Don't wait – seize this opportunity to save big
            and get the most value out of your purchase. Hurry, this offer won't
            last forever!
          </p>
        </div>

        <div className="limitedofferDiscord">
          <img src={discordchat} />
          <p>
            So why wait? Sign up today and start experiencing the benefits of
            J-JO Trading for yourself!
          </p>
        </div>
      </div>
      <a href="#">
        <button>BUY NOW</button>
      </a>
    </div>
  );
};
