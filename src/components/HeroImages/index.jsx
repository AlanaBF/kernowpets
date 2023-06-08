import React from "react";
import snake1 from "../../assets/images/snake1.jpeg"
import tortoise from "../../assets/images/tortoise.jpeg"
import beardeddragon from "../../assets/images/beardeddragon.jpeg"

import "../../assets/styles/components.css"
function HeroImages() {
  return (
    <div> 
    <img src={snake1} alt="" className="heroimage"></img>
    <img src={tortoise} alt="" className="heroimage"></img>
    <img src={beardeddragon} alt="" className="heroimage"></img>
    </div>
  );
}

export default HeroImages;