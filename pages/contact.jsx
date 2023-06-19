import { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import styles from '../styles/ContactPage.module.css';
import Background from '../styles/FloatingLogosBackground';
import BackgroundStyles from '../styles/HomePage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message })
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={BackgroundStyles.background}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <Background />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'fit-content',
          gap: '20px',
          position: 'flex',
          zIndex: 2
        }}
      >
        <h3 className={styles.heading}>Contact Information</h3>
        <ContactInfo />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' }
  };
}

export default ContactPage;
