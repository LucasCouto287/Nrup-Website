import styled from "styled-components";

const Text = ({
  tag,
  size,
  mobileSize,
  weight,
  isSerif,
  children,
  ...props
}) => {
  return (
  <StyledText
      as={tag}
      size={size}
      mobileSize={mobileSize}
      weight={weight}
      isSerif={isSerif}
      {...props}
    >
      {children}
    </StyledText>
  );
};


const SectionTitle = styled(Text).attrs({
  tag: "h3",
  size: "medium",
  weight: "light",
  color: "lightGray"
})`
  text-transform: uppercase;
`;
