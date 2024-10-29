import React from 'react';
import { Button } from '@shopify/polaris';
import Link from 'next/link';

const Calltoaction = () => {
  const imageUrl = "/static-images/cta-bg.png"; // Correct way to reference public images
  console.log("Image URL:", imageUrl);

  return (
    <section className='py-10'>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex gap-16 bg-red-500 container flex-col py-24 justify-start items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
      >
                  <div className='w-full lg:w-2/3 flex items-center flex-col text-center'><h2 className="text-3xl font-normal text-white">Book your repair today</h2>
                  <p className='text-zinc-200 text-lg mt-4'>Choose iTech Care for reliable, high-quality repairs backed by excellent service and customer-focused solutions.</p>
                  <Link href={'/bookrepair'} className="mt-8">
                <Button variant='primary'>Book Repair Now</Button>
              </Link>
                  </div>
      </div>
    </section>
  );
};

export default Calltoaction;
