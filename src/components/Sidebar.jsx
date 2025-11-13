import { useState } from 'react';
import { Box, Stack, Text, ActionIcon, Group, useMantineTheme } from '@mantine/core';

// Import icons from assets
import imgDashboardIcon from '../assets/89c8c1ddffea9a0e02a9b7cac71935c13cd9f838.svg';
import imgUnitsAreasIcon from '../assets/4deeb686036de34dc10953487e126893f746c991.svg';
import imgVendorsIcon from '../assets/icons/vendors.svg';
import imgDocumentsIcon from '../assets/icons/documents.svg';
import imgIncidentsIcon from '../assets/icons/incidents.svg';
import imgWorkAssignmentIcon from '../assets/icons/workassignments.svg';
import imgPropertyProfileIcon from '../assets/icons/propertyprofile.svg';
import imgProcurementIcon from '../assets/icons/procurement.svg';
import imgInspectionsIcon from '../assets/icons/inspections.svg';
import imgTasksIcon from '../assets/icons/tasks.svg';
import imgProjectsIcon from '../assets/icons/projects.svg';
import imgCallManagementIcon from '../assets/icons/callcomplete.svg';
import imgInsightsIcon1 from '../assets/0e6e7fb21370fce213cc8026176c6b1aa01279ef.svg';
import imgInsightsIcon2 from '../assets/df0d6ded1bf9415e7c6ad813d2d7da14a542303c.svg';
import imgInventoryIcon from '../assets/4a9f74c56caea68eb06e223cbcd062bfb1633c7e.svg';
import imgActionIcon from '../assets/icons/action.svg';
import imgArrowLeft from '../assets/icons/arrow.svg';
import imgDropdownArrow from '../assets/icons/downarrow.svg';

/**
 * Sidebar component
 */
