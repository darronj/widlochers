import Image from 'next/image';
import styles from '../../styles/ComingSoon.module.css';

function ComingSoon() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src="/images/widlochers.svg"
        alt="Widl&#246;cher's Coming Soon"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={styles.landingText}>Baking now, ready soon!</h1>
    </div>
  );
}

export default ComingSoon;
