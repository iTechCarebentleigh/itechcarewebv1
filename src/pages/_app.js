import "@/styles/globals.css";
import "@/style-dictionary-dist/variables.css";
import '@arco-design/web-react/dist/css/arco.css';
import { Toaster } from 'sonner'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import "@/styles/styles.scss";
import { Analytics } from "@vercel/analytics/react";
import { useLayoutEffect, useState } from "react";
import { Header } from "@/components";
// Import GSAP and Lenis
import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
// gsap.registerPlugin(ScrollTrigger);


export default function App({ Component, pageProps }) {

 
  return (
    <AppProvider i18n={translations}>
      <Analytics />
      <DefaultSeo {...SEO} />

      <Toaster richColors  />
      <Header/>
      <Component {...pageProps} />
    </AppProvider>
  );
}