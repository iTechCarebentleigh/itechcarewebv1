import { useState,useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Head from "next/head";
import { Button } from '@shopify/polaris';
import Link from "next/link";
import FAQ from "@/components/faq";
import Tabs from "@/components/tabs";
import Repairindicator from "@/components/repairs/repairindicator";
import { useRouter } from "next/router";
import { client } from '../../../sanity/lib/client';
import { NextSeo } from 'next-seo';
import { urlForImage } from "../../../sanity/lib/image";

const inter = Inter({ subsets: ["latin"] });
 
export default function Repairs({repairPage}) {
  const [activeTab, setActiveTab] = useState(repairPage.repairs[0].categoryName);
  const router=useRouter()
  const [isMobile, setIsMobile] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);





  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which index is hovered
  const handleHoverChange = (index) => {
    setHoveredIndex(index);
  };
  const tabs = repairPage.repairs.map(repair => ({
    id: repair.categoryName,
    label: `${repair.categoryName}`,
  }));

  const repairsData = {
   
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);


  const repairs = repairsData[activeTab] || [];


  return (
    <>
     
      <NextSeo       
       description={repairPage.metaDescription} title={repairPage.title}
       openGraph={{
        url: 'https://www.itechcare.com.au',
        title: repairPage.title,
        description: repairPage.metaDescription,
        images: [
          {
            url: urlForImage(repairPage.coverImage).url(),
            width: 1200,
            height: 630,
            alt: 'Repairs Cover Image',
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: repairPage.metaTags,
        },
      ]}
       />
      <main>
        <section className="bg-white px-4 bg-zinc-100 ">
          <div className="flex gap-0 container flex-col gap-4 lg:flex-row justify-between items-end mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <div className="w-full xl:w-2/4 py-28 xl:py-36 justify-center items-start flex justify-between flex-col gap-2">
              <h1 className="text-3xl lg:text-5xl w-fit text-start">
                Delivering <span className="text-[var(--colors-brand-primary-500)]">exceptional</span> repair service since <span className="text-[var(--colors-brand-primary-500)]">ages</span>.
              </h1>
              <p className="text-xl mb-2 text-zinc-500">Quick and reliable, our repair services will have your mobile devices, tablets, and laptops up and running in no time.</p>
              <Link href={'/bookrepair'} className="mt-4">
                <Button variant="primary">Book Repair Now</Button>
              </Link>
            </div>
            <div className="h-full xl:w-[40%]">
              <Image src={"/static-images/repair-hero.png"} width={1000} height={1000} alt="repair hero image" />
            </div>
          </div>
        </section>
        <section className="bg-zinc-900">
          <div className="flex gap-0 text-white px-4 md:px-0 container flex-col gap-8 py-24 justify-between items-start mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <h2 className="text-3xl font-normal">Covering all your <span className="block">device repairs</span></h2>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
              <div className="flex flex-col gap-16 w-full lg:w-1/2 items-center h-fit">
                <div className="w-full">
                  <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                </div>
                <div className="w-full h-full xl:w-[480px]  flex items-start relative">
                  <Image 
                  src={
                    urlForImage(
                        repairPage.repairs
                            .filter(repair => repair.categoryName === activeTab)[0]?.templateImage
                    )?.url() || ''
                }
                  width={1000} height={1000} 
                  alt={repairPage.repairs
                    .filter(repair => repair.categoryName === activeTab)[0]?.templateImage.alt} />
                  {repairPage.repairs
  .find(repair => repair.categoryName === activeTab)?.repairs?.map((repair, index) => (

<div 
  key={repair.repairItemTitle} 
  className={`absolute w-12`} 
  style={{ 
    top: `${repair.icon.position.top}%`, 
    left: `${repair.icon.position.left}%`, 
    right: `${repair.icon.position.right}%`, 
    bottom: `${repair.icon.position.bottom}%` 
  }}
>
<Link href={`/repairs/${activeTab}/${repair.slug.current}`} key={repair.repairItemTitle}>

  <Repairindicator 
                      variant="icon" 
                      size={44} 
                      icon={repair.icon.svg}
                      isHovered={hoveredIndex === index}
                      onHoverChange={(isHovered) => handleHoverChange(isHovered ? index : null)} // Pass the index if hovered, null otherwise
                    />
                    </Link>
                  </div>
      ))}
                  
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                  <h4 className="text-3xl font-normal">What we fix for you...</h4>
                  <p className="text-lg font-normal text-zinc-200">There is almost anything that we can repair for you.</p>
              </div>

              <div className="flex flex-col gap-2">

              {repairPage.repairs
  .find(repair => repair.categoryName === activeTab)?.repairs?.map((repair, index) => (
                          <Link href={`/repairs/${activeTab}/${repair.slug.current}`} key={repair.repairItemTitle}>
                          <Repairindicator 
                          key={repair.repairItemTitle}     
                          variant="long" 
                          // onClick={() => handleClick(repair.slug.current)} // Use an arrow function here
                          size={44} 
                          text={repair.repairItemTitle}
                          icon={repair.icon.svg}
                          isHovered={hoveredIndex === index}
                          onHoverChange={(isHovered) => handleHoverChange(isHovered ? index : null)} // Pass the index if hovered, null otherwise
                        /></Link>

                  
      ))}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white px-4 md:px-0 flex bg-[var(--colors-brand-primary-600)]">
        <div className="flex py-16 gap-0 container flex-col gap-4 lg:flex-row justify-between items-end mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <div className="flex flex-col xl:flex-row gap-10 items-start xl:items-center w-full">
          <div className="flex flex-col gap-4 w-full xl:w-1/3">
            <h2 className="text-3xl font-normal">Choose iTech Care for <span className="block">top-tier repair benefits.</span></h2>
            <p className="text-lg text-zinc-100 font-normal">Choose iTech Care for reliable, high-quality repairs backed by excellent service and customer-focused solutions.</p>
            <Link href={'/bookrepair'} className="mt-4">
            <Button variant="primary">Book Repair Now</Button>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full xl:w-2/3">
            <div className="w-full  xl:w-1/3 flex flex-col h-[680px] md:h-[1080px] lg:h-[480px]  bg-zinc-900">
            <div className="h-5/6 overflow-hidden w-full"><img alt="Skilled Technicians" className="w-full" src="/static-images/technician.png"/></div>
            <div className="h-1/6 p-4">
            <h4 className="text-xl lg:text-lg text-white">Skilled repair technician</h4>
            </div>
            </div>
            <div className="w-full  xl:w-1/3 flex flex-col h-[580px] md:h-[480px]  bg-zinc-900">
            <div className="h-5/6 overflow-hidden w-full"><img alt="Genuine Repair Parts" className="w-full" src="/static-images/parts-genuine.png"/></div>
            <div className="h-1/6 p-4">
            <h4 className="text-xl lg:text-lg text-white">Only high quality parts</h4>
            </div>
            </div>
            <div className="w-full  xl:w-1/3 flex flex-col h-[580px] md:h-[480px]  bg-zinc-900">
            <div className="h-5/6 overflow-hidden w-full"><img className="w-full" alt="quality warranty" src="/static-images/warranty.png"/></div>
            <div className="h-1/6 p-4">
            <h4 className="text-xl lg:text-lg text-white">Quality Guarantee</h4>
            </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        <FAQ />
        <Footer />
      </main>
    </>
  );
}


export async function getServerSideProps() {
  try {
    const queryrepairs = `*[_type == "repairs"]`;
    const fetchedRepairs = await client.fetch(queryrepairs);
    
    return {
      props: {
        repairPage: fetchedRepairs[0], // Pass the data as props
      },
    };
  } catch (err) {
    console.error("Error fetching data:", err);
    return { props: { repairPage: null } };
  }
}