/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; // Emotion's css utility
import { motion } from "framer-motion"; // Framer Motion for animation

import { useState } from "react";
import Head from "next/head";
import { Button } from "@shopify/polaris";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Bookrepair from "@/components/bookrepair/bookrepair";
import FAQ from "@/components/faq";

export default function Bookarepair() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <Head>
        <title>Book Repair</title>
      </Head>

      <main>
        {/* Animated Gradient Section */}
        <motion.section
          css={css`
            background: linear-gradient(180deg, #460909 0%, #e02d2c 100%);
            background-size: 200% 200%; /* Ensures smooth animation */
          `}
          className="px-4"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8, // Duration of the animation
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="flex gap-16 pt-40 pb-24 container flex-col xl:flex-row justify-center items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <div className="w-full justify-center items-center flex flex-col gap-8">
              <h1 className="text-white text-center text-4xl lg:text-6xl">
                Make a repair booking
                <span className="block">for your device</span>
              </h1>
              <Button>Book Now</Button>
            </div>
          </div>
        </motion.section>

        {/* Book Repair Section */}
        <section className="bg-white dark:bg-zinc-900 dark:text-white px-4">
          <div className="container flex flex-col items-center">
            <div className="w-full lg:w-2/5 py-16">
              <Bookrepair />
            </div>
          </div>
        </section>

        <FAQ />
        <Footer />
      </main>
    </>
  );
}
