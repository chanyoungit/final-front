import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

export const Layout = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  //font-family: "EF_jejudoldam", sans-serif;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "#F2F2F2"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;

`;
export const Logo = styled.div`
    margin-left: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const LogoText = styled.text`
    color: #9e9e9e;
    font-weight: bold;
    font-size: 35px;
`

export const BackIcon = styled(FaAngleLeft)`
  position: absolute;
  left: 10px;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
`;
