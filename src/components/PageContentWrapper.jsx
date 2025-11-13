import { Box } from '@mantine/core';

/**
 * PageContentWrapper - A wrapper component for all page content
 * Provides consistent padding, alignment, and scrolling behavior
 * 
 * @param {React.ReactNode} children - The content to wrap
 */
export function PageContentWrapper({ children }) {
  return (
    <Box
      style={{
        padding: '48px',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </Box>
  );
}

