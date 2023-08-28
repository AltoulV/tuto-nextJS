// `pages/_app.js`

import '../global/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box } from '@mui/system';
import profilePic from '../public/Profile.png';
import Image from 'next/image';
import BasicMenu from '../components/menu';

export default function App({ Component, pageProps }) {
  return (
        <div>
        <BasicMenu></BasicMenu>
        <Component {...pageProps} />
        </div>
  )
}
