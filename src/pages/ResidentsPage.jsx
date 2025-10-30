import { useState, useEffect, useMemo } from 'react'
import { Container, Title, Stack, Text, Paper } from '@mantine/core'
import { Button } from '../components/Button.jsx'
import { Logo } from '../components/Logo.jsx'
import { DataTable } from '../components/DataTable.jsx'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const SUPABASE_URL = 'https://eqtignwdytafyszoqlfq.supabase.co/rest/v1/residents';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGlnbndkeXRhZnlzem9xbGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTUwMDEsImV4cCI6MjA2OTU3MTAwMX0.LvJK4rhMyCttsD1zW3MnAjYjbivTnyArUazDhlWWC1k';

export function ResidentsPage() {
  const [count, setCount] = useState(0)
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
        console.log('Fetched residents data:', data);
        if (data.length > 0) {
          console.log('Sample resident structure:', data[0]);
        }
        setResidents(data);
      } catch (error) {
        console.error('Error fetching residents:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResidents();
  }, []);

  // Dynamically create column definitions based on actual data structure
  const columnDefs = useMemo(() => {
    if (residents.length === 0) {
      // Return default columns while loading
      return [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'unit', headerName: 'Unit', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
      ];
    }
    
    // Get all available fields from the first resident
    const firstResident = residents[0];
    const allFields = Object.keys(firstResident);
    console.log('Available fields in resident data:', allFields);
    
    // Map common field names with fallbacks
    const fieldMappings = {
      name: ['name', 'full_name', 'resident_name', 'first_name', 'last_name'],
      unit: ['unit', 'unit_number', 'apartment', 'apartment_number', 'unit_id'],
      email: ['email', 'email_address', 'contact_email'],
      phone: ['phone', 'phone_number', 'contact_phone', 'mobile'],
    };
    
    const columns = [];
    
    // Try to find matching fields
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
    
    // If no matches found, just show all fields
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
    <Container size="xl" py="xl">
      <Stack align="center" gap="lg">
        <Logo width="241" height="42" style={{ maxWidth: '100%' }} />
        <Title order={1}>Multifamily Property Residents</Title>
        
        <Paper p="md" withBorder style={{ width: '100%' }}>
          <Stack gap="md">
            {loading ? (
              <Text>Loading residents...</Text>
            ) : (
              <DataTable
                rowData={residents}
                columnDefs={columnDefs}
                style={{ height: '500px', width: '100%' }}
              />
            )}
          </Stack>
        </Paper>
        
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
