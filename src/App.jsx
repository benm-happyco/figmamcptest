import { useState } from 'react'
import { Container, Title, Stack, Text, Paper } from '@mantine/core'
import { Button } from './components/Button.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="lg">
        <Title order={1}>Vite + React</Title>
        
        <Paper p="md" withBorder>
          <Stack align="center" gap="md">
            <Button onClick={() => setCount((count) => count + 1)} size="lg">
              count is {count}
            </Button>
            <Text size="sm" c="dimmed">
              Edit <code>src/App.jsx</code> and save to test HMR
            </Text>
          </Stack>
        </Paper>
        
        <Stack gap="xs" align="center">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} alt="Vite logo" style={{ height: '24px' }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} alt="React logo" style={{ height: '24px' }} />
          </a>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
