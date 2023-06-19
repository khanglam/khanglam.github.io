import styles from '../styles/HomePage.module.css';
import Background from '../styles/FloatingLogosBackground';

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{ position: 'absolute', zIndex: 1 }}
        >
          <Background />
        </div>
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            position: 'flex', // Add relative positioning
            zIndex: 2
          }}
        >
          <h3>
            Hello! I'm a passionate Software/AI Enthusiast and currently a
            Software QA Engineer II at Mercury Insurance Company. I thrive on
            conquering bugs and forging exciting projects in the realm of
            software development. When I'm not immersed in coding, I enjoy
            connecting with friends or diving into the captivating world of
            video games. Let's connect!
          </h3>
          <h3>
            Resume{'  ('}
            <a
              href='./KhangLam.pdf'
              download='KhangLam.pdf'
              style={{ color: 'var(--accent-color)' }}
            >
              Download
            </a>
            {')'}
          </h3>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' }
  };
}

export default AboutPage;
