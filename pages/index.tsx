import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="styles.container">
      <Image
        className={styles.landingImage}
        src="/images/widlochers.svg"
        alt="Widl&#246;chers.com"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={styles.landingText}>Baking now, ready soon!</h1>
    </div>
  );
}
