import React from 'react';
import { Icon, WTScore, Score } from '../style'

const Paragraph = ({ zip }) => (
  <div className="paragraph">
    <div className="predicts">
      <p style={{color: '#444'}}>Zillow predicts <a href="">Golden Gate Heights home values</a> will rise 6.8% next year, compared to a 6.1% increase for San Francisco as a whole. Among Golden Gate Heights homes, this home is 55.2% more expensive than the midpoint (median) home, and is priced 18.3% more per square foot.</p>
    </div>
    <div className="content-component">
      <div style={{display: 'flex', margin: '20px 0px 30px 0px'}}>
        <span className="walkscore">
          <span>
              <div className="pedestrian"></div>
              <Icon className='fas'>&#xf554;</Icon>
              <WTScore>Walk Score</WTScore>
          </span>
          <Score>
           {zip.walk_score}
            <span style={{fontSize:'12px', color:'black', fontWeight:'300',margin: '0px 0px 0px 10px', color: '#444'}}>(Walkable)</span>
          </Score>
        </span>
        <span style={{margin: '0px 0px 0px 40px'}}>
          <span>
              <div className="bus"></div>
              <Icon className='fas'>&#xf207;</Icon>
              <WTScore>Transit Score</WTScore>
            <Score>
              {zip.transit_score}
              <span style={{fontSize:'12px', color:'black', fontWeight:'300',margin: '0px 0px 0px 10px', color: '#444'}}>(Excellent Transit)</span>
            </Score>
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default Paragraph;
