import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
  children:ReactNode | string;
  onClick?: () => void

}
function Button({
  children,
  onClick,
}:IButton) {
  return (
    <ButtonComponent onClick={onClick}>
      {
        children
      }
    </ButtonComponent>
  );
}

Button.defaultProps = {
  onClick: () => {},
};
export default memo(Button);

const ButtonComponent = styled.button`
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: 0px 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  height: 33px;
  font-weight: 400;
  :hover{
    border-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
  :focus {
    outline: none;
  }
`;
