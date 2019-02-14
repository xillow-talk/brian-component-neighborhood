import styled from 'styled-components';

export const Center = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Heading = styled.div`
  font-family:'Gotham,gotham','Verdana','sans-serif';
  font-size: 28px;
  font-weight:600;
  border-top-style: solid;
  border-top-width: thin;
  border-bottom-style: solid;
  border-bottom-width: thin;
  padding: 10px;
  color: #444;
  cursor: pointer;
`;

export const Content = styled.div`
  font-family:'Gotham,gotham','Verdana','sans-serif';
  border: 1px solid gray;
  border-top: none;
  overflow: "hidden";
  opacity: ${props => (props.open ? '1' : '0')};
  max-height: ${props => (props.open ? '50%' : '0%')};
  padding: ${props => (props.open ? '10px' : '0px')};
  div {
      margin: 0px;
    };
`;


// CONTAINERS FOR PHOTOSLIDES
export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid blue;
`;
export const Slides = styled.div`
  border: 1px solid red;
  flex: 1 1 0%;
  display: flex;
  max-width: 900px;
`;
export const Photo = styled.div`
  display:inline-block;
  padding: 2px;
  width: 50%;
  border-color: green;
  position: relative;
  overflow: hidden;

`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

// INFO FOR EACH HOME
export const Photos = styled.span`
  position: absolute;
  left:10px;
  top:10px;
  color: #fff;
  font-size:13px;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
`;
export const Heart = styled.span`
  position: absolute;
  right:10px;
  top:10px;
`;
export const Status = styled.span`
  position: absolute;
  left:4px;
  bottom:83px;
`;
export const Market = styled.span`
  position: absolute;
  left:37px;
  bottom:86px;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
  color: #fff;
`;
export const Price = styled.span`
  position: absolute;
  left:6px;
  bottom:49px;
  color: #fff;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
  font-size:28px;
`;
export const BB = styled.span`
  position: absolute;
  right:58px;
  bottom:50px;
  color: #fff;
  font-size:15px;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
`;
export const Addy = styled.span`
  position: absolute;
  left:5px;
  bottom:30px;
  display:flex;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
  text-shadow: 0 0 3px rgba(0,0,0,0.5);
  font-size:15px;
`;

export const H2 = styled.h2`
  color: red;
`;
export const H4 = styled.h4`
  font-size:13px;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  color: #444;
`;

export const Q = styled.i`
padding-left: 5px;
font-size: 17px;
color: '#444';
`;

export const Vh2 = styled.h2`
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  color: #444;
  margin: 0px 0px 0px 0px
`;

export const Arrow = styled.i`
  font-size: 32px;
  color: #9ACD32;
  margin: 5px 0px 0px 0px 
`;

export const Perh5 = styled.h5`
  font-size: 20px;
  font-weight: 400;
  color: #444;
  margin: 5px 0px 0px 5px;
`;
export const Timep = styled.p`
  font-family: "Gotham","gotham","Verdana","sans-serif";
  font-size: 12px;
  font-weight: 400;
  color: #666;
  margin: 5px 0px 0px 5px;
`;
export const PerDiv = styled.div`
  display: flex;
`;
export const Icon = styled.i`
  font-size: 15px;
  color: #0074e4;
`;
export const WTScore = styled.span`
  font-weight: 300;
  text-decoration: none;
  color: #0074e4;
  font-size: 13px;
  margin: 0px 10px 0px 10px;
`;
export const Score = styled.span`
  font-weight: 700;
  text-decoration: none;
  color: #0074e4;
  font-size: 15px;
`;
