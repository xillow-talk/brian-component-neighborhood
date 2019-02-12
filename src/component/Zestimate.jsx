import React from 'react';

const Zestimate = () => (
  <div className="homevalue">
    <div className="content">
      <div className="price">
        <h4 className="zestimate">
          <span>Median Zestimate</span>
          <a>**button**</a>
        </h4>
        <h2>$1,374,800</h2>
      </div>
      <div className="percentage">
        <div>*Arrow*</div>
        <div className="perc/time">
          <h5>6.1 %</h5>
          <p>Past 12 months</p>
        </div>
      </div>
    </div>
  </div>
);

export default Zestimate;