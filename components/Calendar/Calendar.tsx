import { Calendar } from '@mantine/dates';
import { useState } from 'react';

export default function WidlockersCalendar() {
  const [value, setValue] = useState(new Date());
  const [cakes, setCakes] = useState([]);

  return (
    <Calendar
      value={value}
      onChange={setValue}
      month={value}
      fullWidth
      size="xl"
      styles={(theme) => ({
        cell: {
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`
        },
        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
        weekday: { fontSize: theme.fontSizes.lg },
        weekdayCell: {
          fontSize: theme.fontSizes.xl,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
          height: 70
        }
      })}
    />
  );
}
