import styles from './Link.module.scss';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const Link = ({ href, children }: LinkProps) => (
  <a
    href={href.startsWith('http') ? href : `https://${href}`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    {children}
  </a>
);
