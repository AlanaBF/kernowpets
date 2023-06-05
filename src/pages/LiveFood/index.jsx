import React from "react";
import LiveFoodBanner from "../../assets/images/LivefoodBanner.jpeg"
import PricingGrid from "../../components/LiveFoodList";
import "../../assets/styles/pages.css"
function LiveFood() {
  return (
    <div className="pageBackground">
      <h2 className="pageTitle">Live and Frozen Food</h2>
      <img className="live-food-banner" src={LiveFoodBanner} alt=""></img>
      <br />
      <PricingGrid />
    </div>
  );
}

export default LiveFood;
