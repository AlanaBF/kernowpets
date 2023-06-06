import React from "react";
import Card from "react-bootstrap/Card";
import "../../assets/styles/components.css"
// Card that gives an image of the project, the name and a description and the deployed link

function ReptileCard({ project }) {
  const { name, image, caresheetLink, about } = project;

  return (
    <Card className="reptileCard">
      <div className="cardImagePosition">
        <Card.Img className="cardImage" variant="top" alt={`Image for ${name}`} src={image} />
      </div>
      <Card.Body className="cardBodyText">
        <Card.Title>
          <h4 className="cardBodyTitle">
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <Card.Text className="reptileText">
          <h5 className="reptileText">{about}</h5>
        </Card.Text>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        <Card.Link className="reptileCardLink">
          {caresheetLink === "no caresheet" ? (
            <h5 className="reptileCardLink">No Caresheet Available</h5>
          ) : (
            <h5 className="reptileCardLink">
              <a className="reptileCardLink" href={caresheetLink} target="_blank">Care Sheet</a>
            </h5>
          )}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ReptileCard;