export function Sidebar() {
  const theme = useMantineTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        width: isCollapsed ? '60px' : '240px',
        height: '100vh',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)',
        overflow: 'visible',
        position: 'relative',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Box
        bg="white"
        style={{
          width: '100%',
          height: '100%',
          padding: isCollapsed ? '32px 8px' : '32px 14px',
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
      <Stack gap={32} style={{ width: '100%' }}>
        {/* Sidebar Header */}
        {!isCollapsed && (
          <Stack gap={8} style={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <Text
              fw={800}
              size="xl"
              c="#1a2228"
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                lineHeight: 1.5,
                width: '196px',
              }}
            >
              Capitol Heights
            </Text>
          </Stack>
        )}

        {/* Product Navigation */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          <NavItem icon={imgDashboardIcon} label="Dashboard" isCollapsed={isCollapsed} />
          <NavItem icon={imgUnitsAreasIcon} label="Units & Areas" isCollapsed={isCollapsed} />
          <NavItem icon={imgVendorsIcon} label="Vendors" isCollapsed={isCollapsed} />
          <NavItem icon={imgDocumentsIcon} label="Documents" isCollapsed={isCollapsed} />
          <NavItem icon={imgIncidentsIcon} label="Incidents" isCollapsed={isCollapsed} />
          <NavItem icon={imgWorkAssignmentIcon} label="Work Assignment" isCollapsed={isCollapsed} />
          <NavItem icon={imgPropertyProfileIcon} label="Property Profile" isCollapsed={isCollapsed} />
          <NavItem icon={imgProcurementIcon} label="Procurement" isCollapsed={isCollapsed} />
        </Box>

        {/* Apps Section */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {!isCollapsed && (
            <Text
              fw={800}
              c="#212b31"
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                paddingLeft: '12px',
                paddingBottom: '8px',
                opacity: isCollapsed ? 0 : 1,
                transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Apps
            </Text>
          )}
          <NavItem icon={imgInspectionsIcon} label="Inspections" isCollapsed={isCollapsed} hasDropdown />
          <NavItem icon={imgTasksIcon} label="Tasks" isCollapsed={isCollapsed} />
          <NavItem icon={imgProjectsIcon} label="Projects" isCollapsed={isCollapsed} hasDropdown />
          <NavItem icon={imgCallManagementIcon} label="Call Management" isCollapsed={isCollapsed} hasDropdown />
          <NavItemWithMultipleIcons
            icons={[
              { src: imgInsightsIcon1, style: { position: 'absolute', inset: '0' } },
              { src: imgInsightsIcon2, style: { position: 'absolute', inset: '28.516%' } },
            ]}
            label="Insights"
            isCollapsed={isCollapsed}
          />
          <NavItem icon={imgInventoryIcon} label="Inventory" isCollapsed={isCollapsed} hasDropdown />
          <NavItem icon={imgInventoryIcon} label="Fixed Assets" isCollapsed={isCollapsed} />
        </Box>

        {/* Favorites Section */}
        {!isCollapsed && (
          <Stack gap={8} style={{ width: '100%', opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <Group justify="space-between" style={{ paddingLeft: '12px', paddingRight: '0', width: '100%' }}>
            <Group gap={4}>
              <Text
                fw={800}
                size="md"
                c="#212b31"
                style={{
                  fontFamily: 'Proxima Nova, sans-serif',
                  lineHeight: '24px',
                }}
              >
                Favorites
              </Text>
              <Box
                bg="green.0"
                style={{
                  padding: '4px 6px',
                  borderRadius: '100px',
                  width: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  size="xxs"
                  fw={600}
                  c="green.8"
                  style={{
                    fontFamily: 'Proxima Nova, sans-serif',
                    fontSize: '10px',
                    lineHeight: 0,
                    letterSpacing: '0.8px',
                  }}
                >
                  NEW
                </Text>
              </Box>
            </Group>
            <ActionIcon
              variant="transparent"
              size={24}
              style={{
                borderRadius: '4px',
                cursor: 'pointer',
                marginLeft: '-12px',
              }}
            >
              <Box style={{ width: '24px', height: '24px', position: 'relative' }}>
                <img src={imgActionIcon} alt="Action" style={{ width: '100%', height: '100%' }} />
              </Box>
            </ActionIcon>
          </Group>
          <Box
            bg="white"
            style={{
              border: '1px dashed var(--mantine-color-gray-3)',
              borderRadius: '8px',
              padding: '32px 16px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Text
              size="xs"
              c="#1a2228"
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                fontSize: '12px',
                lineHeight: '15px',
              }}
            >
              Easily save and navigate to the pages you visit most 🌟
            </Text>
            <Text
              size="xs"
              c="#1a2228"
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                fontSize: '12px',
                lineHeight: '15px',
                textDecoration: 'underline',
              }}
            >
              Learn more about favorites
            </Text>
          </Box>
        </Stack>
        )}
      </Stack>
      </Box>

      {/* Collapse Button */}
      <ActionIcon
        bg="purple.0"
        onClick={toggleCollapse}
        style={{
          position: 'absolute',
          right: '-12px',
          top: '100px',
          width: '24px',
          height: '24px',
          borderRadius: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
          zIndex: 10,
        }}
      >
        <Box style={{ width: '10px', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={imgArrowLeft} 
            alt="Toggle collapse" 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'block',
              filter: `brightness(0) saturate(100%) invert(45%) sepia(97%) saturate(4579%) hue-rotate(232deg) brightness(101%) contrast(106%)`,
            }}
          />
        </Box>
      </ActionIcon>
    </Box>
  );
}

/**
 * Navigation Item component
 */
function NavItem({ icon, label, isCollapsed = false, hasDropdown = false }) {
  return (
    <Box
      style={{
        padding: '12px',
        height: '46px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        gap: '12px',
        margin: 0,
        marginBottom: 0,
        marginTop: 0,
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
        <Box style={{ width: '24px', height: '24px', flexShrink: 0 }}>
          <img src={icon} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
        {!isCollapsed && (
          <Text
            c="#212b31"
            style={{
              fontFamily: 'Proxima Nova, sans-serif',
              fontSize: '16px',
              lineHeight: '24px',
              whiteSpace: 'nowrap',
              opacity: isCollapsed ? 0 : 1,
              transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {label}
          </Text>
        )}
      </Box>
      {!isCollapsed && hasDropdown && (
        <Box style={{ width: '24px', height: '24px', flexShrink: 0, marginLeft: 'auto' }}>
          <img src={imgDropdownArrow} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
      )}
    </Box>
  );
}

/**
 * Navigation Item with Multiple Icons component
 */
function NavItemWithMultipleIcons({ icons, label, isCollapsed = false }) {
  return (
    <Box
      style={{
        padding: '12px',
        height: '46px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        gap: '12px',
        margin: 0,
        marginBottom: 0,
        marginTop: 0,
      }}
    >
      <Box style={{ width: '24px', height: '24px', flexShrink: 0, position: 'relative' }}>
        {icons.map((iconData, index) => (
          <Box key={index} style={iconData.style}>
            <img src={iconData.src} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
          </Box>
        ))}
      </Box>
      {!isCollapsed && (
        <Text
          c="#212b31"
          style={{
            fontFamily: 'Proxima Nova, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            opacity: isCollapsed ? 0 : 1,
            transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {label}
        </Text>
      )}
    </Box>
  );
}
