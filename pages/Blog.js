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
import Footer from '../blocks/Footer';
import Global from '../global/global.json';

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
    <div >
           <Layout home>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {allPostsData.map(({ id, date, title, img }) => (
                  <Grid xs={4} sm={4} md={4} key={id}>
                        <Image
                          src={img}
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                          }}
                          width={500}
                          height={300}
                        />
                    <br />
                    <div className={utilStyles['benefit-content']}>
                    <h3 className={utilStyles['benefit-title']}><Link href={`/posts/${id}`}>{title}</Link></h3>
                    </div>
                    <small className={utilStyles.subtitle}>
                      <Date dateString={date} />
                    </small>
                  </Grid>
                  ))}
              </Grid>
          </Layout>
      </div>
  );
}