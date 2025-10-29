import { createTheme } from '@mantine/core';

// Extract color values from tokens
const colors = {
  purple: [
    '#efefff', // purple-0
    '#e0deff', // purple-1
    '#d0ceff', // purple-2
    '#b1adff', // purple-3
    '#928cff', // purple-4
    '#827cff', // purple-5
    '#635bff', // purple-6 (primary)
    '#5952e6', // purple-7
    '#4f49cc', // purple-8
    '#3b3799', // purple-9
  ],
  red: [
    '#ffe9e9', // red-0
    '#ffd2d2', // red-1
    '#f8a4a4', // red-2
    '#f27272', // red-3
    '#ec4848', // red-4
    '#e92e2e', // red-5
    '#e10001', // red-6
    '#cf0f13', // red-7
    '#b9060f', // red-8
    '#a3000a', // red-9
  ],
  yellow: [
    '#fff9e3', // yellow-0
    '#fef3c7', // yellow-1
    '#fde68a', // yellow-2
    '#fcd34d', // yellow-3
    '#fbbf24', // yellow-4
    '#f59e0b', // yellow-5
    '#d97706', // yellow-6
    '#b45309', // yellow-7
    '#92400e', // yellow-8
    '#78350f', // yellow-9
  ],
  green: [
    '#e6f9f3', // green-0
    '#ccf3e7', // green-1
    '#b3eddc', // green-2
    '#80e1c4', // green-3
    '#4dd5ac', // green-4
    '#00c389', // green-5
    '#01af7b', // green-6
    '#019c6e', // green-7
    '#017552', // green-8
    '#004e37', // green-9
  ],
  blue: [
    '#e7fdff', // blue-0
    '#cffafe', // blue-1
    '#a5f3fc', // blue-2
    '#67e8f9', // blue-3
    '#22d3ee', // blue-4
    '#06b6d4', // blue-5
    '#0891b2', // blue-6
    '#0e7490', // blue-7
    '#155e75', // blue-8
    '#114b5e', // blue-9
  ],
  navy: [
    '#e8eaf3', // navy-0
    '#c6c9e2', // navy-1
    '#a1a7ce', // navy-2
    '#7e84ba', // navy-3
    '#636aac', // navy-4
    '#4b509e', // navy-5
    '#444895', // navy-6
    '#3c3e89', // navy-7
    '#35357c', // navy-8
    '#28245a', // navy-9
  ],
  gray: [
    '#f3f5f7', // gray-0
    '#e7e7e7', // gray-1
    '#caced0', // gray-2
    '#abb3b9', // gray-3
    '#909ca5', // gray-4
    '#7f8e99', // gray-5
    '#758795', // gray-6
    '#637481', // gray-7
    '#566774', // gray-8
    '#455968', // gray-9
  ],
  dark: [
    '#c9c9c9', // dark-0
    '#b8b8b8', // dark-1
    '#828282', // dark-2
    '#696969', // dark-3
    '#424242', // dark-4
    '#3b3b3b', // dark-5
    '#2e2e2e', // dark-6
    '#242424', // dark-7
    '#1f1f1f', // dark-8
    '#141414', // dark-9
  ],
};

export const theme = createTheme({
  primaryColor: 'purple',
  primaryShade: 6, // purple-6 (#635bff)
  
  colors: {
    purple: colors.purple,
    red: colors.red,
    yellow: colors.yellow,
    green: colors.green,
    blue: colors.blue,
    navy: colors.navy,
    gray: colors.gray,
    dark: colors.dark,
  },

  fontSizes: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    xxxxl: '40px',
  },

  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },

  radius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    xxl: '64px',
  },

  spacing: {
    none: '0',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },

  defaultRadius: 'md',
  
  headings: {
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '40px', lineHeight: '1.2' },
      h2: { fontSize: '32px', lineHeight: '1.2' },
      h3: { fontSize: '24px', lineHeight: '1.2' },
      h4: { fontSize: '20px', lineHeight: '1.2' },
      h5: { fontSize: '18px', lineHeight: '1.2' },
      h6: { fontSize: '16px', lineHeight: '1.2' },
    },
  },

  other: {
    // Custom tokens for easy access
    padding: {
      xxs: '8px',
      xs: '12px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
    },
  },
});
