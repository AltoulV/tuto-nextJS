import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../public/Profile.png';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Box } from '@mui/system';
import Footer from '../blocks/Footer';
import Global from '../global/global.json';
import Button from './Button';

const name = 'Belledonne Escrime';
export const siteTitle = 'Belledonne Escrime';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <Box display="flex" justifyContent="center" className={styles.backToHome}>
                      <Button id="basic-button">
          <Link href="/Blog">← Retour aux articles</Link>
          </Button>
          </Box>
      )}

        </div>
  );
}
