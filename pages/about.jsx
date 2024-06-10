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
Passionate and skilled Software Developer with a strong foundation in Java, Python, and JavaScript, and over 5 years of experience in software automation. Demonstrated expertise in automated testing and agile methodologies, with hands-on full-stack development experience through personal and academic projects. Proven track record of optimizing processes and enhancing code quality. Seeking to leverage my technical skills and project experience to contribute to innovative software development projects at a dynamic tech company.
          </h3>
          <h3>
            Resume{'  ('}
            <a
              href='./Khang-Lam.pdf'
              download='Khang-Lam.pdf'
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
