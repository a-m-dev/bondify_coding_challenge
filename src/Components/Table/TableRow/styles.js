import styled from "styled-components";

export const TableRowContainer = styled.section`
  width: 100%;
  min-height: 76px;
  padding: 1rem 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr) 2fr;
  border-bottom: 1px solid var(--light-gray);
`;

export const Cell = styled.p`
  margin: 0px;
  font-size: 0.95rem;
`;
