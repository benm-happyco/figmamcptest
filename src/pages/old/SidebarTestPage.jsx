import { Box } from '@mantine/core';
import { Sidebar } from '../components/Sidebar.jsx';

/**
 * SidebarTestPage - Blank page with only the Sidebar component for testing
 */
export function SidebarTestPage() {
  return (
    <Box
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflowX: 'visible',
        overflowY: 'hidden',
      }}
    >
      <Sidebar />
      <Box
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
      >
        {/* Empty content area for testing */}
      </Box>
    </Box>
  );
}

