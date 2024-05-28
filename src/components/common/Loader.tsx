import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 10px solid ${(props) => props.theme.loader.backgroundColor};
  border-top: 10px solid ${(props) => props.theme.loader.mainColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin: 4em auto;
`;
