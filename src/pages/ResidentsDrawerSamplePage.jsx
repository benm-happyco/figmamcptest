import { useState, useEffect } from 'react';
import { Stack, TextInput, Text, Group, Stepper, Button as MantineButton, Box } from '@mantine/core';
import { PageHeader } from '../components/PageHeader.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { PageContentWrapper } from '../components/PageContentWrapper.jsx';
import { MantineDataTable } from '../components/MantineDataTable.jsx';
import { Button } from '../components/Button.jsx';
import { Drawer } from '../components/Drawer.jsx';

/**
 * ResidentsDrawerSamplePage - Displays residents with different drawer types based on status
 * ACTIVE: Opens inline editing drawer
 * INACTIVE: Opens workflow stepped drawers
 * FAKE: Opens read-only details drawer
 */
export function ResidentsDrawerSamplePage() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);
  const [drawerType, setDrawerType] = useState(null); // 'active' | 'inactive' | 'fake'
  const [activeStep, setActiveStep] = useState(0); // For workflow stepped drawer
  const [editFormData, setEditFormData] = useState({}); // For inline editing drawer

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
        
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data);
          console.log('Data length:', data.length);
          if (data.length > 0) {
            console.log('First resident sample:', data[0]);
            console.log('Available fields:', Object.keys(data[0]));
          }
          
          if (data && data.length > 0) {
            // Categorize residents: assign types based on index for demo
            // In real app, this would come from the database
            const categorizedData = data.map((resident, index) => {
              const types = ['ACTIVE', 'INACTIVE', 'FAKE'];
              return {
                ...resident,
                Status: types[index % 3] // Cycle through types
              };
            });
            console.log('Categorized data:', categorizedData);
            setResidents(categorizedData);
          } else {
            console.warn('No residents found in response');
            setResidents([]);
          }
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch residents:', response.status, response.statusText);
          console.error('Error response:', errorText);
          setResidents([]);
        }
      } catch (error) {
        console.error('Error fetching residents:', error);
        setResidents([]);
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
    { field: 'Status', headerName: 'Status', width: 120 }
  ];

  const handleRowClick = (event) => {
    const resident = event.data;
    setSelectedResident(resident);
    
    // Determine drawer type based on status
    if (resident.Status === 'ACTIVE') {
      setDrawerType('active');
      setEditFormData({
        name: resident.Name || '',
        email: resident.Email || '',
        phone: resident.Phone || '',
        unit: resident.Unit || '',
        address: resident.Address || '',
        city: resident.City || '',
        state: resident.State || ''
      });
    } else if (resident.Status === 'INACTIVE') {
      setDrawerType('inactive');
      setActiveStep(0);
    } else if (resident.Status === 'FAKE') {
      setDrawerType('fake');
    }
    
    setDrawerOpened(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpened(false);
    setSelectedResident(null);
    setDrawerType(null);
    setActiveStep(0);
    setEditFormData({});
  };

  const handleSaveEdit = () => {
    console.log('Saving edited data:', editFormData);
    // Add save logic here
    handleCloseDrawer();
  };

  const handleWorkflowNext = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    } else {
      console.log('Workflow completed');
      handleCloseDrawer();
    }
  };

  const handleWorkflowBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Render drawer content based on type
  const renderDrawerContent = () => {
    if (!selectedResident) return null;

    switch (drawerType) {
      case 'active':
        // Inline editing drawer
        return (
          <Stack gap="md" style={{ padding: '24px 0' }}>
            <TextInput
              label="Name"
              value={editFormData.name || ''}
              onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
              placeholder="Enter name"
            />
            <TextInput
              label="Email"
              value={editFormData.email || ''}
              onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
              placeholder="Enter email"
            />
            <TextInput
              label="Phone"
              value={editFormData.phone || ''}
              onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
              placeholder="Enter phone"
            />
            <TextInput
              label="Unit"
              value={editFormData.unit || ''}
              onChange={(e) => setEditFormData({ ...editFormData, unit: e.target.value })}
              placeholder="Enter unit"
            />
            <TextInput
              label="Address"
              value={editFormData.address || ''}
              onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
              placeholder="Enter address"
            />
            <TextInput
              label="City"
              value={editFormData.city || ''}
              onChange={(e) => setEditFormData({ ...editFormData, city: e.target.value })}
              placeholder="Enter city"
            />
            <TextInput
              label="State"
              value={editFormData.state || ''}
              onChange={(e) => setEditFormData({ ...editFormData, state: e.target.value })}
              placeholder="Enter state"
            />
            <Group gap="sm" style={{ marginTop: '24px' }}>
              <Button
                onClick={handleSaveEdit}
                size="lg"
                radius="xxl"
                color="purple"
              >
                Save
              </Button>
              <Button
                onClick={handleCloseDrawer}
                size="lg"
                radius="xxl"
                color="purple"
                variant="light"
              >
                Cancel
              </Button>
            </Group>
          </Stack>
        );

      case 'inactive':
        // Workflow stepped drawers
        return (
          <Stack gap="md" style={{ padding: '24px 0' }}>
            <Stepper active={activeStep} onStepClick={setActiveStep} breakpoint="sm">
              <Stepper.Step label="Step 1" description="Review Information">
                <Box style={{ padding: '24px 0' }}>
                  <Text size="sm" c="dimmed" mb="md">Review the resident information:</Text>
                  <Stack gap="xs">
                    <Text><strong>Name:</strong> {selectedResident.Name || 'N/A'}</Text>
                    <Text><strong>Email:</strong> {selectedResident.Email || 'N/A'}</Text>
                    <Text><strong>Phone:</strong> {selectedResident.Phone || 'N/A'}</Text>
                    <Text><strong>Unit:</strong> {selectedResident.Unit || 'N/A'}</Text>
                  </Stack>
                </Box>
              </Stepper.Step>
              <Stepper.Step label="Step 2" description="Verify Details">
                <Box style={{ padding: '24px 0' }}>
                  <Text size="sm" c="dimmed" mb="md">Verify the following details:</Text>
                  <Stack gap="xs">
                    <Text><strong>Address:</strong> {selectedResident.Address || 'N/A'}</Text>
                    <Text><strong>City:</strong> {selectedResident.City || 'N/A'}</Text>
                    <Text><strong>State:</strong> {selectedResident.State || 'N/A'}</Text>
                  </Stack>
                </Box>
              </Stepper.Step>
              <Stepper.Step label="Step 3" description="Complete">
                <Box style={{ padding: '24px 0' }}>
                  <Text size="sm" c="dimmed" mb="md">Workflow complete! Ready to process.</Text>
                  <Text size="sm">All information has been reviewed and verified.</Text>
                </Box>
              </Stepper.Step>
            </Stepper>
            <Group gap="sm" style={{ marginTop: '24px' }}>
              {activeStep > 0 && (
                <Button
                  onClick={handleWorkflowBack}
                  size="lg"
                  radius="xxl"
                  color="purple"
                  variant="light"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleWorkflowNext}
                size="lg"
                radius="xxl"
                color="purple"
              >
                {activeStep === 2 ? 'Complete' : 'Next'}
              </Button>
            </Group>
          </Stack>
        );

      case 'fake':
        // Read-only details drawer
        return (
          <Stack gap="md" style={{ padding: '24px 0' }}>
            <Text size="lg" fw={600} mb="md">Resident Details</Text>
            <Stack gap="sm">
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Name</Text>
                <Text size="sm">{selectedResident.Name || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Email</Text>
                <Text size="sm">{selectedResident.Email || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Phone</Text>
                <Text size="sm">{selectedResident.Phone || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Unit</Text>
                <Text size="sm">{selectedResident.Unit || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Address</Text>
                <Text size="sm">{selectedResident.Address || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>City</Text>
                <Text size="sm">{selectedResident.City || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>State</Text>
                <Text size="sm">{selectedResident.State || 'N/A'}</Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" mb={4}>Status</Text>
                <Text size="sm">{selectedResident.Status || 'N/A'}</Text>
              </Box>
            </Stack>
            <Group gap="sm" style={{ marginTop: '24px' }}>
              <Button
                onClick={handleCloseDrawer}
                size="lg"
                radius="xxl"
                color="purple"
              >
                Close
              </Button>
            </Group>
          </Stack>
        );

      default:
        return null;
    }
  };

  const getDrawerTitle = () => {
    if (!selectedResident) return 'Resident Details';
    switch (drawerType) {
      case 'active':
        return `Edit Resident: ${selectedResident.Name || 'Unknown'}`;
      case 'inactive':
        return `Workflow: ${selectedResident.Name || 'Unknown'}`;
      case 'fake':
        return `Resident Details: ${selectedResident.Name || 'Unknown'}`;
      default:
        return 'Resident Details';
    }
  };

  return (
    <>
      <PageHeader variant="Happy Property HPM" />
      <Box style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>
        <Sidebar />
        <PageContentWrapper>
          <Stack gap="md" style={{ width: '100%' }}>
            <div style={{ height: '600px', width: '100%' }}>
              {loading ? (
                <div>Loading residents...</div>
              ) : residents.length === 0 ? (
                <div style={{ padding: '24px' }}>
                  <Text size="lg" c="dimmed">No residents found.</Text>
                  <Text size="sm" c="dimmed" mt="xs">
                    Check the browser console for details about the API response.
                  </Text>
                </div>
              ) : (
                <MantineDataTable
                  rowData={residents}
                  columnDefs={columnDefs}
                  spacing="Standard"
                  gridOptions={{
                    onRowClicked: handleRowClick,
                    rowSelection: 'single',
                    suppressRowClickSelection: false
                  }}
                />
              )}
            </div>
          </Stack>
        </PageContentWrapper>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={handleCloseDrawer}
        title={getDrawerTitle()}
        position="right"
        size="md"
      >
        {renderDrawerContent()}
      </Drawer>
    </>
  );
}

