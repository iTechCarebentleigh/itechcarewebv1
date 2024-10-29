/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; // Emotion's css utility
import { motion } from "framer-motion"; // Framer Motion for animation

import { useState } from "react";
import Head from "next/head";
import { Button } from "@shopify/polaris";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Bookrepair from "@/components/bookrepair/bookrepair";
import FAQ from "@/components/faq";
import MetaTags from "@/components/metatags";
import { MapComponent } from "@/components/googlemaps";

export default function Contact() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <Head>
        <title>Contact us</title>
       <MetaTags keywords="Mobile Repair, Book a repair, Make a visit today" title="Book a Repair" description="Make a booking today for your device so that you dont leave out."/>
      </Head>

      <main>
        {/* Animated Gradient Section */}
        <section className="w-full h-fit xl:h-screen bg-zinc-900">
        <div className="flex text-white gap-24 container px-4 xl:px-0 flex-col xl:flex-row py-16 xl:py-32 justify-between items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <div className="flex xl:w-2/3 flex-col gap-4 h-fit py-12 justify-end">
          <h1 className="text-5xl xl:mt-8"> Contact Us</h1>
          <div className="flex  flex-col gap-8 justify-start"><Usersform/></div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex flex-row gap-1 items-center text-sm">
            <svg
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"
    fill="#F24241"
  />
</svg>
{`${process.env.NEXT_PUBLIC_BUSINESS_CELL_NUMBER}`}

            </div>
            <div className="flex flex-row gap-1 items-center text-sm">
            <svg
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
    fill="#F24241"
  />
  <path
    d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
    fill="#F24241"
  />
</svg>

{`${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}

            </div>
            
          </div>
        </div>
        <div className="h-[230px] xl:h-4/6 w-full ">
          <MapComponent theme="dark" zoom={18}/>
          </div>        
        </div>
        </section>


        <FAQ />
        <Footer />
      </main>
    </>
  );
}
