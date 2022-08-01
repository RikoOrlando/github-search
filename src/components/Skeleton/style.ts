import styled, { keyframes } from 'styled-components';

export const Card = styled.div`
  border-radius: 4px;
  height: 150px;
  width: 250px;
  background: #eee;
  @media (max-width: 549px) {
    width: calc(100vw - 40px);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

`;

const spin = keyframes`
  0%{
      background-position: -468px 0
    }
  100%{
      background-position: 468px 0
  }
`;

export const Animated = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${spin};
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 150px;
  position: relative;
  border-radius: 4px;
`;
