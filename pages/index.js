import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className=' flex justify-evenly place-content-center hover:scale-x-105'>
      <Link href='/coindesk'>
        <button className={styles.btn}>View Coin Desk List</button>
      </Link>
    </div>
  );
}
