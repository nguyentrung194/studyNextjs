import Link from 'next/link';
import styles from './layout.module.css';

const name = 'Trung Dev';

export default ({ children }) => {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <div className={styles.container}>{children}</div>
      <style jsx>{`
        a {
          padding: 10px;
        }
      `}</style>
    </>
  );
};
