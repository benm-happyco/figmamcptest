import { Group, Box, Text, ActionIcon, Avatar } from '@mantine/core';

// Import local assets
import imgCoLogo from '../assets/logo.svg';
import imgExperienceSwitcher from '../assets/icons/ExperienceSwitcher-dotgrid.png';
import imgPropertyIcon1 from '../assets/icons/house.png';
import imgPropertyIcon2 from '../assets/icons/house.png';
import imgArrowIcon from '../assets/icons/briefcase.png'; // Using briefcase as arrow placeholder
import imgEducationIcon from '../assets/icons/education-icon.png';
import imgHelpIcon from '../assets/icons/help-icon.png';
import imgSettingsIcon from '../assets/icons/setting-icon.png';
import imgNotificationIcon from '../assets/icons/notification-icon.png';
import imgTechAvatar from '../assets/icons/Tech-avatar.png';

export function PageHeader() {
  return (
    <Box
      bg="navy.9"
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        width: '100%',
      }}
    >
      {/* Left Section */}
      <Group gap={16} style={{ flexShrink: 0 }}>
        {/* Logo */}
        <Box style={{ width: 24, height: 21 }}>
          <img src={imgCoLogo} alt="HappyCo Logo" style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>

        {/* Experience Switcher */}
        <Box style={{ width: 24, height: 24, overflow: 'hidden', position: 'relative' }}>
          <img 
            src={imgExperienceSwitcher} 
            alt="Experience Switcher" 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'block',
              position: 'absolute',
              top: '9.375%',
              left: 0,
              right: 0,
              bottom: '9.375%'
            }} 
          />
        </Box>

        {/* Property Picker */}
        <Group gap={12} align="flex-start">
          {/* Selected Property */}
          <Box
            bg="purple.6"
            style={{
              height: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              paddingLeft: 8,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 8,
              width: 160,
            }}
          >
            <Box style={{ width: 18, height: 18, flexShrink: 0 }}>
              <img src={imgPropertyIcon1} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>
            <Text
              size="sm"
              fw={600}
              c="white"
              style={{ whiteSpace: 'nowrap' }}
            >
              Pinnacle Living
            </Text>
          </Box>

          {/* Other Property */}
          <Box
            bg="white"
            style={{
              height: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              paddingLeft: 8,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 8,
              flexShrink: 0,
            }}
          >
            <Box style={{ width: 20, height: 20, flexShrink: 0 }}>
              <img src={imgPropertyIcon2} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>
            <Text
              size="sm"
              fw={600}
              c="purple.6"
              style={{ whiteSpace: 'nowrap' }}
            >
              Capitol Heights
            </Text>
            <Box style={{ width: 17, height: 10, flexShrink: 0 }}>
              <img src={imgArrowIcon} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Group>
      </Group>

      {/* Right Section */}
      <Group gap={16} justify="flex-end" style={{ flexShrink: 0 }}>
        {/* Education Icon */}
        <ActionIcon
          variant="transparent"
          size={24}
          style={{ color: 'white' }}
        >
          <img src={imgEducationIcon} alt="Education" style={{ width: '100%', height: '100%' }} />
        </ActionIcon>

        {/* Help Icon */}
        <ActionIcon
          variant="transparent"
          size={24}
          style={{ color: 'white' }}
        >
          <img src={imgHelpIcon} alt="Help" style={{ width: '100%', height: '100%' }} />
        </ActionIcon>

        {/* Settings Icon */}
        <ActionIcon
          variant="transparent"
          size={24}
          style={{ color: 'white' }}
        >
          <img src={imgSettingsIcon} alt="Settings" style={{ width: '100%', height: '100%' }} />
        </ActionIcon>

        {/* Notification Icon */}
        <ActionIcon
          variant="transparent"
          size={24}
          style={{ color: 'white' }}
        >
          <img src={imgNotificationIcon} alt="Notifications" style={{ width: '100%', height: '100%' }} />
        </ActionIcon>

        {/* User Avatar */}
        <Avatar
          src={imgTechAvatar}
          size={32}
          radius="sm"
        />
      </Group>
    </Box>
  );
}

