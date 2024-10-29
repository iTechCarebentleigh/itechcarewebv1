/** @jsxImportSource @emotion/react */

import React, { useCallback, useState,useEffect  } from 'react';
import { LegacyStack, RadioButton,Button } from '@shopify/polaris';
import Bookrepair from './bookrepair/bookrepair';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Global, css } from '@emotion/react';
import Link from 'next/link';
import {
  CartIcon
} from '@shopify/polaris-icons';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Requestquote from './requestquote/requestquote';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Herocarousel = () => {

    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      if (isClicked) {
        const targetDiv = document.getElementById('scroll-container');
        if (targetDiv) {
          // Check if the viewport width is greater than 1024 pixels
          if (window.innerWidth > 1024) {
            // Get the top position of the div relative to the viewport
            const topPosition = targetDiv.getBoundingClientRect().top + window.pageYOffset;
    
            // Scroll to the top of the div with an offset of 32px
            window.scrollTo({ 
              top: topPosition - 80, // Offset the scroll by 80px
              behavior: 'smooth' 
            });
          }
        }
    
        // Reset the state after scrolling to avoid continuous scrolling
        setIsClicked(false);
      }
    }, [isClicked]);
    

  const handleClick = (e) => {
    const scrollContainer = document.getElementById('scroll-container');
    
    // Check if the clicked element is inside the scrollContainer
    if (scrollContainer && scrollContainer.contains(e.target)) {
      setIsClicked(true);
    }
  };

  const [value, setValue] = useState('Book Repair');

  const handleChange = useCallback((newValue) => {
    console.log('Selected:', newValue); // Add this line
    setValue(newValue);
  }, []);

  return (
    <section className="flex flex-col items-center relative   bg-slate-50">
        
        <div style={{zIndex:0}} className='w-full h-[520px] lg:h-[580px] absolute  top-0 '>

        <Global
        styles={css`
          .swiper-pagination {
              bottom: 200px !important; // Adjust for medium screens (e.g., tablets)

            @media (max-width: 1024px) {
              bottom: 200px !important; // Adjust for medium screens (e.g., tablets)
            }

            @media (max-width: 768px) {
              bottom: 160px !important; // Adjust for medium screens (e.g., tablets)
            }

            @media (max-width: 640px) {
              bottom: 28% !important; // Further adjust for extra small screens
            }
          }
        `}
      />


<Swiper
  spaceBetween={0}
  centeredSlides={false}
  autoplay={{
    delay: 3000,
    disableOnInteraction: true,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={false}
  modules={[Autoplay, Pagination]}
  className="h-full relative"
>
  {/* Slide 1 */}
  <SwiperSlide className="h-full w-full    lg:px-0 flex flex-col justify-center relative">
    {/* Background Image for Slide 1 */}
    <Image
    width={10000}
    alt='Book a repair'
    height={10000}
      src="/static-images/hero1.png"
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
      className="relative container mx-auto md:max-w-2xl px-4 lg:px-0 mt-28 lg:max-w-3xl xl:max-w-6xl flex flex-col gap-4"
      style={{ zIndex: 2 }}
    >
      <div className='flex flex-col gap-4'>
        <h1 className="text-3xl lg:text-5xl text-white">
          Book a repair and Give
          <span className="block"> Your Device A New Life</span>
         
        </h1>
        <p className='text-lg text-zinc-300 font-normal w-full lg:w-1/3'>Make a booking for your device’s repair so you dont miss
         out on anything</p>
      </div>
      <div>
        <Link href="/repairs"><Button fullWidth={false}>Learn More</Button></Link>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide className="h-full w-full    lg:px-0 flex flex-col justify-center relative">
    {/* Background Image for Slide 2 */}
    <Image
      width={10000}
      height={10000}
      alt='Buy a device'

      src="/static-images/hero2.png"
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
      className="relative container mx-auto md:max-w-2xl px-4 lg:px-0 mt-28 lg:max-w-3xl xl:max-w-6xl flex flex-col gap-4"
      style={{ zIndex: 2 }}
    >
      
      <div className='flex flex-col gap-4'>
        <h1 className="text-3xl lg:text-5xl text-white">
        Shop for your next
          <span className="block">device today.</span>
          
        </h1><p className='text-lg text-zinc-300 font-normal w-full lg:w-1/3'>View wide range of used and brand new devices as your
        need.</p>
      </div>
      <div>
<Link href="/products">
          <Button icon={CartIcon} fullWidth={false}><span className='ml-1'>Shop Now</span></Button>
  
</Link>      </div>
    </div>
  </SwiperSlide>

   {/* Slide 3 */}
   <SwiperSlide className="h-full w-full    lg:px-0 flex flex-col justify-center relative">
    {/* Background Image for Slide 2 */}
    <Image
      src="/static-images/hero3.png"
      width={10000}
      alt='Request a repair quote'
      height={10000}
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
      className="relative container mx-auto md:max-w-2xl px-4 lg:px-0 mt-28 lg:max-w-3xl xl:max-w-6xl flex flex-col gap-4"
      style={{ zIndex: 2 }}
    >
      <div className='flex flex-col gap-4'>
        <h1 className="text-3xl lg:text-5xl text-white">
        Get a free quote

          <span className="block">for your device today</span>
        </h1>  <p className='text-lg text-zinc-300 font-normal w-full lg:w-1/3'>Ask us for your devices’ repair estimation and we will deliver 
        it to you in no time.</p>
      </div>
      <div>
<Link href="requestquote">
          <Button fullWidth={false}>Learn More</Button>
  
</Link>      </div>
    </div>
  </SwiperSlide>
</Swiper>



           
        </div>
      <div  className="flex gap-16  flex-col pt-96 pb-16 px-4 lg:px-0 items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
            onClick={() => setIsClicked(true)}  // Set isClicked to true on click

      >
        <div id="scroll-container" style={{ zIndex: 2 }} className="w-full lg:w-[620px] bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <LegacyStack horizontal>
          <RadioButton
            label="Book Repair"
            checked={value === 'Book Repair'}
            id="Book Repair"
            name="accounts"
            onChange={() => handleChange('Book Repair')}
          />
          <RadioButton
            label="Request a quote"
            id="Request a quote"
            name="accounts"
            checked={value === 'Request a quote'}
            onChange={() => handleChange('Request a quote')}
          />
        </LegacyStack>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className="text-2xl mb-4">{value}</h1>

        {/* Conditional rendering based on the selected radio button */}
        {value === 'Book Repair' ? <Bookrepair /> : ''}
        {value === 'Request a quote' ? <Requestquote /> : ''}

      </div>
    </div>
      </div>
    </section>
  );
};

export default Herocarousel;
