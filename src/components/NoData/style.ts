import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`;

export const Img = styled.img`
    max-width: 300px;
`;

export const InfoWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  button{
    margin-top: 20px;
  }
  .sub-title{
    margin-top: 5px;
  }
`;
