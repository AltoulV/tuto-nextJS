import * as React from 'react';
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import profilePic from '../public/Profile.png';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <Grid container spacing={2} columns={18}>
          <Grid md={1} mdOffset={7}>
            <Button id="basic-button">
              <Link href="/">Accueil</Link>
            </Button>
          </Grid>
          <Grid md={2}>
            <Image priority src={profilePic} height={200} width={200} alt=""/>
          </Grid>
          <Grid md={1}>
            <Button id="basic-button">
              <Link href="/Blog">Blog</Link>
            </Button>
            </Grid>
        </Grid>
      </div>
  );
}