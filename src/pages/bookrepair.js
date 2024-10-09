import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import { db } from "../../firebase";
import { Usersform,Header,Countdown,Footer } from "@/components";
import Head from "next/head";
import {Button} from '@shopify/polaris';
import Link from "next/link";
import Bookrepair from "@/components/bookrepair/bookrepair";


const inter = Inter({ subsets: ["latin"] });

export default function Bookarepair() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
    <Head>
      <title>Book Repair</title>
    </Head>
    <main >
    
<section className="bg-zinc-800 px-4">
<div className="flex gap-16 pt-40 pb-8 container flex-col xl:flex-row  justify-center items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="w-full md:w-4/5 lg:w-2/5  justify-center items-center flex flex-col gap-2">
  <h1 className="text-white text-4xl lg:text-6xl">Book a Repair</h1>
  </div>
</div>
</section>
<section className="bg-white px-4">
<div className="container flex flex-col items-center"><div className="w-full lg:w-2/5 py-44"><Bookrepair/></div></div>
</section>
<Footer/>
    </main>
    </>
  );
}
