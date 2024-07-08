import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import { db } from "../../firebase";
import { Usersform,Header,Countdown,Footer } from "@/components";
import Head from "next/head";
import {Button} from '@shopify/polaris';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {



 const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
    <Head>
      <title>iTech Care-Top Repairs, Quality Accessories</title>
    </Head>
    <main >
<Header/>
<section className=" xl:h-screen px-4 ">
<div className="flex gap-4 container flex-col justify-center	  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
<div className="flex flex-col h-fit  gap-12">
  <div className="w-full lg:max-w-2xl  flex flex-col gap-8">
   <div className="w-full mt-40  xl:mt-0 flex flex-col gap-4 ">
      <h1 className="text-zinc-950 text-4xl lg:text-6xl">Bringing Your Broken Electronics Back to Life</h1>
      <p className="text-lg lg:text-2xl text-zinc-500">Give your device the  care that it deserves.</p>
   </div>
    <div className="w-fit gap-4 flex flex-row items-center">
        <Button variant="primary" size="medium"   onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact-section");
              }}>Get Free Quote</Button>
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
        
      } size="medium" onClick={(e) => {
        e.preventDefault();
        scrollToSection("address-section");
      }}>Visit us Today</Button>
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
<section className="bg-white px-4">
<div className="flex gap-4 container flex-col justify-center	items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="py-24 w-full justify-center flex flex-col gap-16">
  <h2 className="text-4xl text-center">Brands we Fix and Sell
   <span className="block">Everything you need under a roof</span></h2>
   <div className="flex flex-wrap gap-16 items-center justify-around px-16">
   <svg
  width={55}
  height={63}
  viewBox="0 0 55 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_13_516)">
    <path
      d="M26.9981 15.5836C30.4092 15.5836 33.4016 14.2516 35.9752 11.5875C38.5489 8.92341 39.8358 5.82557 39.8358 2.29394C39.8358 1.90607 39.8051 1.35488 39.7438 0.640381C39.2945 0.701624 38.9574 0.75266 38.7327 0.793489C35.5872 1.2426 32.8195 2.78389 30.4296 5.41728C28.0398 8.05073 26.8449 10.8679 26.8449 13.8688C26.8449 14.2158 26.896 14.7875 26.9981 15.5836ZM39.2229 62.4036C41.6536 62.4036 44.3396 60.7399 47.281 57.4124C50.2223 54.0848 52.4691 50.1755 54.0215 45.6844C48.241 42.7039 45.3507 38.4271 45.3507 32.854C45.3507 28.1996 47.6894 24.2188 52.367 20.9117C49.1193 16.8493 44.8299 14.818 39.4987 14.818C37.2519 14.818 35.1991 15.1549 33.3404 15.8285L32.1761 16.2572L30.6135 16.8697C29.5922 17.2575 28.6628 17.4516 27.8254 17.4516C27.1717 17.4516 26.3138 17.2269 25.2517 16.7778L24.0568 16.2879L22.9232 15.8285C21.2686 15.1345 19.4916 14.7874 17.592 14.7874C12.506 14.7874 8.42085 16.5022 5.33652 19.9318C2.2522 23.3614 0.710068 27.8832 0.710068 33.4971C0.710068 41.3974 3.18157 48.6955 8.12464 55.3913C11.5562 60.0662 14.6916 62.4036 17.5307 62.4036C18.7359 62.4036 19.9308 62.1688 21.1155 61.6993L22.6168 61.0869L23.8117 60.6582C25.4866 60.0662 27.0287 59.7702 28.4381 59.7702C29.9292 59.7702 31.645 60.1479 33.5855 60.9032L34.5352 61.2706C36.5165 62.0259 38.0792 62.4036 39.2229 62.4036Z"
      fill="#8596AB"
    />
  </g>
  <defs>
    <clipPath id="clip0_13_516">
      <rect
        width="53.314"
        height="61.7632"
        fill="white"
        transform="translate(0.708496 0.640381)"
      />
    </clipPath>
  </defs>
