import styles from './Break.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import Button from '../components/Button';
import Image from 'next/image';
import profilePic from '../public/images/TIMELINE.png';

export default function Break(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} size="narrow" background="accent">
      <h1 className={styles.title}>{p.title}</h1>
      <div className={styles.content}>
        <div className={styles.illustration}/>
        <Image
        src={profilePic}
        alt="Picture of the author"
       />
      </div>
    </Section>
  );
}
