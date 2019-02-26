import styled from "styled-components";

const getWidth = span => {
  if (!span) return;
  let width = (span / 12) * 100;
  return `flex-basis: ${width}%; max-width: ${width}%;`;
};

const getOffSet = offset => `margin-left: ${(offset / 12) * 100}%;`;

const getStyle = (size, offset) => {
  if (!size) return;

  return `
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    ${getWidth(size)}
    ${offset ? getOffSet(offset) : ""}
  `;
};

const Column = styled.div`
  flex: 0 0 auto;
    
  ${({ xs, xsOffset }) => (xs ? getStyle(xs, xsOffset) : "width: 100%")};

  @media only screen and (min-width: 48em) {
    ${({ sm, smOffset }) => sm && getStyle(sm, smOffset)};
  }

  @media only screen and (min-width: 64em) {
    ${({ md, mdOffset }) => md && getStyle(md, mdOffset)};
  }

  @media only screen and (min-width: 75em) {
    ${({ lg, lgOffSet }) => lg && getStyle(lg, lgOffSet)};
  }
`;

export default Column;
