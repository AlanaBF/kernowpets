import React from "react";
import reptileCard from "../../components/ReptileCard/reptileCard.json";
import ReptileCard from "../../components/ReptileCard/index";
import "../../assets/styles/pages.css";

function Reptiles() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="pageTitle">Reptiles, Mammals, Amphibians</h1>
        <h2 className="pageText">
          Discover an ever-changing selection of exceptional products we stock
          or have stocked. Visit or call us to find out if we have what you
          want or can stock it for you.
        </h2>
        <div className="reptilePageCard">
          {reptileCard.map((project, index) => (
            <ReptileCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reptiles;

