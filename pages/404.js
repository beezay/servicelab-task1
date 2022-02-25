/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Ooooops</h1>
      <h2>That Page cannot be found.</h2>
      <p>
        Go Back to the
        <Link href='/'>
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
