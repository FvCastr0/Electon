import { theme } from "@/styles/theme";
import { ThemeProvider } from 'styled-components';
export default function myApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}