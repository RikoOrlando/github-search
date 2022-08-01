import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  height: 150px;
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 10px;
  background: white;
  cursor: pointer;
  :hover{
    box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    -webkit-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    -moz-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    border-color: ${({ theme }) => theme.colors.blue};
  }
  @media (max-width: 549px) {
    width: calc(100vw - 40px);
  }
  p{
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 549px) {
      max-width: calc(100vw - 80px);
    }
  }
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
