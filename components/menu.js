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
        <Grid container spacing={2} columns={18} justifyContent="center" alignItems="flex-end" paddingTop="40px">
          <Grid container md={1} justifyContent="center">
            <Button id="basic-button">
              <Link href="/">Accueil</Link>
            </Button>
          </Grid>
          <Grid container md={2} justifyContent="center">
            <Image priority src={profilePic} height={200} width={200} alt=""/>
          </Grid>
          <Grid container md={1} justifyContent="center">
            <Button id="basic-button">
              <Link href="/Blog">Blog</Link>
            </Button>
            </Grid>
        </Grid>
      </div>
  );
}