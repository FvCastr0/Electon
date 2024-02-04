import NavHeader from '@/components/NavHeader';
import '@/styles/reset.css';
import { theme } from "@/styles/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';

export default function myApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavHeader />

      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </ThemeProvider>
  )
}
