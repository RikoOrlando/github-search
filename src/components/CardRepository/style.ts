import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  height: 150px;
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 10px;
  background: white;
  cursor: pointer;
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :hover{
    box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    -webkit-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    -moz-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Avatar = styled.img`
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

export const ContainerOwner = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CreatedAt = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;
