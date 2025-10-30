import { useState } from 'react'
import { Container, Title, Paper, Stack, Group, Text, Divider, Box, Badge, Code, Table, Button as MantineButton } from '@mantine/core'
import { PageHeader } from '../components/PageHeader.jsx'
import { Button } from '../components/Button.jsx'
import { MantineDataTable } from '../components/MantineDataTable.jsx'
import { Logo } from '../components/Logo.jsx'

export function DesignSystem() {
  const [selectedVariant, setSelectedVariant] = useState("Happy Property HPM");

  return (
    <>
      <Box style={{ height: '56px' }}>
        <PageHeader variant={selectedVariant} />
      </Box>
      <Container size="xl" py="xl">
        <Stack gap="xl">
          <div>
            <Title order={1} mb="md">Design System Documentation</Title>
            <Text c="dimmed">Complete component library and design tokens reference</Text>
          </div>

          {/* Page Header Component */}
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <div>
                <Title order={2} mb="xs">PageHeader</Title>
                <Text c="dimmed" size="sm" mb="md">
                  The PageHeader component goes on the top of every page. It has two variants:
                </Text>
                <Group gap="xs" mb="md">
                  <Badge color="purple">Happy Property HPM</Badge>
                  <Text size="sm">Used for the Happy Property/HPM app screens</Text>
                </Group>
                <Group gap="xs" mb="md">
                  <Badge color="blue">Settings</Badge>
                  <Text size="sm">For any settings related screens</Text>
                </Group>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Props</Title>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Prop</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Default</Table.Th>
                      <Table.Th>Description</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>variant</Code></Table.Td>
                      <Table.Td><Code>"Happy Property HPM" | "Settings"</Code></Table.Td>
                      <Table.Td><Code>"Happy Property HPM"</Code></Table.Td>
                      <Table.Td>Determines which variant to display</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Variants</Title>
                <Group gap="md" mb="md">
                  <MantineButton 
                    variant={selectedVariant === "Happy Property HPM" ? "filled" : "outline"}
                    onClick={() => setSelectedVariant("Happy Property HPM")}
                  >
                    Happy Property HPM
                  </MantineButton>
                  <MantineButton 
                    variant={selectedVariant === "Settings" ? "filled" : "outline"}
                    onClick={() => setSelectedVariant("Settings")}
                  >
                    Settings
                  </MantineButton>
                </Group>
                <Box style={{ border: '1px solid #e7e7e7', borderRadius: '8px', overflow: 'hidden', marginTop: '16px' }}>
                  <PageHeader variant={selectedVariant} />
                </Box>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Usage</Title>
                <Code block>{`import { PageHeader } from '../components/PageHeader.jsx'

// Default variant (Happy Property HPM)
<PageHeader />

// Settings variant
<PageHeader variant="Settings" />`}</Code>
              </div>
            </Stack>
          </Paper>

          {/* Button Component */}
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <div>
                <Title order={2} mb="xs">Button</Title>
                <Text c="dimmed" size="sm">
                  A pill-shaped button component with purple primary color. Wraps Mantine Button component.
                </Text>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Props</Title>
                <Text size="sm" c="dimmed" mb="sm">All standard Mantine Button props are supported</Text>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Prop</Table.Th>
                      <Table.Th>Default</Table.Th>
                      <Table.Th>Description</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>color</Code></Table.Td>
                      <Table.Td><Code>"purple"</Code></Table.Td>
                      <Table.Td>Button color variant</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>borderRadius</Code></Table.Td>
                      <Table.Td><Code>"9999px"</Code></Table.Td>
                      <Table.Td>Pill-shaped (100% rounded)</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Examples</Title>
                <Group gap="md">
                  <Button>Primary Button</Button>
                  <Button variant="light">Light Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </Group>
              </div>

              <div>
                <Title order={3} mb="sm">Usage</Title>
                <Code block>{`import { Button } from '../components/Button.jsx'

<Button>Click me</Button>
<Button variant="light">Secondary</Button>`}</Code>
              </div>
            </Stack>
          </Paper>

          {/* MantineDataTable Component */}
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <div>
                <Title order={2} mb="xs">MantineDataTable</Title>
                <Text c="dimmed" size="sm">
                  A reusable wrapper component for AG Grid tables with Mantine theme styling. All data tables in this application should use this component.
                </Text>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Props</Title>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Prop</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Default</Table.Th>
                      <Table.Th>Description</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>rowData</Code></Table.Td>
                      <Table.Td><Code>Array</Code></Table.Td>
                      <Table.Td><Code>[]</Code></Table.Td>
                      <Table.Td>The data to display in the table</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>columnDefs</Code></Table.Td>
                      <Table.Td><Code>Array</Code></Table.Td>
                      <Table.Td><Code>[]</Code></Table.Td>
                      <Table.Td>Column definitions for the table</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>defaultColDef</Code></Table.Td>
                      <Table.Td><Code>Object</Code></Table.Td>
                      <Table.Td><Code>{}</Code></Table.Td>
                      <Table.Td>Default column definitions (sortable, filter, resizable)</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>

              <div>
                <Title order={3} mb="sm">Usage</Title>
                <Code block>{`import { MantineDataTable } from '../components/MantineDataTable.jsx'

<MantineDataTable
  rowData={data}
  columnDefs={columns}
  spacing="Standard"
  style={{ height: '500px' }}
/>`}</Code>
              </div>
            </Stack>
          </Paper>

          {/* Design Tokens */}
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <div>
                <Title order={2} mb="xs">Design Tokens</Title>
                <Text c="dimmed" size="sm">Color palette, typography, spacing, and other design tokens</Text>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Colors</Title>
                <Text size="sm" c="dimmed" mb="md">Primary color: <Code>purple-6 (#635bff)</Code></Text>
                
                <Stack gap="lg">
                  <div>
                    <Text fw={600} mb="xs">Purple</Text>
                    <Group gap="xs">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                        <Box key={shade} style={{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: `var(--mantine-color-purple-${shade})`, border: '1px solid #e7e7e7' }} />
                      ))}
                    </Group>
                    <Text size="xs" c="dimmed" mt="xs">purple-6 is the primary color</Text>
                  </div>

                  <div>
                    <Text fw={600} mb="xs">Navy</Text>
                    <Group gap="xs">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                        <Box key={shade} style={{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: `var(--mantine-color-navy-${shade})`, border: '1px solid #e7e7e7' }} />
                      ))}
                    </Group>
                    <Text size="xs" c="dimmed" mt="xs">navy-9 is used for PageHeader background</Text>
                  </div>
                </Stack>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Typography</Title>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Token</Table.Th>
                      <Table.Th>Value</Table.Th>
                      <Table.Th>Usage</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>fontFamily</Code></Table.Td>
                      <Table.Td>Proxima Nova</Table.Td>
                      <Table.Td>All text uses Proxima Nova</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>fontSize.sm</Code></Table.Td>
                      <Table.Td>14px</Table.Td>
                      <Table.Td>Small text, buttons</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>fontWeight.semibold</Code></Table.Td>
                      <Table.Td>600</Table.Td>
                      <Table.Td>PageHeader text, emphasized content</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Spacing</Title>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Token</Table.Th>
                      <Table.Th>Value</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>spacing.xs</Code></Table.Td>
                      <Table.Td>4px</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>spacing.sm</Code></Table.Td>
                      <Table.Td>8px</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>spacing.md</Code></Table.Td>
                      <Table.Td>12px</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>spacing.lg</Code></Table.Td>
                      <Table.Td>16px</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>spacing.xl</Code></Table.Td>
                      <Table.Td>24px</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Radius</Title>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Token</Table.Th>
                      <Table.Th>Value</Table.Th>
                      <Table.Th>Usage</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td><Code>radius.sm</Code></Table.Td>
                      <Table.Td>4px</Table.Td>
                      <Table.Td>Small components</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>radius.md</Code></Table.Td>
                      <Table.Td>8px</Table.Td>
                      <Table.Td>Default, PageHeader buttons</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td><Code>9999px</Code></Table.Td>
                      <Table.Td>Pill shape</Table.Td>
                      <Table.Td>Button component</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </div>
            </Stack>
          </Paper>

          {/* Figma Integration */}
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <div>
                <Title order={2} mb="xs">Figma Integration</Title>
                <Text c="dimmed" size="sm">Guidelines for working with Figma designs</Text>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">Asset Management</Title>
                <Text mb="md">
                  Assets from Figma should be downloaded and placed in <Code>src/assets/icons/</Code> or <Code>src/assets/figma/</Code> folders.
                  Use <Code>@2x</Code> assets when available for retina displays.
                </Text>
                
                <Title order={4} mb="xs">Component Variants</Title>
                <Text mb="sm">
                  Before implementing any component with variants, always check Figma for variant specifications:
                </Text>
                <ul style={{ paddingLeft: '24px' }}>
                  <li>Use the Figma MCP tool to get design context</li>
                  <li>Check for variant props and their usage</li>
                  <li>Verify all assets are correctly imported</li>
                </ul>
              </div>

              <Divider />

              <div>
                <Title order={3} mb="sm">PageHeader Component Rules</Title>
                <Text mb="md">
                  The PageHeader component has specific rules from Figma:
                </Text>
                <Box p="md" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <Text size="sm" style={{ fontStyle: 'italic' }}>
                    "This pageheader component goes on the top of every page. It has two variants:
                    • Happy Property HPM is used for the Happy Property/HPM app screens. 
                    • Settings is for any settings related screens.
                    Before starting a project, always ask users what version they are trying to build for so that you know which page header to use"
                  </Text>
                </Box>
              </div>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  )
}

