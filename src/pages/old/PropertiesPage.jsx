import { useState, useEffect } from 'react';
import { Box, Stack, Group } from '@mantine/core';
import { PageHeader } from '../components/PageHeader.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { PageContentWrapper } from '../components/PageContentWrapper.jsx';
import { MantineDataTable } from '../components/MantineDataTable.jsx';
import { Button } from '../components/Button.jsx';
import { getProperties } from '../services/propertyApi.js';

/**
 * PropertiesPage - Displays a table of properties from HappyCo with Save, Create, and Cancel buttons
 */
export function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        // Adjust the path based on the actual GraphQL response structure
        if (data && data.properties) {
          setProperties(data.properties);
        } else if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.warn('Unexpected data structure:', data);
          setProperties([]);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const columnDefs = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'zip', headerName: 'ZIP', width: 120 }
  ];

  const handleSave = () => {
    console.log('Save clicked');
    // Add save logic here
  };

  const handleCreate = () => {
    console.log('Create clicked');
    // Add create logic here
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    // Add cancel logic here
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <PageHeader variant="Happy Property HPM" />
      <Box
        style={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <Sidebar />
        <PageContentWrapper>
          <Stack gap="lg" style={{ width: '100%' }}>
            <div style={{ height: '600px', width: '100%' }}>
              {loading ? (
                <div>Loading properties...</div>
              ) : properties.length > 0 ? (
                <MantineDataTable
                  rowData={properties}
                  columnDefs={columnDefs}
                  spacing="Standard"
                />
              ) : (
                <div>No properties found</div>
              )}
            </div>
            
            <Group gap="sm">
              <Button
                onClick={handleCancel}
                color="gray"
                variant="light"
                size="lg"
                radius="xxl"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                color="purple"
                variant="light"
                size="lg"
                radius="xxl"
              >
                Save
              </Button>
              <Button
                onClick={handleCreate}
                color="purple"
                size="lg"
                radius="xxl"
              >
                Create
              </Button>
            </Group>
          </Stack>
        </PageContentWrapper>
      </Box>
    </Box>
  );
}

