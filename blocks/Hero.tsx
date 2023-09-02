import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput'
import Image from 'next/image';
import ImageFond from '../public/images/image fond.png'
import { relative } from 'path';

export default function Hero(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  gym1: string,
  gym2: string,
  illustration: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <div>
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>
       <div className={styles.illustration} style={{ position: 'relative', width: '100%', height: '500px' }} >
          <a target="_blank" href="https://www.google.fr/maps/dir/Gymnase+jean-paul+roche,+Boulevard+de+la+R%C3%A9publique,+Froges/Gymnase+Lionel+Terray,+Rue+Victor+Favier,+38190+Villard-Bonnot/@45.260948,5.8979916,14.58z/data=!4m14!4m13!1m5!1m1!1s0x478a5bfbe1396e5f:0xa4bcd727de5882b4!2m2!1d5.9238496!2d45.2718041!1m5!1m1!1s0x478a5bdf1bc71cd7:0x42dde19daeeb482c!2m2!1d5.8969847!2d45.2445193!3e1?entry=ttu" rel="noopener noreferrer">
                <Image src={p.illustration} alt=""
                fill
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}/>
                  </a>
          </div>
    </Section>
    </div>
  );
}
