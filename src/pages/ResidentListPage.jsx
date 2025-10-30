import { useState, useEffect, useMemo } from 'react'
import { Container, Stack, Group, Button as MantineButton, Text, Box } from '@mantine/core'
import { MantineDataTable } from '../components/MantineDataTable.jsx'
import { PageHeader } from '../components/PageHeader.jsx'

const SUPABASE_URL = 'https://eqtignwdytafyszoqlfq.supabase.co/rest/v1/residents';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGlnbndkeXRhZnlzem9xbGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTUwMDEsImV4cCI6MjA2OTU3MTAwMX0.LvJK4rhMyCttsD1zW3MnAjYjbivTnyArUazDhlWWC1k';

export function ResidentListPage() {
  const [residents, setResidents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResidents() {
      try {
        const response = await fetch(SUPABASE_URL, {
          headers: {
            'apikey': SUPABASE_API_KEY,
            'Authorization': `Bearer ${SUPABASE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch residents');
        }

        const data = await response.json();
        setResidents(data);
      } catch (error) {
        console.error('Error fetching residents:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResidents();
  }, []);

  const columnDefs = useMemo(() => {
    if (residents.length === 0) {
      return [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'unit', headerName: 'Unit', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
      ];
    }

    const firstResident = residents[0];
    const allFields = Object.keys(firstResident);

    const fieldMappings = {
      name: ['name', 'full_name', 'resident_name', 'first_name', 'last_name'],
      unit: ['unit', 'unit_number', 'apartment', 'apartment_number', 'unit_id'],
      email: ['email', 'email_address', 'contact_email'],
      phone: ['phone', 'phone_number', 'contact_phone', 'mobile'],
    };

    const columns = [];

    Object.entries(fieldMappings).forEach(([headerName, possibleFields]) => {
      const foundField = possibleFields.find(field => allFields.includes(field));
      if (foundField) {
        columns.push({
          field: foundField,
          headerName: headerName.charAt(0).toUpperCase() + headerName.slice(1),
          flex: 1
        });
      }
    });

    if (columns.length === 0) {
      return allFields.map(field => ({
        field,
        headerName: field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        flex: 1
      }));
    }
    
    return columns;
  }, [residents]);

  return (
    <>
      <Box style={{ height: '56px' }}>
        <PageHeader variant="Happy Property HPM" />
      </Box>
      <Container size="xl" py="xl">
        <Stack gap="lg">
          {loading ? (
            <Text>Loading residents...</Text>
          ) : (
            <MantineDataTable
              rowData={residents}
              columnDefs={columnDefs}
              style={{ height: '500px', width: '100%' }}
            />
          )}

          <Group gap="md">
            <MantineButton 
              color="purple" 
              size="lg"
              radius="xxl"
            >
              Add Resident
            </MantineButton>
            <MantineButton
              color="gray" 
              size="lg"
              radius="xxl"
              variant="light"
            >
              Cancel
            </MantineButton>
          </Group>
        </Stack>
      </Container>
    </>
  )
}

