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
      <p className="pageText">At our store, we offer a diverse range of live and frozen food specifically tailored for reptiles. We understand the unique dietary needs of reptiles and strive to provide high-quality and nutritious food options to ensure their optimal health and well-being.</p>
      <PricingGrid />
    </div>
  );
}

export default LiveFood;
