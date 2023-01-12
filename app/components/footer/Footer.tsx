import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from 'react-icons/ai';
import styles from './Footer.module.scss';

const socialLinks = [
  {
    icon: <AiFillGithub />,
    link: 'https://github.com/DeadBoyPiotrek/digital-shrine',
    label: 'link to github account',
    filer: false,
  },
  {
    icon: <AiFillYoutube />,
    link: 'https://youtube.com/DeadBoyPiotrek',
    label: 'link to youtube channel',
    filer: true,
  },
  {
    icon: <AiOutlineMail />,
    link: 'mailto:DeadBoyPiotrek@example.com',
    label: 'email DeadBoyPiotrek',
    filer: true,
  },
  {
    icon: <AiFillInstagram />,
    link: 'https://youtube.com/DeadBoyPiotrek',
    label: 'link to instagram account',
    filer: true,
  },
];

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <ul className={styles.list}>
        {socialLinks.map((item, index) => {
          if (item.filer) {
            return (
              <li className={`${styles.listItem} ${styles.filer}`} key={index}>
                {item.icon}
              </li>
            );
          }
          return (
            <li className={styles.listItem} key={index}>
              <a
                href={item.link}
                target="_blank"
                aria-label={item.label}
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
