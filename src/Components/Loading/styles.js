import styled, { css } from "styled-components";

export const LoadingWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  opacity: 1;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    !props.status &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const LoadingIndicator = styled.div`
  width: 100vw;
  height: 100%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 8px solid var(--light-gray);
  border-top: 8px solid var(--dark-gray);
  animation: spin 1.4s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
