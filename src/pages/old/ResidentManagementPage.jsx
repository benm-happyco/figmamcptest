import { useState, useEffect } from 'react';
import { Box, Stack, Group } from '@mantine/core';
import { PageHeader } from '../components/PageHeader.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { PageContentWrapper } from '../components/PageContentWrapper.jsx';
import { MantineDataTable } from '../components/MantineDataTable.jsx';
import { Button } from '../components/Button.jsx';

/**
 * ResidentManagementPage - Displays a table of residents with Save, Create, and Cancel buttons
 */
export function ResidentManagementPage() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await fetch(
          'https://eqtignwdytafyszoqlfq.supabase.co/rest/v1/residents',
          {
            headers: {
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGlnbndkeXRhZnlzem9xbGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTUwMDEsImV4cCI6MjA2OTU3MTAwMX0.LvJK4rhMyCttsD1zW3MnAjYjbivTnyArUazDhlWWC1k',
              'Content-Type': 'application/json'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setResidents(data);
        } else {
          console.error('Failed to fetch residents:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching residents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, []);

  const columnDefs = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'Email', headerName: 'Email', flex: 1 },
    { field: 'Phone', headerName: 'Phone', flex: 1 },
    { field: 'Unit', headerName: 'Unit', width: 120 },
    { field: 'Address', headerName: 'Address', flex: 1 },
    { field: 'City', headerName: 'City', width: 150 },
    { field: 'State', headerName: 'State', width: 100 }
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
                <div>Loading residents...</div>
              ) : (
                <MantineDataTable
                  rowData={residents}
                  columnDefs={columnDefs}
                  spacing="Standard"
                />
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

