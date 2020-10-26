import type { AppProps } from 'next/app'
import Head from 'next/head';
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import Header from 'sections/Header'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>	
		<Head>
			<title>Dom Digital Marketing</title>
		</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp