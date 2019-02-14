import React from 'react';
import { H4, Q, Vh2, Arrow, Perh5, Timep, PerDiv } from '../style';

const Zestimate = ({ property }) => (
  <div className="homevalue">
    <div className="content">
      <div className="price">
        <H4 className="zestimate">
          <span>Median Zestimate</span>
          <Q className="fas">&#xf059;</Q>
        </H4>
        <Vh2>
          $
          {property.price}
        </Vh2>
      </div>
      <PerDiv className="percentage">
        <Arrow className="fa fa-arrow-circle-up" />
        <div className="perc/time">
          <Perh5>6.1 %</Perh5>
          <Timep>Past 12 months</Timep>
        </div>
      </PerDiv>
    </div>
  </div>
);

export default Zestimate;
