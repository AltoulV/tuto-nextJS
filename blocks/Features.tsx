import styles from './Features.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import Image from 'next/image';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  features: {
    title: string,
    text: string,
    illustration: string,
  }[],
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.features}>
        {p.features.map((item, i) => {
          return (
            <li key={i} className={styles.feature}>
              <div  style={{ position: 'relative', display: "flex", justifyContent: "center" }}>
              <Image src={item.illustration} alt=""
                width={92}
                height={92}
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}/>
              </div>
              <div className={styles['feature-content']}>
                <h3 className={styles['feature-title']}>{item.title}</h3>
                <p className={styles['feature-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