</svg>
<svg
  width={142}
  height={47}
  viewBox="0 0 142 47"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_16_1210)">
    <path
      d="M141.576 11.2273C139.653 0.188518 106.486 -3.25634 67.491 3.53268C51.1146 6.38532 36.3275 10.5928 24.812 15.3263C26.5809 15.365 27.8928 15.7707 28.6899 16.5657C29.3131 17.1896 29.6279 18.0459 29.6279 19.1127V20.2077H25.8042V19.2409C25.8042 18.4353 25.3211 17.936 24.4655 17.936C23.7466 17.936 23.3036 18.2606 23.1607 18.9C23.1128 19.1528 23.118 19.4128 23.1762 19.6634C23.5853 21.3358 29.2631 22.3745 29.8807 25.4609C29.9617 25.8581 30.0715 26.708 29.8983 27.9241C29.5441 30.4134 27.3569 31.3739 24.5726 31.3739C20.6862 31.3739 19.1074 29.5332 19.1074 26.9953L19.1102 25.7947H23.2093L23.2114 27.2904C23.2114 28.1312 23.8226 28.5952 24.6549 28.5952C25.4436 28.5952 25.9042 28.2776 26.0633 27.6284C26.1373 27.3298 26.1696 26.8897 26.0351 26.5531C25.2767 24.6504 19.975 23.7617 19.3222 20.6851C19.1764 19.9936 19.1644 19.4049 19.2856 18.6606C19.3477 18.2916 19.462 17.9334 19.625 17.5966C6.85182 23.5702 -0.620253 30.143 0.36701 35.818C2.29154 46.8582 35.4585 50.2995 74.4526 43.5105C91.5938 40.5269 107.004 36.0602 118.732 31.0549C118.563 31.0634 118.398 31.0817 118.222 31.0817C115.553 31.0817 113.17 30.0817 112.923 27.3537C112.879 26.8573 112.871 26.6496 112.87 26.3665L112.871 20.095C112.871 19.8246 112.903 19.35 112.933 19.105C113.249 16.4685 115.334 15.3812 118.223 15.3812C120.459 15.3812 123.2 16.0227 123.502 19.1071C123.542 19.4944 123.538 19.9077 123.537 20.0436V20.6358H119.675V19.7521C119.675 19.7331 119.669 19.4028 119.627 19.1965C119.564 18.8817 119.296 18.1522 118.196 18.1522C117.109 18.1522 116.827 18.8831 116.757 19.1972C116.717 19.3697 116.698 19.6176 116.698 19.8922V26.708C116.694 26.9446 116.706 27.1298 116.73 27.2657C116.749 27.3728 116.944 28.3121 118.209 28.3121C119.465 28.3121 119.659 27.3728 119.677 27.2657C119.71 27.0812 119.714 26.8615 119.712 26.708V24.5962H118.193V22.3217H123.566V26.3679C123.565 26.6432 123.561 26.8467 123.514 27.3537C123.45 28.0692 123.224 28.6748 122.871 29.1924C135.309 23.2864 142.55 16.8199 141.576 11.2273ZM40.4638 30.7916L38.5076 17.4994H38.4372L36.431 30.7916H32.308L35.0811 15.7805H41.8081L44.5643 30.7916H40.4638ZM60.295 30.7916L60.2042 17.7564H60.138L57.7121 30.7916H53.8426L51.4287 17.7564H51.3596L51.2716 30.7916H47.4373L47.7697 15.7805H53.9369L55.7326 26.9312H55.8206L57.6212 15.7805H63.7856L64.1166 30.7916H60.295ZM78.3509 27.8826C77.9383 30.7901 75.0899 31.2986 73.0766 31.2986C69.7339 31.2986 67.6664 29.8698 67.6664 26.9622L67.6685 25.7764H71.7182L71.7211 27.2537C71.7211 28.0558 72.2865 28.5466 73.1597 28.5466C73.9385 28.5466 74.3948 28.234 74.5533 27.5918C74.6265 27.2925 74.6568 26.8559 74.5272 26.5263C73.7808 24.6595 68.5206 23.7448 67.8812 20.7161C67.7347 20.0295 67.7241 19.4465 67.8445 18.7099C68.2896 15.9643 70.9246 15.3939 73.0456 15.3939C74.9427 15.3939 76.3236 15.808 77.1517 16.6361C77.7693 17.2544 78.0819 18.1029 78.0819 19.1585V20.2415H74.2948V19.2859C74.2948 18.4677 73.7871 17.9945 72.971 17.9945C72.2471 17.9945 71.8091 18.3163 71.6654 18.9493C71.6188 19.1995 71.625 19.4566 71.6837 19.7042C72.0894 21.3689 77.7172 22.3864 78.3333 25.444C78.4129 25.8341 78.522 26.6714 78.3509 27.8826ZM92.3768 26.5186C92.3825 26.8003 92.355 27.3629 92.3395 27.5073C92.1085 29.9803 90.3396 31.2373 87.0955 31.2373C83.8386 31.2373 82.0683 29.9803 81.8387 27.5073C81.8127 27.1793 81.8003 26.8504 81.8014 26.5214V15.777H85.6758V26.8601C85.6716 27.108 85.6843 27.2911 85.7089 27.4185C85.7568 27.665 86.0019 28.4649 87.0955 28.4649C88.1855 28.4649 88.4306 27.6643 88.482 27.4213C88.5038 27.2904 88.5172 27.0981 88.5172 26.8594V15.777H92.3768V26.5186ZM109.069 30.6387H103.678L100.059 18.7486H99.9989L100.2 30.6387H96.4421V15.7805H102.059L105.404 27.2023H105.482L105.284 15.7805H109.069V30.6387Z"
      fill="#8596AB"
    />
  </g>
  <defs>
    <clipPath id="clip0_16_1210">
      <rect
        width="141.386"
        height="46.9401"
        fill="white"
        transform="translate(0.27829 0.052002)"
      />
    </clipPath>
  </defs>
