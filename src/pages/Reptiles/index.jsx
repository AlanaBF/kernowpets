import React from "react";
import reptileCard from "../../components/ReptileCard/reptileCard.json";
import ReptileCard from "../../components/ReptileCard/index";
import "../../assets/styles/pages.css";

function Reptiles() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="pageTitle">Reptiles and Amphibians</h1>
        <h5 className="pageText">
          Discover an ever-changing selection of exceptional products we stock
          or have stocked. Visit or call us to find out if we have what you want
          or can stock it for you. Please note that specific care requirements
          can vary depending on the species within each category, so it's
          important to research and understand the needs of the specific reptile
          or invertebrate you are interested in keeping as a pet.
        </h5>
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
