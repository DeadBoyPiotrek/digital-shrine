import styles from './Section.module.scss';

type SectionProps = {
  children: React.ReactNode;
};

export const Section = (props: SectionProps) => {
  return <section className={styles.wrapper}>{props.children}</section>;
};
