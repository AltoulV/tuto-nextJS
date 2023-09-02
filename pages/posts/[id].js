import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }
  

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <div>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Image
                          src={postData.img}
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
        <article className={utilStyles['container']}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <br />
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
      </div>
    );
  }
  
  
