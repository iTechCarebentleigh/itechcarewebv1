import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import { db } from "../../firebase";
import { Usersform,Header,Countdown } from "@/components";
import Head from "next/head";
import {Button} from '@shopify/polaris';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
    <Head>
      <title>iTech Care</title>
    </Head>
    <main >
{/* <Usersform/> */}
<Header/>
<section className=" md:h-screen px-4 ">
<div className="flex gap-4 container flex-col justify-center	  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
<div className="flex flex-col h-fit  gap-12">
  <div className="w-full lg:max-w-2xl  flex flex-col gap-8">
   <div className="w-full mt-48 xl:mt-0 flex flex-col gap-4 ">
      <h1 className="text-zinc-950 text-5xl lg:text-6xl">Bringing Your Broken Electronics Back to Life</h1>
      <p className="text-lg lg:text-2xl text-zinc-500">Give your device the  care that it deserves.</p>
   </div>
    <div className="w-fit gap-4 flex flex-row items-center">
        <Button variant="primary" size="medium">Get Free Quote</Button>
        <Button icon={
          <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
            fill="#27272A"
          />
        </svg>
        
      } size="medium">Visit us Today</Button>
    </div>
  </div>
  <div className="w-full lg:max-w-2xl">
   
<Countdown isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
  </div>
</div>
<div className=" xl:absolute right-0 bottom-0 w-full  xl:md:w-5/12">
<div className="w-full relative">
<img  src="/static-images/hero-banner.png" alt="hero-image"/>
{!isCompleted &&
  <img className="w-1/4 absolute top-8 right-24 md:right-40" src="/static-images/promo-sticker.png" alt="promo"/>

}
</div>
</div>
</div>
</section>


    </main>
    </>
  );
}
