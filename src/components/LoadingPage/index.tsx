import styled, { keyframes } from 'styled-components';

function LoadingPage() {
  return (
    <Container>
      <LoaderComponent />
    </Container>
  );
}

export default LoadingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;
const LoaderComponent = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid blue;
  width: 30px;
  height: 30px;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;
