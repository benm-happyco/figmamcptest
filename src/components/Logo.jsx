import { Box } from '@mantine/core';
import logo from '../assets/logo.svg';

export function Logo({ width, height, style, ...props }) {
  return (
    <Box
      component="img"
      src={logo}
      alt="HappyCo Logo"
      style={{
        width: width || 'auto',
        height: height || 'auto',
        display: 'block',
        ...style,
      }}
      {...props}
    />
  );
}
