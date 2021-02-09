import styled from "styled-components/macro";

export const Messagecontainer = styled.div`
  display: flex;

  padding: 20px;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  color: #fff;
`;
export const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const Title = styled.h4`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Small = styled.span`
  color: gray;
  margin-left: 20px;
  font-size: x-small;
  margin-right: 20px;
`;
export const Paragraph = styled.p``;

export const Icon = styled.div`
  color: #363a3f;
  transition: 0.3s all ease-in-out;
  display: flex;
  &:hover {
    color: #fff;
    cursor: pointer;
    transition: 0.3s transform ease-in;
    transform: scale(1.5);
  }
`;