</svg>
<svg
  width={183}
  height={64}
  viewBox="0 0 183 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_16_1887)">
    <path
      d="M99.9044 21.6652H103.974V32.9854C103.974 38.7315 100.807 42.0273 95.2903 42.0273C89.8308 42.0273 86.6927 38.7889 86.6927 33.1431V21.6795H90.7622V33.0141C90.7622 36.3672 92.4101 38.1584 95.3476 38.1584C98.2852 38.1584 99.9044 36.4102 99.9044 33.1574V21.6652ZM76.9773 29.747H67.7778V21.6652H63.7083V41.7264H67.7778V33.573H76.963V41.7264H81.0325V21.6652H76.963V29.747H76.9773ZM178.888 21.6652V41.6977H182.9V21.6652H178.888ZM162.911 33.0858H170.319V29.4318H162.911V25.3192H173.658V21.6795H158.899V41.7121H174.045V38.0581H162.911V33.0858ZM146.948 35.4501L142.391 21.6509H139.067L134.51 35.4501L130.082 21.6652H125.755L132.747 41.7121H136.115L140.672 28.5433L145.228 41.7121H148.624L155.603 21.6652H151.376L146.948 35.4501ZM118.518 21.7798L127.274 41.7121H123.003L121.198 37.5422H112.013L111.884 37.8288L110.193 41.7121H106.037L114.879 21.6652H118.432L118.518 21.7798ZM119.493 33.444L116.598 26.7235L113.718 33.444L113.517 33.9025H119.679L119.493 33.444Z"
      fill="#8596AB"
    />
    <path
      d="M23.6432 39.5913C23.7005 39.5483 23.7149 39.4624 23.6862 39.3907C19.735 30.8981 14.8057 22.8959 8.99854 15.5466C8.99854 15.5466 4.38447 19.9314 4.71405 24.3305C4.79125 25.3447 5.06765 26.3337 5.52744 27.241C5.98724 28.1483 6.6214 28.9561 7.39365 29.618C11.4202 33.5443 21.1642 38.5023 23.4283 39.6343C23.4999 39.663 23.5859 39.6486 23.6432 39.5913ZM22.1386 42.9444C22.11 42.8584 22.024 42.8011 21.9237 42.8011L5.70278 43.36C7.46529 46.4981 10.4315 48.9341 13.5123 48.189C15.6474 47.6588 20.4621 44.2914 22.0526 43.145C22.1816 43.0447 22.1386 42.9587 22.1386 42.9444ZM22.3822 41.4971C22.4682 41.3682 22.3249 41.2535 22.3249 41.2535C15.2032 36.4389 1.38962 29.0449 1.38962 29.0449C0.931767 30.4482 0.803684 31.9383 1.01533 33.3992C1.22697 34.8601 1.77265 36.2525 2.60994 37.4683C3.44722 38.684 4.55358 39.6903 5.84301 40.4089C7.13244 41.1275 8.57021 41.5392 10.0446 41.6118C10.2882 41.6548 19.6883 41.6118 22.2103 41.5974C22.2819 41.5831 22.3392 41.5545 22.3822 41.4971ZM23.4569 8.53948C22.7548 8.59679 20.849 9.04101 20.849 9.04101C16.5501 10.1444 15.5328 14.0563 15.5328 14.0563C14.7446 16.5066 15.5471 19.2149 15.5471 19.2149C16.98 25.5772 24.0301 36.052 25.549 38.2444C25.6493 38.359 25.7353 38.316 25.7353 38.316C25.8213 38.2873 25.8929 38.2157 25.8929 38.1154C28.2429 14.7298 23.4569 8.53948 23.4569 8.53948ZM28.8305 38.2873C28.9164 38.316 29.0167 38.2873 29.0597 38.2014C30.6216 35.9517 37.6287 25.5342 39.0617 19.2006C39.0617 19.2006 39.8354 16.1341 39.0903 14.042C39.0903 14.042 38.0299 10.0727 33.7311 9.02668C33.7311 9.02668 32.4988 8.71143 31.1805 8.52515C31.1805 8.52515 26.3658 14.7155 28.7158 38.1011C28.7015 38.187 28.7588 38.2587 28.8305 38.2873ZM32.6707 42.8154C32.6326 42.8232 32.5963 42.8386 32.5643 42.8607C32.5323 42.8829 32.5051 42.9114 32.4845 42.9444C32.4701 43.0304 32.4845 43.102 32.5418 43.1593C34.0894 44.277 38.8037 47.5728 41.0678 48.2033C41.0678 48.2033 45.2663 49.6362 48.906 43.3743L32.6707 42.8154ZM53.2335 29.0162C53.2335 29.0162 39.4486 36.4245 32.3125 41.2392C32.2409 41.2965 32.1979 41.3825 32.2265 41.4685C32.2265 41.4685 32.2982 41.5974 32.3985 41.5974C34.9491 41.5974 44.6071 41.6118 44.8651 41.5688C45.8251 41.4971 46.7709 41.2822 47.6593 40.924C47.6593 40.924 51.0984 39.8349 52.8752 35.923C52.8752 35.923 54.4658 32.7419 53.2335 29.0162ZM31.0085 39.5913C31.0658 39.6343 31.1518 39.6486 31.2235 39.6057C33.5448 38.445 43.2172 33.53 47.2151 29.618C47.2151 29.618 49.7514 27.5833 49.8804 24.3018C50.167 19.7594 45.5959 15.5466 45.5959 15.5466C45.5959 15.5466 37.1415 25.7921 30.9369 39.3334C30.9269 39.379 30.9283 39.4263 30.9407 39.4712C30.9532 39.5162 30.9765 39.5574 31.0085 39.5913Z"
      fill="#8596AB"
    />
  </g>
  <defs>
    <clipPath id="clip0_16_1887">
      <rect
        width="182.039"
        height="63.0438"
        fill="white"
        transform="translate(0.9198)"
      />
    </clipPath>
  </defs>
