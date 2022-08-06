import { List, ThemeIcon, Title } from '@mantine/core';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

function IconByStatus(status) {
  return (
    <ThemeIcon color={status ? 'green' : 'grey'} size={24} radius="lg" ml={10}>
      {status ? <MdRadioButtonChecked size={16} /> : <MdRadioButtonUnchecked size={16} />}
    </ThemeIcon>
  );
}

function AppList({ title, items, default_status }) {
  return (
    <>
      <Title mt="md" order={2}>
        {title}
      </Title>
      <List
        mt="sm"
        spacing="xs"
        size="sm"
        icon={
          <ThemeIcon color="grey" size={24} radius="xl" ml={10}>
            <MdRadioButtonUnchecked size={16} />
          </ThemeIcon>
        }
      >
        {items.map(({ name, finished }) => (
          <List.Item key={name} icon={finished ? IconByStatus(finished) : null}>
            {name}
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default AppList;
