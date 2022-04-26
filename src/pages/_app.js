import PageLoading from '@components/PageLoading';
import { ThemeProvider } from '@mui/material';
import '@styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from 'theme';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <PageLoading open={loading} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