</svg>
<svg width="151" height="41" viewBox="0 0 151 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5825 21.1266V4.46502H42.1805H44.7786V5.56638C44.7786 6.17213 44.7879 6.66774 44.7992 6.66774C44.8105 6.66774 45.1385 6.4681 45.528 6.2241C50.1236 3.34564 56.804 2.47886 62.7957 3.98365C68.1938 5.33934 72.1071 8.55754 73.4982 12.7852C74.3112 15.2557 74.2663 18.0031 73.3741 20.3924C72.2642 23.3645 69.9826 25.7541 66.6916 27.3911C63.8116 28.8237 60.5236 29.541 56.8371 29.541C53.7809 29.541 50.9307 29.0314 48.4216 28.0364C47.426 27.6416 46.1498 26.9936 45.3757 26.4897L44.7786 26.101V31.9446V37.7882H42.1805H39.5825V21.1266ZM59.3505 25.1114C62.2732 24.6969 64.5408 23.7696 66.241 22.2937C67.528 21.1765 68.4244 19.6249 68.7639 17.9264C68.9028 17.2318 68.9032 15.5912 68.7647 14.8986C68.3649 12.8997 67.2195 11.1536 65.5047 9.92906C64.8135 9.43548 63.4096 8.73231 62.5134 8.43086C59.9827 7.57958 56.9144 7.32749 54.1041 7.73995C49.2248 8.45608 45.9269 10.876 45.0421 14.3895C44.6518 15.9396 44.7215 17.6131 45.2373 19.0757C46.4091 22.3981 49.8644 24.6089 54.7474 25.1607C55.7291 25.2716 58.4245 25.2428 59.3505 25.1114ZM76.5769 21.1266V4.46502H79.1749H81.773V5.56638C81.773 6.17213 81.7843 6.66774 81.7981 6.66774C81.8118 6.66774 82.0978 6.4887 82.4335 6.26986C83.2102 5.76351 84.7435 5.00619 85.7266 4.6433C89.9706 3.0768 95.1524 2.82416 99.6872 3.96268C107.079 5.81856 111.432 10.9031 111.021 17.2013C110.708 22.0088 107.509 25.9579 102.247 28.0331C100.531 28.71 98.7716 29.1369 96.5702 29.4108C95.4083 29.5553 92.2769 29.5551 91.064 29.4105C87.6311 29.0009 84.6171 27.9815 82.2672 26.4352L81.773 26.11V31.9491V37.7883H79.1749H76.5769V21.1266ZM96.4705 25.0869C100.518 24.4824 103.371 22.8517 104.87 20.2853C105.74 18.7946 106.067 16.8115 105.744 14.9703C105.073 11.1432 101.709 8.49501 96.5597 7.73925C93.161 7.24042 89.3236 7.73728 86.715 9.01395C84.0521 10.3172 82.4495 12.2631 81.9025 14.8573C81.7589 15.5383 81.7593 17.2891 81.9033 17.9567C82.2907 19.7536 83.1664 21.2403 84.4956 22.3577C86.3257 23.8962 88.7075 24.8123 91.7983 25.1664C92.8206 25.2836 95.4539 25.2388 96.4705 25.0869ZM18.1201 29.5066C15.3638 29.2631 13.0112 28.7201 11.0106 27.8656C6.46035 25.9221 3.58639 22.6419 2.80643 18.5017C2.65746 17.7109 2.60064 15.9295 2.69724 15.0782C3.26046 10.1145 6.91696 6.18292 12.698 4.32503C15.7744 3.33635 19.5612 3.01338 22.9601 3.4498C29.1874 4.24938 33.898 7.13702 35.9684 11.4241C37.6542 14.9147 37.4403 19.1549 35.4139 22.4145C34.501 23.883 32.9981 25.3984 31.4493 26.4119C29.0398 27.9888 26.162 28.9697 22.6667 29.4056C21.9666 29.4929 18.7695 29.5639 18.1201 29.5066ZM21.806 25.166C24.5165 24.8783 26.7967 24.1045 28.5124 22.8902C29.9149 21.8974 31.0248 20.4343 31.5228 18.9216C31.8143 18.0362 31.8721 17.6204 31.8721 16.4105C31.8721 15.2042 31.8151 14.7919 31.5259 13.9059C30.5752 10.9936 27.7946 8.82728 23.9093 7.97207C20.5028 7.22226 16.5302 7.48287 13.5868 8.64925C11.4633 9.49071 9.78719 10.8528 8.80427 12.5358C7.75907 14.3255 7.52195 16.763 8.18871 18.8637C8.90712 21.127 10.7996 23.0212 13.404 24.0837C14.8225 24.6623 16.5789 25.0655 18.3177 25.2117C18.9849 25.2678 21.1092 25.2399 21.806 25.166ZM128.99 29.5085C128.882 29.4961 128.5 29.4583 128.143 29.4244C125.275 29.1526 122.259 28.2468 120.049 26.993C117.06 25.298 114.978 22.8888 114.028 20.0253C113.385 18.0873 113.275 15.9094 113.72 13.9058C114.392 10.876 116.236 8.30331 119.1 6.40053C122.877 3.89127 128.43 2.77681 133.791 3.45229C138.245 4.01348 141.914 5.64244 144.468 8.19192C146.412 10.1335 147.53 12.4086 147.853 15.0818C147.937 15.7765 147.924 17.1814 147.827 17.9185C147.126 23.2268 142.918 27.2838 136.474 28.8644C134.52 29.3436 133.294 29.4886 130.995 29.5124C130.001 29.5226 129.099 29.5209 128.99 29.5085ZM132.407 25.1924C135.838 24.8768 138.635 23.7461 140.43 21.9486C141.645 20.7316 142.351 19.3919 142.629 17.7728C142.743 17.1056 142.742 15.7147 142.626 15.0226C142 11.2969 138.715 8.59638 133.848 7.80618C132.679 7.61646 131.902 7.55465 130.685 7.55465C125.227 7.55465 120.993 9.61236 119.364 13.0558C118.879 14.0821 118.655 15.1413 118.655 16.4105C118.655 18.0853 119.045 19.4135 119.926 20.737C121.544 23.1667 124.611 24.7189 128.671 25.1622C129.509 25.2536 131.562 25.2702 132.407 25.1924Z" fill="#8596AB"/>
</svg>
<svg width="100" height="41" viewBox="0 0 100 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_19_1894)">
<path d="M5.4929 39.3495H0.599487V1.2695H13.5774C16.804 1.2695 19.5961 2.34211 21.954 4.48714C24.3118 6.63236 25.4906 9.33578 25.4906 12.5976C25.4906 15.8594 24.3118 18.5628 21.954 20.7079C19.5962 22.8532 16.804 23.9258 13.5774 23.9257H5.493L5.4929 39.3495ZM5.4929 19.2465H13.683C15.7398 19.2465 17.3888 18.555 18.63 17.1721C19.8711 15.7894 20.4916 14.2647 20.4916 12.5984C20.4916 10.9321 19.8711 9.40742 18.63 8.02466C17.3888 6.64181 15.7398 5.95038 13.6829 5.95038H5.493L5.4929 19.2465ZM35.0861 6.74887C34.4131 7.42199 33.598 7.7585 32.641 7.7584C31.6839 7.7584 30.8686 7.42169 30.195 6.74808C29.5214 6.07456 29.1847 5.25896 29.1847 4.30137C29.1847 3.34378 29.5215 2.52828 30.195 1.85466C30.8686 1.18095 31.6839 0.844238 32.641 0.844238C33.598 0.844238 34.4133 1.18105 35.0869 1.85456C35.7605 2.52818 36.0972 3.34378 36.0972 4.30127C36.0972 5.25896 35.7602 6.07486 35.0861 6.74897V6.74887ZM35.0874 39.3495H30.194V13.2898H35.0874V39.3495ZM63.2054 39.3495H57.4615L51.0261 29.7232L44.6978 39.3495H38.9538L48.155 26.107L39.1664 13.2898H44.6979L51.1333 22.4909L57.249 13.2898H62.993L53.899 26.107L63.2054 39.3495ZM78.4524 40.2C74.516 40.2 71.3159 38.8883 68.8521 36.2649C66.3883 33.6416 65.1563 30.3264 65.1564 26.3196C65.1564 22.5261 66.3528 19.2641 68.7458 16.5335C71.1387 13.8029 74.1968 12.4377 77.9201 12.4377C81.7851 12.4377 84.8786 13.6964 87.2007 16.2137C89.5227 18.7311 90.6837 22.0997 90.6838 26.3196L90.6302 27.2237H70.0483C70.1899 29.8476 71.0675 31.9219 72.6808 33.4464C74.2941 34.9711 76.1822 35.7334 78.3454 35.7334C81.8553 35.7334 84.231 34.2439 85.4721 31.2651L89.8333 33.0732C88.9816 35.0945 87.581 36.7876 85.6312 38.1525C83.6814 39.5175 81.2884 40.2 78.4524 40.2ZM85.4722 23.1823C85.366 21.6924 84.6835 20.2738 83.4247 18.9267C82.1657 17.5795 80.2951 16.9059 77.813 16.9059C76.0048 16.9059 74.4362 17.4733 73.1069 18.6077C71.7776 19.7423 70.8647 21.2671 70.368 23.1823H85.4722ZM100 39.3495H95.1067V1.2695H100V39.3495Z" fill="#8596AB"/>
</g>
<defs>
<clipPath id="clip0_19_1894">
<rect width="99.4006" height="39.4024" fill="white" transform="translate(0.599487 0.820801)"/>
</clipPath>
</defs>
</svg>


   </div>

  </div>
