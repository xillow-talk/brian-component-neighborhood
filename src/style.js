import styled from 'styled-components';

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
`

export const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  overflow: "hidden";
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "50%" : "0%")};
  padding: ${props => (props.open ? "10px" : "0px")};
  div {
      margin: 0px;
    };
`
export const Img = styled.img`
  padding: 2px;
  max-height: 162px;
  max-width: 305px;
`
export const Container = styled.div`
  display: -webkit-box;
  -webkid-box-pack: center;
  justify-content: center;
  border: 1px solid blue;
`
export const PhotoCard = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;
  border: 1px solid red;
`

// INFO FOR HOMES
export const Photos = styled.span`
  position: absolute;
  left:10px;
  top:10px;
`
export const Heart = styled.span`
  position: absolute;
  right:10px;
  top:10px;
`
export const Status = styled.span`
  position: absolute;
  left:5px;
  bottom:70px;
`
export const Market = styled.span`
  position: absolute;
  left:55px;
  bottom:70px;
`
export const Price = styled.span`
  position: absolute;
  left:6px;
  bottom:48px;
`
export const BB = styled.span`
  position: absolute;
  right:25px;
  bottom:48px;
`
export const Addy = styled.span`
  position: absolute;
  left:5px;
  bottom:30px;
`

export const H2 = styled.h2`
  color: red;
`