import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href={{
            pathname: '/post',
          }}
          >
            <p>Link 1</p>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/post/[postId]',
              query: { postId: '123' },
            }}
          >
            <p>Link 2</p>
          </Link>
        </li>
        <li>
          <Link href={{
            pathname: '/post/[...date]',
            query: { date: ['2022', '04', '12'] },
          }}
          >
            <p>Link 3</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
