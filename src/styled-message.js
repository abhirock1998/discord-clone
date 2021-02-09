import React from "react";
import {
  Messagecontainer,
  InfoContainer,
  Title,
  Small,
  Paragraph,
  Icon,
} from "./styled-message-css";

export default function MessageComponents({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Messagecontainer direction={direction} {...restProps}>
      {children}
    </Messagecontainer>
  );
}

MessageComponents.MessageInfo = function MessageInfo({
  children,
  ...restProps
}) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

MessageComponents.Header = function Header({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MessageComponents.Span = function Span({ children, ...restProps }) {
  return <Small {...restProps}>{children}</Small>;
};

MessageComponents.Message = function Message({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

MessageComponents.DeleteIcon = function DeleteIcon({
  children,

  ...restProps
}) {
  return (
    <Icon title="Deleted"  {...restProps}>
      {children}
    </Icon>
  );
};
