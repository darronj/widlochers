/* eslint-disable comma-dangle */
import {
  Affix,
  AppShell,
  Avatar,
  Burger,
  Button,
  Center,
  Footer,
  Group,
  Header,
  MediaQuery,
  Menu,
  Text,
  Title,
  Transition,
  useMantineTheme
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import Link from 'next/link';
import { PropsWithChildren, ReactElement, useState } from 'react';
import { MdArrowUpward, MdDashboard, MdLogout, MdSettings } from 'react-icons/md';
import { signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Brand from '../Brand/Brand';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export interface WEVRShellProps extends PropsWithChildren {
  aside?: ReactElement;
  footer?: ReactElement;
  navbar?: ReactElement;
}

const WShell = ({ aside, children, footer, navbar, ...props }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  const navBarContent = navbar ?? null;
  const asideContent = aside ?? null;

  async function onLogout() {
    await signOut();
    window.location.href = '/';
  }

  return (
    <AppShell
      fixed
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={navBarContent}
      aside={asideContent}
      footer={
        footer || (
          <Footer height={60} p="md">
            <Center>
              <Text size="xs">&copy; 2022 Widl&#246;cher&apos;s</Text>
            </Center>
          </Footer>
        )
      }
      header={
        <Header height={60} pl="md" pr="md">
          <Group position="apart" mb="sm">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                aria-label="Open Page Menu"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                style={{ cursor: 'pointer' }}
                mr="xl"
                mt="md"
              />
            </MediaQuery>

            <Brand />
            <Group m={0} spacing="xs" position="center">
              <Link href="/dashboard/orders" passHref>
                <a>
                  <Title order={4} pt="xs">
                    Orders
                  </Title>
                </a>
              </Link>
              <Link href="/dashboard/customers" passHref>
                <a>
                  <Title order={4} pt="xs">
                    Customers
                  </Title>
                </a>
              </Link>
              <ColorSchemeToggle />
              <Menu>
                <Menu.Target>
                  <Avatar size="sm" mt="xs" radius={10} alt="it's me" />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    component={NextLink}
                    icon={<MdSettings />}
                    href={'/admin'}
                    rightSection={<Text mx="xs">Settings</Text>}
                    ml={5}
                  ></Menu.Item>
                  <Menu.Item
                    component={NextLink}
                    justify-content="start"
                    icon={<MdDashboard />}
                    rightSection={<Text mx="xs">Dashboard</Text>}
                    href={'/dashboard'}
                  ></Menu.Item>
                  <Menu.Item
                    component={NextLink}
                    justify-content="start"
                    icon={<MdLogout />}
                    onClick={onLogout}
                    rightSection={<Text mx="xs">Logout</Text>}
                    href={'/'}
                  ></Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Header>
      }
    >
      {children}
      <Affix position={{ bottom: 10, right: 10 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<MdArrowUpward />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
};

export default WShell;
