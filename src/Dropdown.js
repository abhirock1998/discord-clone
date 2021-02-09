import React from "react";

import { DropContainer, Container, Small, Heading } from "./dropdown-styled";

export default function DropDown({ children, show, ...restProps }) {
  return (
    <DropContainer show={show} {...restProps}>
      {children}
    </DropContainer>
  );
}

DropDown.ChannelContainer = function ChannelContainer({
  children,
  id,
  channelName,
  ...restProps
}) {
  return (
    <Container  {...restProps}>
      {children}
    </Container>
  );
};

DropDown.Span = function Span({ children, ...restProps }) {
  return <Small {...restProps}>{children}</Small>;
};

DropDown.Title = function Title({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
