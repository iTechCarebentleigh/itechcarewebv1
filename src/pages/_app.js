import "@/styles/globals.css";
import "@/style-dictionary-dist/variables.css";

import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import "@/styles/styles.scss";
import { Analytics } from "@vercel/analytics/react";
import { useLayoutEffect, useState } from "react";

// Import GSAP and Lenis
import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function App({ Component, pageProps }) {
  useLayoutEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 550);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <AppProvider i18n={translations}>
      <Analytics />
      <Component {...pageProps} />
    </AppProvider>
  );
}
