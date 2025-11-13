import { useState, useEffect } from 'react';
import { Stack, Button, Group } from '@mantine/core';
import { PageHeader } from '../components/PageHeader.jsx';
import { MantineDataTable } from '../components/MantineDataTable.jsx';

/**
 * ResidentsManagementPage - Displays a table of residents with Save, Create, and Cancel buttons
 */
export function ResidentsManagementPage() {
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
    <>
      <PageHeader variant="Happy Property HPM" />
      <Stack gap="md" style={{ padding: '40px' }}>
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
            onClick={handleSave}
            color="purple"
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
          <Button
            onClick={handleCancel}
            color="gray"
            size="lg"
            radius="xxl"
            variant="light"
          >
            Cancel
          </Button>
        </Group>
      </Stack>
    </>
  );
}

