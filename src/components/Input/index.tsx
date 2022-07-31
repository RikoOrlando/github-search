import React, { memo } from 'react';
import styled from 'styled-components';

interface IInput {
  placeholder?: string;
  value?: string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>)=> void
}
function Input({ placeholder, value, onChange }:IInput) {
  return <InputComponents value={value} onChange={onChange} placeholder={placeholder} />;
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default memo(Input);

const InputComponents = styled.input`
  width: 100%;
  max-width: 400px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 6px 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray};
  :focus{
    outline: none
  }
`;
