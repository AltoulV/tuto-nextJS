import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../public/Profile.png';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Box } from '@mui/system';

const name = 'Belledonne Escrime';
export const siteTitle = 'Belledonne Escrime';

export default function Layout({ children, home }) {
  return (
    <Box display="flex" justifyContent="center">
      <main>{children}</main>
      {!home && (
        <Box display="flex" justifyContent="center">
          <Link href="/Blog">← Back to home</Link>
          </Box>
      )}
    </Box>
  );
}