</div>
</section>
<section className="bg-white px-4">
<div className="flex gap-4 container flex-col   mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="py-24 w-full justify-start flex flex-col gap-16">
  <h2 className="text-4xl w-fit">What we have for you
   </h2>
   <div className="flex flex-wrap gap-4 justify-center items-center  px-8">
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/iphonerepair.png" alt="iphone repair" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">iPhone Repairs</h6>
      <p className="text-base text-zinc-500">Our technicians and high-quality parts, we ensure your iPhone is restored to optimal condition.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/samsungrepair.png" alt="samsung repair" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">Samsung Repairs</h6>
      <p className="text-base text-zinc-500">Our expertise in Samsung repairs ensures that your device receives the best care possible.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/ipadrepair.png" alt="ipad repair" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">iPad Repairs</h6>
      <p className="text-base text-zinc-500">When it comes to iPad repairs, we  are second to none handling complex repairs with precision.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/laptoprepair.png" alt="laptop repair" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">Laptop Repairs</h6>
      <p className="text-base text-zinc-500">Our laptop repairs cover a wide range of issues, from screen replacements to hardware fixes.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/iphonechargers.png" alt="iphone chargers" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">iPhone Chargers</h6>
      <p className="text-base text-zinc-500">iPhone chargers that we provide are designed to quickly charger your iPhones with max power.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/earphones.png" alt="earphones" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">Earphones</h6>
      <p className="text-base text-zinc-500">Enhancing your audio experience is easy with our range of earphone accessories.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/power-banks.png" alt="power-banks" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">Power Banks</h6>
      <p className="text-base text-zinc-500">We provide the right power banks so that you never run out of power in the time of need.</p>
    </div>
  </div>
  <div className="h-96 w-60 bg-zinc-100 rounded-3xl p-6 flex flex-col gap-4">
    <div className="h-42 w-full bg-slate-100">
      <img src="/static-images/phone-cases.png" alt="phone-cases" className="w-full"/>
    </div>
    <div className="flex flex-col gap-2">
      <h6 className="text-xl">Phone cases</h6>
      <p className="text-base text-zinc-500">We source high-quality cases to ensure your phone stays safe from everyday wear and tear.</p>
    </div>
  </div>


   </div>
   <div className="w-full flex justify-center ">
     <div className="flex flex-col  items-center w-fit gap-4">
      <p className="text-xl text-zinc-500">Can’t find what you’re looking for?</p>
      <div>    <Button className="w-fit" size="medium" onClick={(e) => {
        e.preventDefault();
        scrollToSection("contact-section");
      }}>Contact Us</Button>
      </div>
     </div>
   </div>

  </div>
