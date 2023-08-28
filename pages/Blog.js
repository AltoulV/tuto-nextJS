import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import BasicMenu from '../components/menu';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box } from '@mui/system';
import profilePic from '../public/Profile.png';
import Image from 'next/image';
import cx from '../utils/cx';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {

  return (
    <div className={utilStyles['container']}>
           <Layout home>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {allPostsData.map(({ id, date, title }) => (
                  <Grid xs={4} sm={4} md={4} key={id}>
                    <small className={utilStyles.subtitle}>
                      <Date dateString={date} />
                    </small>
                    <br />
                    <div className={utilStyles['benefit-content']}>
                    <h3 className={utilStyles['benefit-title']}><Link href={`/posts/${id}`}>{title}</Link></h3>
                    </div>
                  </Grid>
                  ))}
              </Grid>
          </Layout>

      </div>
  );
}