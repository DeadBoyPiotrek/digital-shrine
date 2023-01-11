'use client';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from 'react-icons/ai';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            target={'blank'}
            href="https://github.com/DeadBoyPiotrek"
            aria-label={'link to github account'}
          >
            <AiFillGithub />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            target={'blank'}
            href="https://github.com/DeadBoyPiotrek"
            aria-label={'link to github account'}
          >
            <AiFillYoutube />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            target={'blank'}
            href="https://github.com/DeadBoyPiotrek"
            aria-label={'link to github account'}
          >
            <AiOutlineMail />
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            target={'blank'}
            href="https://github.com/DeadBoyPiotrek"
            aria-label={'link to github account'}
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
