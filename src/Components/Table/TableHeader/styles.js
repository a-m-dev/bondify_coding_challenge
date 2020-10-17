import styled from "styled-components";

export const HeadingWrapper = styled.section`
  width: 100%;
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr;
  align-items: center;
  min-height: 64px;
  background-color: var(--dim-blue);
`;

export const ColumnNotation = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: normal;
`;
