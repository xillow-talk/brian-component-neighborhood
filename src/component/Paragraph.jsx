import React from 'react';

const Paragraph = () => (
  <div>
    <div className="predicts">
      <p>Zillow predicts <a href="">Golden Gate Heights home values</a> will rise 6.8% next year, compared to a 6.1% increase for San Francisco as a whole. Among Golden Gate Heights homes, this home is 55.2% more expensive than the midpoint (median) home, and is priced 18.3% more per square foot.</p>
    </div>
    <div className="content-component">
      <ul>
        <li className="walkscore">
          <span>
              <div className="pedestrian"></div>
                walkscore 
          </span>
          <strong>
           71 (walkable)
          </strong>
        </li>
        <li>
          <span>
              <div className="bus"></div>
                transit score
            <strong>
              75(Excellent Transit)
            </strong>
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Paragraph;
