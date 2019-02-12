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
  }
`