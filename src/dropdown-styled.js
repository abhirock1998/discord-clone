import styled from "styled-components/macro";

export const DropContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  z-index: 999;
  background: #2f3135;
  width: 50%;
  position: fixed;
  top: ${({ show }) => (show ? "0" : "-100%")};
  left: 0;
  height: 100%;
  box-shadow: 0 0 4px rgba(4, 4, 4, 1);
  transition: 1s all ease-in-out;

  & .MuiSvgIcon-root {
    position: absolute;
    top: 27px;
    right: 27px;
    color: #fff;
    cursor: pointer;
  }

  & .MuiSvgIcon-root:hover {
    transition: 0.4s transform ease-in;
    transform: rotate(180deg);
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Small = styled.span`
  font-size: 30px;
  padding: 8px;
`;
export const Heading = styled.h3`
  display: flex;
  position: absolute;
  top: 27px;
  left: 20px;
  cursor: pointer;
  background-color: #2f3135;
  color: #fff;
  transition:translateY(10)
`;
