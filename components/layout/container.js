import styled from "styled-components";

const Container = styled.div`
  --gutter-width: 1rem;
  --sm-min: 48;
  --md-min: 64;
  --lg-min: 75;
  --container-sm: calc(var(--sm-min) + var(--gutter-width));
  --container-md: calc(var(--md-min) + var(--gutter-width));
  --container-lg: calc(var(--lg-min) + var(--gutter-width));
  margin-right: auto;
  margin-left: auto;
  ${({ fluid }) => (fluid ? `padding-right: 2rem; padding-left: 2rem;` : "")}

  @media only screen and (min-width: 48em) {
    width: var(--container-sm, 46rem);
  }

  @media only screen and (min-width: 64em) {
    width: var(--container-md, 61rem);
  }

  @media only screen and (min-width: 75em) {
    width: var(--container-lg, 71rem);
  }
`;

export default Container;
