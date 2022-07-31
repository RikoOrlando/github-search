import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { TWeight, TSize, TColor } from 'theme/theme';

interface IText {
  children:ReactNode | string;
  size?: TSize;
  weight?: TWeight;
  color?: TColor
}
function Text({
  children, size, weight, color,
}:IText) {
  return (
    <P color={color} size={size} weight={weight}>
      {
        children
      }
    </P>
  );
}

Text.defaultProps = {
  size: 'md',
  weight: 'normal',
  color: 'black',
};
export default memo(Text);

interface IP {
  size?: TSize;
  weight?: TWeight;
  color?: TColor;
}
const P = styled.p<IP>`
  text-decoration: none; 
  font-size: ${({ theme, size }) => theme.fontSizes[size || 'md']};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight || 'normal']};
  color: ${({ theme, color }) => theme.colors[color || 'black']}
`;
