import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Head from "next/head"; 
import { Button } from '@shopify/polaris';
import Link from "next/link";
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });

export default function RepairPage({ repairFound, category }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (repairFound) {
      setIsLoading(false);
    }
  }, [repairFound]);

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  const repair = repairFound.repairs[0].repairs;
  console.log("Repair in Component:", repair, category);

  return (
    <>
      <NextSeo
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} - ${repair.repairItemTitle}`}
        description="hello sir" // Set your meta description here
        openGraph={{
          url: 'https://www.itechcare.com.au',
          title: repair.repairItemTitle,
          description: repair.metaDescription,
        }}
      />
      <main>
        <section className="bg-white h-fit lg:h-[540px]">
          <div className="h-full w-full lg:px-0 flex flex-col justify-center relative">
            <Image
              width={10000}
              alt={repair.coverImage ? repair.coverImage.alt : ''}
              height={10000}
              src={repair.coverImage ? urlForImage(repair.coverImage).url() : ''}
              className="w-full h-full absolute object-cover"
              style={{ zIndex: 0, top: 0, left: 0 }}
            />
            <div className="bg-gradient-to-r from-[rgba(24,24,27,1)] to-[rgba(24,24,27,0.8)] lg:to-[rgba(24,24,27,0.2)] absolute h-full w-full top-0" style={{ zIndex: 1 }}></div>
            <div className="relative container mx-auto md:max-w-2xl px-4 lg:px-0 py-32 lg:max-w-3xl xl:max-w-6xl flex flex-col gap-4" style={{ zIndex: 2 }}>
              <div className='flex flex-col gap-4 w-full lg:w-2/4'>
                <div className="w-16 bg-zinc-800 h-16 rounded-full flex items-center justify-center">
                  <div className="flex items-center justify-center mx-auto" dangerouslySetInnerHTML={{ __html: repair.icon.svg }} />
                </div>
                <h1 className="text-3xl lg:text-5xl text-white">{repair.hero.heroTitle}</h1>
                <p className='text-lg text-zinc-300 font-normal w-full'>{repair.hero.heroDescription}</p>
              </div>
              <Link href={'/bookrepair'}>
                <Button>Book Repair Now</Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  try {
    const { category, slug } = params;
    console.log("Fetching data for category:", category, "and slug:", slug);
    const queryRepair = `*[_type == "repairs"] {
      repairs[categoryName == $category] {
          repairs[slug.current == $slug][0]
      }
    }[0]`;

    const fetchedRepair = await client.fetch(queryRepair, { category, slug });

    if (!fetchedRepair) {
      return {
        notFound: true,
      };
    }

    console.log("Fetched Repair Structure:", JSON.stringify(fetchedRepair, null, 2));

    return {
      props: {
        repairFound: fetchedRepair || null,
        category: category || null
      },
    };
  } catch (err) {
    console.error("Error fetching repair data:", err);
    return { props: { repairFound: null, category: null } };
  }
}
