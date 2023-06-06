import React from "react";
import "../../assets/styles/components.css"; // Import the CSS file for styling

const PricingGrid = () => {
  return (
    <div>
      <div className="pricing-grid">
        <div className="grid-section">
          <h2 className="table-heading">Live Food</h2>
          <table>
            <thead>
              <tr>
                <th>Tubs</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tub of Mealworms</td>
                <td>£2.50</td>
              </tr>
              <tr>
                <td>Tub of Crickets</td>
                <td>£2.50</td>
              </tr>
              <tr>
                <td>Tub of Morio Worms</td>
                <td>£2.50</td>
              </tr>
              <tr>
                <td>Mix and Match 3 tubs</td>
                <td>£7.00</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <em>
                    <strong>Not Included in Mix and Match:</strong>
                  </em>
                </td>
              </tr>
              <tr>
                <td>Wax Worm Tubs</td>
                <td>£2.75</td>
              </tr>
              <tr>
                <td>Roaches Tubs</td>
                <td>£3.95</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid-section">
          <h2 className="table-heading">Frozen Foods</h2>
          <table>
            <thead>
              <tr>
                <th>Mice</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pinky</td>
                <td>£0.95</td>
              </tr>
              <tr>
                <td>Fluff</td>
                <td>£1.20</td>
              </tr>
              <tr>
                <td>Small</td>
                <td>£1.40</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>£1.75</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>£1.95</td>
              </tr>
              <tr>
                <td>Extra Large</td>
                <td>£2.20</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Rats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pups</td>
                <td>£1.20</td>
              </tr>
              <tr>
                <td>Fuzzies</td>
                <td>£2.00</td>
              </tr>
              <tr>
                <td>Small Weaner</td>
                <td>£2.95</td>
              </tr>
              <tr>
                <td>Large Weaner</td>
                <td>£3.75</td>
              </tr>
              <tr>
                <td>Small Rat</td>
                <td>£4.50</td>
              </tr>
              <tr>
                <td>Medium Rat</td>
                <td>£5.50</td>
              </tr>
              <tr>
                <td>Large Rat</td>
                <td>£6.75</td>
              </tr>
              <tr>
                <td>Extra Large Rat</td>
                <td>£7.50</td>
              </tr>
              <tr>
                <td>Giant Rat</td>
                <td>£8.90</td>
              </tr>
            </tbody>
          </table> <div className="note-box">
        <p>
          Also available:<br />
          Frozen Chicks, Guinea Pigs, Gerbils, and Rabbits.<br />
          Price on Request.
        </p>
      </div>
        </div>
      </div>
     
    </div>
  );
};

export default PricingGrid;

