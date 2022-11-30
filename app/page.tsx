import { Section } from './components/section/Section';
import { SplineBg } from './components/SplineBg';
import styles from './page.module.scss';
const page = () => {
  return (
    <div className={styles.wrapper}>
      <Section>
        <h1>Welcome to Next.js!</h1>
        <p>Cze</p>
      </Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <Section>f</Section>
      <div className={styles.splineBg}>
        <SplineBg />
      </div>
    </div>
  );
};

export default page;
