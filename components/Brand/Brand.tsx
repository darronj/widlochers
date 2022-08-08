import { Box, Title, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import styles from '../../styles/Brand.module.css';

function Brand() {
  const theme = useMantineTheme();
  
  return (
    <Box ml="sm" pt="xs">
      <Link href="/" passHref>
        <span className={styles.brand}>Widl&#246;cher&apos;s</span>
      </Link>
    </Box>
  );
}

export default Brand;
