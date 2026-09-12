/* eslint-disable react/jsx-props-no-spreading */
import '@src/styles/v1global.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
