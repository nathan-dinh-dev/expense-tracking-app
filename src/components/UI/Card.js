import styled from "styled-components";

const StyledDiv = styled.div`
  box-shadow: 0 2px 8px rbga(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const Card = (props) => {
  return (
    <StyledDiv className={`${props.className}`}>{props.children}</StyledDiv>
  );
};

export default Card;
