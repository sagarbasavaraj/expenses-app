import styled from "styled-components";

const Row = styled.div`
  display: flex;
  width: 100%;
  flex: 0 1 auto;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  flex-wrap: wrap;
`;

export default Row;
