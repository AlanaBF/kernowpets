import React from "react";
import Card from "react-bootstrap/Card";
import "../../assets/styles/components.css";

function ReptileCard({ project }) {
  const { name, image, caresheetLink, about } = project.reptiles[0];

  return (
    <Card className="reptileCard" style={{ backgroundColor: "inherit" }}>
      <div className="cardImagePosition">
        <Card.Img
          className="cardImage"
          variant="top"
          alt={`Image for ${name}`}
          src={image}
        />
      </div>
      <Card.Body className="cardBodyText">
        <Card.Title>
          <h4 className="cardBodyTitle">
            <strong>{name}</strong>
          </h4>
        </Card.Title>
        <div className="reptileText">
          <h5 className="text-overflow">{about}</h5>
        </div>
      </Card.Body>
      <Card.Body className="cardBodyLinks">
        {caresheetLink.length === 0 ? (
          <h5 className="reptileCardLink">No Caresheet Available</h5>
        ) : (
          <>
            <h5 className="reptileCardLink">Care Sheets:</h5>
            <div className="careSheetLinks">
              {caresheetLink.map((sheet, index) => (
                <div key={index} className="careSheetLink">
                  <a
                    href={sheet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sheet.name}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ReptileCard;
