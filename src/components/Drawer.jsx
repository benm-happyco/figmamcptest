import { Drawer as MantineDrawer } from '@mantine/core';

/**
 * Drawer - A wrapper component for Mantine Drawer with consistent styling
 * 
 * @param {boolean} opened - Whether the drawer is open
 * @param {function} onClose - Callback when drawer should close
 * @param {string} position - Position of drawer: 'left' | 'right' | 'top' | 'bottom'
 * @param {string} title - Title text for the drawer
 * @param {ReactNode} children - Content to display inside the drawer
 * @param {Object} ...props - All other Mantine Drawer props
 */
export function Drawer({ 
  opened, 
  onClose, 
  position = 'right',
  title,
  children,
  ...props 
}) {
  return (
    <MantineDrawer
      opened={opened}
      onClose={onClose}
      position={position}
      title={title}
      {...props}
    >
      {children}
    </MantineDrawer>
  );
}

