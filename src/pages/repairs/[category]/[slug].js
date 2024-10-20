import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import { db } from "../../firebase";
import { Usersform,Header,Countdown,Footer } from "@/components";
import Head from "next/head";
import {Button} from '@shopify/polaris';
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Slug() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
    <Head>
      <title>iTech Care</title>
    </Head>
    <main >

<section className="bg-white px-4">
<div className="flex gap-16 py-60 container flex-col xl:flex-row  justify-center items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="w-full md:w-4/5 lg:w-2/5  justify-center items-center flex flex-col gap-2">
  <h1 className="text-7xl w-fit text-center">Slug  
   </h1>
   <p className="text-xl mb-10">Page Not Found</p>
   <Link href={'/'}>
   <Button  >Go back home</Button>
   </Link>
   

  </div>

</div>
</section>
<Footer/>
    </main>
    </>
  );
}
