import React from "react";
import reptileCard from "../../components/ReptileCard/reptileCard.json";
import ReptileCard from "../../components/ReptileCard/index";
import "../../assets/styles/pages.css";

function Reptiles() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="pageTitle">Reptiles, Mammals, Amphibians</h1>
        <p className="constructionText">Website Under Construction. <br/> New content being added <br/> Keep checking for new information</p>

        <div className="reptilePageCard">
          {reptileCard.map((project) => (
            <ReptileCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reptiles;
