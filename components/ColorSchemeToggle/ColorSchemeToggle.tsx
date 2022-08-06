/* eslint-disable comma-dangle */
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" mt="xs">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        aria-label={colorScheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
        })}
      >
        {colorScheme === 'dark' ? (
          <MdOutlineLightMode width={20} height={20} />
        ) : (
          <MdOutlineDarkMode width={20} height={20} />
        )}
      </ActionIcon>
    </Group>
  );
}

export default ColorSchemeToggle;
