import React from "react";
import snake1 from "../../assets/images/snake1.jpeg"
import tortoise from "../../assets/images/tortoise.jpeg"
import beardeddragon from "../../assets/images/beardeddragon.jpeg"

import "../../assets/styles/components.css"
function HeroImages() {
  return (
    <div> 
    <img src={snake1} alt="" className="snake1"></img>
    <img src={tortoise} alt="" className="snake1"></img>
    <img src={beardeddragon} alt="" className="snake1"></img>
    </div>
  );
}

export default HeroImages;