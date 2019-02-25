import styled from "styled-components";

const Row = styled.div`
  --gutter-width: 1rem;
  --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
  display: flex;
  width: 100%;
  flex: 0 1 auto;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  flex-wrap: wrap;
  margin-right: var(--gutter-compensation, -0.5rem);
  margin-left: var(--gutter-compensation, -0.5rem);
`;

export default Row;
