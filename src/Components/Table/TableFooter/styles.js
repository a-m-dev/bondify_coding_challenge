import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TableFooterWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 2rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const Descriptor = styled.span`
  color: var(--dark-gray);
  margin-right: 1.4rem;
`;

export const Navigators = styled(NavLink)`
  all: unset;
  margin: 0 0.5rem;
  color: var(--primary-blue);
  cursor: pointer;

  &.active {
    /* text-decoration: underline; */
  }
`;
