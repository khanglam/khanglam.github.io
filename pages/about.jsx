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
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            position: 'flex', // Add relative positioning
            zIndex: 2
          }}
        >
<h2>Welcome to My Portfolio!</h2>
Hello there! Welcome to my digital space—it's a pleasure to have you here.

<h2>About Me</h2>
I'm a Software Developer on a mission to craft innovative solutions that drive real-world impact. With over 5 years of experience under my belt, I've mastered a diverse set of programming languages, including Java, Python, and JavaScript, alongside foundational knowledge in C++.

<h2>What Sets Me Apart</h2>
In the dynamic world of software automation, I've honed my skills in a plethora of cutting-edge tools and methodologies. From harnessing the power of Git for version control to orchestrating seamless testing processes with Selenium, I've embraced the latest technologies to streamline development workflows. However, my true passion lies in software development. I'm excited to transition my expertise from testing to full-fledged development, bringing with me a wealth of experience in optimizing processes and enhancing code quality.

<h2>My Mission</h2>
I'm on a mission to drive innovation and deliver excellence in every project I undertake. Take, for example, my project Youtube2Spotify—a testament to my ability to leverage APIs and authentication protocols to create seamless user experiences. With a tech stack comprising JavaScript, React, and Python, I've demonstrated my capacity to tackle complex challenges head-on and deliver tangible results.

<h2>Let's Connect!</h2>
Are you in search of a passionate Software Developer with a proven track record of success? Look no further—I'm here to bring value to your team. Reach out today, and let's explore how we can collaborate on your next groundbreaking project.          
          <div
          style={{
            justifyContent: 'center',
          }}
        >
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
