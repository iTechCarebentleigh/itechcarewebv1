import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Head from "next/head";
import { Button } from '@shopify/polaris';
import Link from "next/link";
import { client } from '../../../../sanity/lib/client'; // Import the sanity client
import { useRouter } from "next/router";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });

export default function RepairPage({ repair, category, urlSegments }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (repair) {
      setIsLoading(false);
    }
  }, [repair]);

  console.log("Repair in Component:", repair);

  if (isLoading) {
    return <p>Loading...</p>; // Or any loading indicator
  }

  return (
    <>
    <NextSeo
  description={repair.metaDescription }
  title={`${category.charAt(0).toUpperCase() + category.slice(1)} - ${repair.repairItemTitle}`}
  openGraph={{
    url: 'https://www.itechcare.com.au',
    title: repair.repairItemTitle,
    description: repair.metaDescription,
    images: [
      {
        url: urlForImage(repair.coverImage).url(), // Use appropriate image URL here
        width: 1200,
        height: 630,
        alt: 'Repairs Cover Image',
      },
    ],
  }}
  
/>

      <main>
        <section className="bg-white h-fit lg:h-[540px]">
        <div className="h-full w-full    lg:px-0 flex flex-col justify-center relative">
    {/* Background Image for Slide 1 */}
    <Image
    width={10000}
    alt={repair.coverImage ? repair.coverImage.alt:''}
    height={10000}
    src={repair.coverImage ? urlForImage(repair.coverImage).url() : ''}
    className="w-full h-full absolute object-cover "
      style={{ zIndex: 0, top: 0, left: 0 }}
    />

    {/* Gradient Layer */}
    <div
      className="bg-gradient-to-r from-[rgba(24,24,27,1)] to-[rgba(24,24,27,0.8)] lg:to-[rgba(24,24,27,0.2)]  absolute h-full w-full top-0"
      style={{ zIndex: 1 }}
    ></div>

    {/* Content Layer (on top of the gradient) */}
    <div
      className="relative container mx-auto md:max-w-2xl px-4 lg:px-0 py-32 lg:max-w-3xl xl:max-w-6xl flex flex-col gap-4"
      style={{ zIndex: 2 }}
    >
      <div className='flex flex-col gap-4  w-full lg:w-2/4'>
      <div className="w-16 bg-zinc-800 h-16 rounded-full flex items-center jusitfy-center">
      <div className="flex items-center jusitfy-center mx-auto transform-scale(2)" dangerouslySetInnerHTML={{ __html: repair.icon.svg }} />

        
      </div>
        <h1 className="text-3xl lg:text-5xl text-white">
          {repair.hero.heroTitle}
         
        </h1>
        <p className='text-lg text-zinc-300 font-normal w-full '>
        {repair.hero.heroDescription}

        </p>
      </div>
      <Link href={'/bookrepair'}>
       <Button >Book Repair Now</Button>
  
</Link> 
    </div>
  </div>
        </section>
        <Footer />
      </main>
    </>
  );
}


export async function getStaticPaths() {
  try {
    // Fetch all repairs to get unique categories and slugs
    const queryPaths = `*[_type == "repairs"]{
      categoryName,
      repairs[] {
        slug {
          current
        }
      }
    }`;

    const fetchedPaths = await client.fetch(queryPaths);
    
    const paths = [];
    fetchedPaths.forEach(category => {
      const categoryName = category.categoryName;
      category.repairs.forEach(repair => {
        paths.push({
          params: { category: categoryName, slug: repair.slug.current },
        });
      });
    });

    console.log("Generated Paths:", paths); // Log the generated paths

    return {
      paths,
      fallback: 'blocking', // or true/false depending on your requirement
    };
  } catch (err) {
    console.error("Error fetching paths:", err);
    return { paths: [], fallback: 'blocking' };
  }
}
export async function getStaticProps(context) {
  const { params } = context; // { category, slug }

  try {
    const { category, slug } = params;

    console.log("Fetching data for category:", category, "and slug:", slug); // Log the current path parameters

    // Updated query to include categoryName
    const queryRepair = `*[_type == "repairs"]{
      repairs[] {
        _type,
        templateImage {
          _type,
          alt,
          asset {
            _ref,
            _type
          }
        },
        _key,
        categoryName,
        repairs[] 
      }
    }`;

    const fetchedRepairs = await client.fetch(queryRepair);

    // Check if fetchedRepairs is an array
    if (!Array.isArray(fetchedRepairs)) {
      throw new Error("Fetched repairs is not an array.");
    }

    console.log("Fetched Repairs Structure:", JSON.stringify(fetchedRepairs, null, 2));

    // Loop through the fetched repairs and find the category that matches
    let categoryRepairs = null;
    for (const repairCategory of fetchedRepairs) {
      categoryRepairs = repairCategory.repairs.find(repair => repair.categoryName === category);
      if (categoryRepairs) break; // Exit loop once found
    }

    console.log("Category Repairs:", JSON.stringify(categoryRepairs, null, 2));

    // Check if categoryRepairs exists and extract the repairs array
    const repairsArray = categoryRepairs ? categoryRepairs.repairs : [];

    // Find the specific repair that matches the slug
    const repair = repairsArray.find(repair => repair.slug.current === slug);

    return {
      props: {
        repair: repair || null, // Ensure repair is null if not found
        category:category || null
      },
      revalidate: 60, // Re-generate the page every 60 seconds if a request comes in
    };
  } catch (err) {
    console.error("Error fetching repair data:", err);
    return { props: { repair: null ,category : null} };
  }
}