</div>
</section>
<section id="about-section" className="bg-semantic-primary-600 px-4  relative">
  <img src="/static-images/logo-big.png" className="w-96 hidden xl:block absolute -top-32 right-0"/>
<div className="flex gap-4 container flex-col 	items-start  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
<div className="py-24 flex flex-col gap-24">
  <div className=" w-full xl:w-3/5 justify-start flex flex-col gap-10">
    <h2 className="text-4xl w-fit text-white">Who We Are?
    <span className="block">Or What Just Makes Us Different</span>
     </h2>
     <p className="text-lg lg:text-2xl	text-zinc-300">At iTech Care, we offer expert repair services for all kinds of mobile phones, including cracked screens, water damage, charging issues, and more. </p>
     </div>
     <div className="flex flex-wrap gap-4 justify-center items-center  px-4">
     <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img  src="/static-images/specials/screencrack.png" alt="screencrack"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Broken Screen Replacement</h6>
        <p className="text-lg leading-5 text-center text-zinc-300">Viewing your phone on a cracked screen can be bad experience.iTech Care can fix it with 3 months warranty.</p>
      </div>
    </div>
    <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img  src="/static-images/specials/waterdamage.png" alt="waterdamage"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Water Damage</h6>
        <p className="text-lg leading-5 text-center text-zinc-300">We will diagnose your phone to determine the extent of damage, clean out the device and test accordingly.</p>
      </div>
    </div>
    <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img alt="chargingport" src="/static-images/specials/chargingport.png"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Charging Port Repairs</h6>
        <p className="text-lg leading-5 text-center text-zinc-300">No charger, no phone. We can repair it in a few minutes so you can go live.</p>
      </div>
    </div>
    <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img  src="/static-images/specials/batteryreplacement.png" alt="batteryreplacement"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Battery Replacement</h6>
        <p className="text-lg leading-5 text-center text-zinc-300">With our experienced battery saving recommendations, you may get your battery changed with warranty.</p>
      </div>
    </div>
    <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img  src="/static-images/specials/datarecovery.png" alt="Data Recovery"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Data Recovery</h6>
        <p className="text-lg leading-5 text-center text-zinc-300"> Our data recovery services are designed to help you retrieve lost, deleted, or inaccessible data from various types of electronic devices.</p>
      </div>
    </div>
    <div className="h-96 w-80 items-center p-4 flex flex-col gap-4">
      <div className="h-3/5 flex justify-center"><img  src="/static-images/specials/virusremoval.png" alt="virusremoval"/></div>
      <div className="flex flex-col gap-4 text-white">
        <h6 className="text-xl font-medium text-center">Virus Removal</h6>
        <p className="text-lg leading-5 text-center text-zinc-300">Our virus removal services are designed to eliminate all forms of malicious software and restore your devices to optimal performance.</p>
      </div>
    </div>
     </div>
