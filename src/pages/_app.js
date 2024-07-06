import "@/styles/globals.css";
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import "@/styles/styles.scss"

export default function App({ Component, pageProps }) {
  return <AppProvider i18n={translations}>
  <Component {...pageProps} />
</AppProvider>;
}
