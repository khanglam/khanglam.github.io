import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'khangtlam@gmail.com',
    href: 'mailto:khangtlam@gmail.com'
  },

  {
    social: 'linkedin',
    link: 'khang-lam',
    href: 'https://www.linkedin.com/in/khang-lam/'
  },

  {
    social: 'github',
    link: 'khanglam',
    href: 'https://github.com/khanglam'
  }
];
const socialMediaItems = [
  {
    social: 'instagram',
    link: 'khangtlam',
    href: 'https://www.instagram.com/khangtlam'
  },
  {
    social: 'facebook',
    link: 'khanglamla',
    href: 'https://www.facebook.com/khanglamla/'
  },
  {
    social: 'strava',
    link: 'khangtlam',
    href: 'https://www.strava.com/athletes/104582696'
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}></span>&#123;
      </p>
      {contactItems.slice(0, contactItems.length - 1).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;"{item.social}": "
          <a href={item.href} target='_blank' rel='noopener'>
            {item.link}
          </a>
          ",
        </p>
      ))}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;"social_medias": &#123;
        {socialMediaItems
          .slice(0, socialMediaItems.length - 1)
          .map((item, index) => (
            <p className={styles.line} key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{item.social}": "
              <a href={item.href} target='_blank' rel='noopener'>
                {item.link}
              </a>
              ",
            </p>
          ))}
        {socialMediaItems
          .slice(socialMediaItems.length - 1, socialMediaItems.length)
          .map((item, index) => (
            <p className={styles.line} key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{item.social}": "
              <a href={item.href} target='_blank' rel='noopener'>
                {item.link}
              </a>
              "
            </p>
          ))}
        <p className={styles.line}>&nbsp;&nbsp;&nbsp;&#125;</p>
      </p>
      {contactItems
        .slice(contactItems.length - 1, contactItems.length)
        .map((item, index) => (
          <p className={styles.line} key={index}>
            &nbsp;&nbsp;&nbsp;"{item.social}": "
            <a href={item.href} target='_blank' rel='noopener'>
              {item.link}
            </a>
            "
          </p>
        ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