</div>
</div>
</section>
<section className="bg-white px-4" id="address-section">
<div className="flex gap-16 py-24 container flex-col xl:flex-row    mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className=" w-full xl:w-1/2 justify-start flex flex-col gap-8">
  <h2 className="text-4xl w-fit">Close to You
    <span className="block">  Like Always</span>
   </h2>
   <div className="flex flex-row gap-4 items-center">
   <svg
  width={20}
  height={21}
  viewBox="0 0 20 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.05025 4.55025C7.78392 1.81658 12.2161 1.81658 14.9497 4.55025C17.6834 7.28392 17.6834 11.7161 14.9497 14.4497L10 19.3995L5.05025 14.4497C2.31658 11.7161 2.31658 7.28392 5.05025 4.55025ZM10 11.5C11.1046 11.5 12 10.6046 12 9.5C12 8.39543 11.1046 7.5 10 7.5C8.89543 7.5 8 8.39543 8 9.5C8 10.6046 8.89543 11.5 10 11.5Z"
    fill="#22272F"
  />
</svg>
<span className="text-lg font-medium">359 Centre road, Bentleigh VIC 3204</span>
   </div>
   <div className="flex flex-col gap-4">
    <h6 className="text-2xl font-medium">Store Hours</h6>
    <ul className="text-lg text-zinc-500">
      <li>Monday 09:00 am – 06:00 pm</li>
      <li>Tuesday 09:00 am – 06:00 pm</li>
      <li>Wednesday 09:00 am – 06:00 pm</li>
      <li>Thursday 09:00 am – 06:00 pm</li>
      <li>Friday 09:00 am – 06:00 pm</li>
      <li>Saturday 10:00 am – 05:00 pm</li>
      <li>Sunday 10:00 am – 05:00 pm</li>


    </ul>
   </div>


  </div>
  <div className="w-full xl:w-1/2 h-96 xl:h-100 bg-slate-500">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.533571636496!2d145.0362127!3d-37.9179636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66944ed5f4ec5%3A0x631ede2e27b5a804!2s359%20Centre%20Rd%2C%20Bentleigh%20VIC%203204!5e0!3m2!1sen!2sau!4v1720267970873!5m2!1sen!2sau"
 className="h-full w-full"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
</div>
</section>
<section  id="contact-section" className="bg-white px-4">
<div className="flex gap-16 py-24 container flex-col xl:flex-row  justify-center items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="w-full md:w-4/5 lg:w-2/5  justify-center items-center flex flex-col gap-8">
  <h2 className="text-4xl w-fit text-center">We’re Always Here
  
    <span className="block">  To Serve Your Needs</span>
   </h2>
<Usersform/>
  </div>

</div>
</section>
<Footer/>
    </main>
    </>
  );
}
