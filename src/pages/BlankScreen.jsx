import { useState } from 'react'
import { Box, Button, Stack } from '@mantine/core'
import { PageHeader } from '../components/PageHeader.jsx'

export function BlankScreen() {
  const [variant, setVariant] = useState("Happy Property HPM");

  const toggleVariant = () => {
    setVariant(prev => prev === "Happy Property HPM" ? "Settings" : "Happy Property HPM");
  };

  return (
    <>
      <Box style={{ height: '56px' }}>
        <PageHeader variant={variant} />
      </Box>
      <Stack align="center" gap="md" style={{ padding: '24px' }}>
        <Button onClick={toggleVariant}>
          Toggle Header Variant: {variant === "Happy Property HPM" ? "Settings" : "Happy Property HPM"}
        </Button>
      </Stack>
      <Box style={{ width: '100vw', height: 'calc(100vh - 56px - 100px)', background: 'white' }} />
    </>
  )
}


