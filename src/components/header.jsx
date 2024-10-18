/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Cascader, Space ,Divider} from '@arco-design/web-react';
import { Sling as Hamburger } from 'hamburger-react'

import { useState, useEffect } from "react";
import { Button } from '@shopify/polaris';
import Link from "next/link";

const Customnav = ({ href, children, className = "" }) => (
  <Link href={href} className={`text-black w-full text-base hover:underline ${className}`}>
    {children}
  </Link>
);

const options = [
  {
    value: 'Phone Repair',
    label: 'Phone Repair',
    children: [
      {
        value: 'Screen Repair',
        label: <Customnav href="/datunli">Screen Repair</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
    ],
  },
  {
    value: 'Tablet Repair',
    label: 'Tablet Repair',
    children: [
      {
        value: 'Screen Repair',
        label: <Customnav href="/datunli">Screen Repair</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
       {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
    ],
  },
  {
    value: 'Laptop Repair',
    label: 'Laptop Repair',
    children: [
      {
        value: 'Screen Repair',
        label: <Customnav href="/datunli">Screen Repair</Customnav>, // Make this a link
      
      },
      {
        value: 'Charging port',
        label: <Customnav href="/datunli">Datunli</Customnav>, // Make this a link
      
      },
    ],
  },
];

const CustomLink = ({ href, children, className = "" }) => (
  <Link href={href} className={`text-white text-lg hover:underline ${className}`}>
      {children}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled,setISToggled]=useState(false)
  let touchStartY = 0; // To track the starting point of touch on mobile

  useEffect(() => {
    const handleWheel = (event) => {
      // event.deltaY > 0 indicates a downward scroll
      if (event.deltaY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleTouchStart = (event) => {
      // Get the initial touch Y position when the user starts touching the screen
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const touchEndY = event.touches[0].clientY;

      if (touchStartY > touchEndY) {
        // User is scrolling down (startY > endY)
        setIsScrolled(true);
      } else {
        // User is scrolling up (startY < endY)
        setIsScrolled(false);
      }
    };

    // Add event listeners for both wheel (desktop) and touchmove (mobile)
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);


  const handleCall = () => {
    window.location.href = `tel:${process.env.NEXT_PUBLIC_BUSINESS_CELL_NUMBER}`;
  };

  return (
    <>
      <header className={ `gap-6  w-full transition-height duration-300  z-50  px-4 text-white  bg-zinc-950 bg-opacity-40 backdrop-blur-md fixed border-b border-zinc-700 `}>
        <div className=" container mx-auto w-full md:max-w-2xl py-2  lg:max-w-3xl xl:max-w-6xl flex flex-col">
        <div className='flex flex-row justify-between'>
          <div
    className='overflow-hidden w-12 lg:w-fit'
  >
      <Link
    href={'/'}
    onClick={() => {
      if (isToggled) {
        // Only set toggled if isToggled is true
        setISToggled(!isToggled);
      } else {
        // Optionally, handle the case when isToggled is false
        // For example, you might want to prevent default behavior
        // or perform another action.
      }
    }}
  >
            <svg
    width={218}
    height={44}
    viewBox="0 0 218 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_125_638)">
      <path
        d="M39.1876 26.0435C38.3508 26.0435 37.6187 26.6038 37.4025 27.4097L35.798 33.3816C35.5817 34.1875 34.849 34.7477 34.0128 34.7477H31.8662C30.6507 34.7477 29.7661 33.5978 30.081 32.4272L31.1727 28.3641C31.487 27.1934 30.6023 26.0435 29.3875 26.0435H25.5243C24.3089 26.0435 23.4242 24.8937 23.7391 23.723L24.3493 21.4519C24.5656 20.646 25.2983 20.0858 26.1345 20.0858H31.9789C32.8158 20.0858 33.5478 19.5255 33.7641 18.7196L35.3557 12.7942C35.5719 11.9883 36.3046 11.428 37.1409 11.428H39.2875C40.5029 11.428 41.3876 12.5779 41.0727 13.7485L39.9939 17.7652C39.6796 18.9359 40.5636 20.0858 41.779 20.0858H44.0335C43.0606 8.83189 33.5944 0 22.0587 0C9.87609 0 0 9.84981 0 22C0 34.1502 9.87609 44 22.0587 44C32.8562 44 41.8409 36.2624 43.7443 26.0435H39.1876Z"
        fill="#E02D2C"
      />
      <path
        d="M21.3346 37.7935H12.416C10.569 37.7935 9.473 36.3002 9.968 34.4581L15.7628 12.8889C16.2578 11.0467 18.1563 9.55347 20.0034 9.55347H28.9219C30.769 9.55347 31.865 11.0467 31.37 12.8889L25.5752 34.4581C25.0802 36.3002 23.1817 37.7935 21.3346 37.7935Z"
        fill="#030712"
      />
      <path
        d="M19.1567 35.685H10.2381C8.39107 35.685 7.29508 34.1917 7.79008 32.3496L13.5849 10.7804C14.0799 8.93822 15.9784 7.44495 17.8255 7.44495H26.744C28.5911 7.44495 29.6871 8.93822 29.1921 10.7804L23.3973 32.3496C22.9023 34.1917 21.0037 35.685 19.1567 35.685Z"
        fill="white"
      />
      <path
        d="M19.1567 36.1732H10.2382C9.2108 36.1732 8.3372 35.773 7.77849 35.0459C7.19588 34.2883 7.0317 33.2862 7.31779 32.2231L13.1126 10.6539C13.3791 9.66223 14.0125 8.73291 14.8953 8.03821C15.7824 7.34046 16.8226 6.95615 17.8255 6.95615H26.7441C27.7714 6.95615 28.645 7.35634 29.2037 8.08342C29.7863 8.84105 29.9505 9.84369 29.665 10.9062L23.8702 32.4754C23.6038 33.4671 22.9703 34.3964 22.0875 35.0911C21.2004 35.7889 20.1602 36.1726 19.1573 36.1726L19.1567 36.1732ZM17.8255 7.93312C16.1886 7.93312 14.4983 9.26691 14.0579 10.9068L8.26307 32.4761C8.05784 33.2392 8.16199 33.9406 8.55529 34.452C8.92531 34.9329 9.52262 35.1974 10.2388 35.1974H19.1573C20.7943 35.1974 22.4845 33.8636 22.925 32.2237L28.7198 10.6545C28.925 9.89135 28.8209 9.18993 28.4275 8.67853C28.0575 8.19768 27.4602 7.93312 26.7441 7.93312H17.8255Z"
        fill="#030712"
      />
      <path
        d="M23.4702 10.2543H19.2082C18.9153 10.2543 18.7414 10.0172 18.8198 9.72517C18.8982 9.43312 19.199 9.19604 19.4924 9.19604H23.7544C24.0473 9.19604 24.2213 9.43312 24.1429 9.72517C24.0644 10.0172 23.7636 10.2543 23.4702 10.2543Z"
        fill="#030712"
      />
      <path
        d="M55.8455 14.1769L55.8099 10.2708H59.6633V14.1769H55.8455ZM55.8455 35.1999V16.1381H59.6989V35.1999H55.8455Z"
        fill="white"
      />
      <path
        d="M69.2968 35.1608V14.1769H61.1618V10.2708H81.2503V14.1769H73.1153V35.1608H69.2974H69.2968Z"
        fill="white"
      />
      <path
        d="M79.3861 25.6348C79.3861 19.9709 82.7788 16.1461 88.2367 16.1461C93.1781 16.1461 96.6449 19.0886 96.6449 24.0902C96.6449 25.0464 96.534 26.0393 96.4238 26.591H83.1115C83.2591 29.938 84.4758 31.6299 88.3108 31.6299C91.3715 31.6299 92.5514 30.6003 92.5514 28.9452V28.6507H96.4973V28.9818C96.4973 32.7333 93.2155 35.1608 88.2734 35.1608C82.2256 35.1608 79.3861 31.336 79.3861 25.6348ZM83.1476 23.943H92.8461C92.9937 20.8165 91.2973 19.4925 88.1626 19.4925C84.6963 19.4925 83.3688 21.111 83.147 23.943H83.1476Z"
        fill="white"
      />
      <path
        d="M98.9471 25.6892C98.9471 19.9996 102.296 16.1821 108.038 16.1821C112.859 16.1821 116.172 19.1552 116.172 23.5232V23.8538H112.234V23.6338C112.234 20.954 110.835 19.743 107.781 19.743C104.248 19.743 102.886 21.725 102.886 25.6892C102.886 29.6533 104.248 31.5987 107.781 31.5987C110.835 31.5987 112.234 30.4244 112.234 27.7445V27.5246H116.172V27.8551C116.172 32.1865 112.822 35.1962 107.891 35.1962C102.186 35.1962 98.9471 31.3421 98.9471 25.6892Z"
        fill="white"
      />
      <path
        d="M117.931 35.1999V10.269H121.992V19.7949H122.142C123.007 18.1202 125.104 16.1388 128.487 16.1388C133.375 16.1388 135.339 19.4974 135.339 23.5537V35.2005H131.278V24.4837C131.278 21.1721 130.226 19.7949 126.804 19.7949C123.383 19.7949 121.992 21.0603 121.992 24.5576V35.1999H117.932H117.931Z"
        fill="white"
      />
      <path
        d="M143.312 22.7155C143.312 15.1764 147.58 10.2708 154.633 10.2708C161.143 10.2708 165.085 13.8781 165.085 19.6856V19.9018H160.926V19.6856C160.926 16.3025 159.111 14.2202 154.554 14.2202C149.402 14.2202 147.471 16.8512 147.471 22.7155C147.471 28.9922 149.497 31.4087 154.524 31.4087C159.082 31.4087 160.926 29.7132 160.926 25.7454V25.5291H165.085V25.7454C165.085 31.5529 161.143 35.1602 154.633 35.1602C147.58 35.1602 143.312 30.2545 143.312 22.7155Z"
        fill="white"
      />
      <path
        d="M166.547 30.2771C166.547 27.2661 168.756 25.6873 172.659 25.1362L179.065 24.1819V23.1902C179.065 20.4731 177.813 19.6654 174.941 19.6654C172.069 19.6654 170.891 20.5831 170.891 23.0069V23.4694H167.062V23.1902C167.062 19.1143 170.266 16.1766 175.162 16.1766C180.059 16.1766 182.857 19.2609 182.857 23.7041V35.1608H179.176V31.9292H178.992C177.924 33.6553 175.826 35.1608 172.364 35.1608C169.088 35.1608 166.547 33.472 166.547 30.2771ZM173.653 32.0026C176.23 32.0026 179.065 30.9743 179.065 27.3022V26.9717L173.247 27.8527C171.148 28.1466 170.412 28.6238 170.412 29.9826C170.412 31.4148 171.332 32.0019 173.652 32.0019L173.653 32.0026Z"
        fill="white"
      />
      <path
        d="M200.734 25.6311C200.734 19.9648 204.128 16.1388 209.589 16.1388C214.532 16.1388 218 19.0825 218 24.0859C218 25.0427 217.889 26.0362 217.779 26.588H204.461C204.609 29.9362 205.826 31.6286 209.663 31.6286C212.725 31.6286 213.905 30.5985 213.905 28.9427V28.6482H217.852V28.9794C217.852 32.7321 214.569 35.1608 209.625 35.1608C203.575 35.1608 200.734 31.3341 200.734 25.6311ZM204.497 23.9387H214.2C214.348 20.811 212.651 19.487 209.515 19.487C206.046 19.487 204.719 21.1061 204.497 23.9387Z"
        fill="white"
      />
      <path
        d="M185.196 35.2005V16.1498H188.979V19.1595H189.17C189.934 17.4066 191.756 16.1473 194.545 16.1473C198.519 16.1473 199.982 18.7789 199.982 22.322V23.5794H195.856V22.8175C195.856 20.3027 195.13 19.3886 192.723 19.3886C190.316 19.3886 189.322 20.3412 189.322 22.856V35.2011H185.196V35.2005Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_125_638">
        <rect width={218} height={44} fill="white" />
      </clipPath>
    </defs>
  </svg>
  
  
    </Link>
          
            </div>
            <div className="flex flex-row gap-8 ">
              <div className=" flex-row gap-8 hidden xl:flex items-center">
  <div className="flex flex-row">
                  <CustomLink href={'/repairs'}>Repairs</CustomLink>
                  <Space size='small'> 
                  <Cascader
          style={{ width: 24 }}
          dropdownColumnRender={(menu, level) => {
            return (
              <div
                style={{
                  height: 'fit-content',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flex: 1 }} >
                  {menu}
                </div>
                
              </div>
            );
          }}
          options={options}
        />   </Space>     
  </div>  
      
  <CustomLink href={'/products'}>Product Listings</CustomLink>
  <CustomLink href={'/requestquote'}>Request a quote</CustomLink>

                <CustomLink href={'/contact'}>Contact</CustomLink>
                <div onClick={handleCall} className={`text-white cursor-pointer text-lg hover:underline flex flex-row gap-2 items-center`}>
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
  {`Call: ${process.env.NEXT_PUBLIC_BUSINESS_CELL_NUMBER}`}</div>
  
              </div>
  <div className="flex flex-row gap-4">
                <Link href='/bookrepair'><Button variant="primary">Book Repair</Button></Link>
                <div onClick={()=>{
                  setISToggled(!isToggled)
                }} className=' items-center p-0 flex xl:hidden'>
<Hamburger distance="sm" size={24} toggled={isToggled} toggle={setISToggled} />
</div>
  
  </div>          </div>
          </div>
          
     
    <div className={`transition-all overflow-hidden duration-300  ${isToggled ? 'h-60' : 'h-0'}`}>
      <div className='pt-6 pr-4 flex flex-col gap-4 items-end'>
<div onClick={()=>{
  setISToggled(!isToggled)
}}>
        <CustomLink href={'/repairs'}>Repairs</CustomLink>
  
</div>      

<div onClick={()=>{
  setISToggled(!isToggled)
}}><CustomLink href={'/products'}>Product Listings</CustomLink></div>
<div onClick={()=>{
  setISToggled(!isToggled)
}}><CustomLink href={'/requestquote'}>Request quote</CustomLink></div>
      
      <div onClick={()=>{
  setISToggled(!isToggled)
}}>
  <CustomLink href={'/contact'}>Contact</CustomLink></div>
<div onClick={() => { handleCall(); setISToggled(!isToggled); }} className={`text-white cursor-pointer text-lg hover:underline flex flex-row gap-2 items-center`}>
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
  {`Call: ${process.env.NEXT_PUBLIC_BUSINESS_CELL_NUMBER}`}</div>
      </div></div>
 

        </div>
      </header>
    </>
  );
}
