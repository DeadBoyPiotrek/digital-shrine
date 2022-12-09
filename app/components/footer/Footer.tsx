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
          <a target={'blank'} href="https://github.com/DeadBoyPiotrek">
            <AiFillGithub />
          </a>
        </li>
        <li className={styles.listItem}>
          <a target={'blank'} href="https://github.com/DeadBoyPiotrek">
            <AiFillYoutube />
          </a>
        </li>
        <li className={styles.listItem}>
          <a target={'blank'} href="https://github.com/DeadBoyPiotrek">
            <AiOutlineMail />
          </a>
        </li>
        <li className={styles.listItem}>
          <a target={'blank'} href="https://github.com/DeadBoyPiotrek">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
