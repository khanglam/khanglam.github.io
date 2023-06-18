import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Background from '../styles/FloatingLogosBackground';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <Background />
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Khang Lam</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <Link href='/projects'>
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href='/contact'>
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
        <div className={styles.foreground}>
          <div className={styles.selfie_frame}>
            <Image
              className={styles.selfie}
              src='/Me.jpg'
              width='300'
              height='290'
              alt='Khang Lam'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' }
  };
}
