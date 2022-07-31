const theme = {
  colors: {
    black: '#090909',
    gray: '#6c6a6a',
    gray200: '#c2c2c2',
  },
  fontSizes: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  fontWeights: {
    bold: '500',
    normal: '400',
    light: '300',
  },
  mediaQuesries: {
  },
  fontFamily: {
  },
};

export type TWeight = 'light' | 'normal' | 'bold'
export type TSize = 'sm' | 'md' | 'lg'
export type TColor = 'gray' | 'black' | 'gray200'
export default theme;
