import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 4px;
  height: 31.5px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 16px;
  align-items: center;
  cursor: pointer;
`;

export const ContainerOptions = styled.div`
  position: absolute;
  background: white;
  margin-top: 12px;
  box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
  -webkit-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
  -moz-box-shadow: 0px 2px 16px 0px rgba(202, 211, 225, 0.4);
  border-radius: 4px;
  z-index: 20;
`;

export const Img = styled.img`
  height: 10px;
  margin-left: 12px;
  margin-top: 3px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;
`;
