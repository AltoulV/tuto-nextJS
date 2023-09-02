import styles from './Epilogue.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';
import Button from '../components/Button';

export default function Epilogue(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeAction?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background="accent">
      <div className={styles.header}>
        <Button onClick={() => window.location.href = 'mailto:belledonne.escrime@laposte.net'}>
        <h2 className={styles.title}>{p.title}</h2>
        </Button>
        <div className={styles.subtitle}>{p.subtitle}</div>
      </div>
    </Section>
  );
}
