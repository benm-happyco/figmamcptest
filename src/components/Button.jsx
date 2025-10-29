import { Button as MantineButton } from '@mantine/core';

export function Button({ children, ...props }) {
  return (
    <MantineButton
      color="purple"
      style={{
        borderRadius: '9999px', // 100% rounded (pill-shaped)
      }}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
