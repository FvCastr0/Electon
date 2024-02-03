import NavHeader from '@/components/NavHeader';
import '@/styles/reset.css';
import { theme } from "@/styles/theme";
import { ThemeProvider } from 'styled-components';

export default function myApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavHeader />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
