import { Group, Box, Text, ActionIcon, Avatar } from '@mantine/core';

// Import Figma assets
import imgCoLogo from '../assets/icons/happyface@2x.png';
import imgExperienceSwitcher from '../assets/icons/dotgrid.svg';
import imgPropertyIcon1 from '../assets/figma/f5dd836293abae14057f90e69cc7f4f8e54eae4a.svg';
import imgPropertyIcon2 from '../assets/figma/1663fd107cc7aee89c4852dc3fba903d77041d69.svg';
import imgArrowIcon from '../assets/figma/f163b40235e36eecfc19fa291d40f789eaf8c75a.svg';
import imgExitIcon from '../assets/icons/arrow.svg';
import imgArrowRight from '../assets/figma/3e63465c45c7ef20d33eea90b168e871d75a1c2d.svg';
import imgEducationIcon from '../assets/icons/education-icon.png';
import imgHelpIcon from '../assets/icons/help-icon.png';
import imgSettingsIcon from '../assets/icons/setting-icon.png';
import imgNotificationIcon from '../assets/icons/notification-icon.png';
import imgTechAvatar from '../assets/figma/4f423e193b1940a23e8e55793ecfd0ab4dde1ba5.png';

/**
 * @param {{ variant?: "Happy Property HPM" | "Settings" }} props
 */
export function PageHeader({ variant = "Happy Property HPM" }) {
  const isSettingsVariant = variant === "Settings";

  return (
    <Box
      bg="navy.9"
      style={{
        height: '56px',
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
        <Box style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={imgCoLogo} alt="HappyCo Logo" style={{ height: '24px', width: 'auto', display: 'block' }} />
        </Box>

        {/* Experience Switcher */}
        <img 
          src={imgExperienceSwitcher} 
          alt="Experience Switcher" 
          style={{ 
            width: '24px', 
            height: '24px', 
            display: 'block',
          }} 
        />

        {/* Exit Button - Only show for Settings variant */}
        {isSettingsVariant && (
          <Box
            bg="purple.6"
            style={{
              height: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            <Box style={{ width: 9, height: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={imgArrowRight} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>
            <Text
              size="sm"
              fw={600}
              c="white"
              style={{ whiteSpace: 'nowrap' }}
            >
              Exit settings
            </Text>
          </Box>
        )}

        {/* Property Picker - Only show for Happy Property HPM variant */}
        {!isSettingsVariant && (
        <Group gap={12} align="center">
          {/* Selected Property - Pinnacle Living */}
          <Box
            bg="purple.6"
            style={{
              height: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              paddingLeft: 8,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            <Box style={{ width: 18, height: 18, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

          {/* Other Property - Capitol Heights */}
          <Box
            bg="white"
            style={{
              height: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              paddingLeft: 8,
              paddingRight: 12,
              paddingTop: 4,
              paddingBottom: 4,
              borderRadius: 8,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Box style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <Box style={{ width: 17, height: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={imgArrowIcon} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Group>
        )}
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

