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

export default function Termsandconditions() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
    <Head>
      <title>Terms & Conditions</title>
    </Head>
    <main >
    <div className="logo-container flex py-4 justify-center bg-slate-50">
   {/* <Link href={'/'}>
        <svg
      width={218}
      height={44}
      viewBox="0 0 218 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_71_545)">
        <path
          d="M39.0833 26.0435C38.2487 26.0435 37.5186 26.6038 37.3029 27.4097L35.7027 33.3816C35.487 34.1875 34.7563 34.7477 33.9223 34.7477H31.7814C30.5692 34.7477 29.6869 33.5978 30.0009 32.4272L31.0897 28.3641C31.4032 27.1934 30.5209 26.0435 29.3093 26.0435H25.4564C24.2442 26.0435 23.3619 24.8937 23.6759 23.723L24.2845 21.4519C24.5002 20.646 25.2309 20.0858 26.0649 20.0858H31.8938C32.7284 20.0858 33.4585 19.5255 33.6742 18.7196L35.2616 12.7942C35.4773 11.9883 36.208 11.428 37.042 11.428H39.1829C40.3951 11.428 41.2774 12.5779 40.9634 13.7485L39.8874 17.7652C39.574 18.9359 40.4556 20.0858 41.6678 20.0858H43.9163C42.946 8.83189 33.505 0 22 0C9.8498 0 0 9.84981 0 22C0 34.1502 9.8498 44 22 44C32.7687 44 41.7295 36.2624 43.6279 26.0435H39.0833Z"
          fill="#E02D2C"
        />
        <path
          d="M21.2778 37.7935H12.383C10.5408 37.7935 9.44776 36.3003 9.94144 34.4581L15.7208 12.8889C16.2145 11.0467 18.108 9.55347 19.9501 9.55347H28.8449C30.6871 9.55347 31.7801 11.0467 31.2865 12.8889L25.5071 34.4581C25.0134 36.3003 23.1199 37.7935 21.2778 37.7935Z"
          fill="#231F20"
        />
        <path
          d="M19.1057 35.685H10.2108C8.36871 35.685 7.27564 34.1917 7.76932 32.3496L13.5487 10.7804C14.0424 8.93822 15.9358 7.44495 17.778 7.44495H26.6728C28.515 7.44495 29.608 8.93822 29.1143 10.7804L23.335 32.3496C22.8413 34.1917 20.9478 35.685 19.1057 35.685Z"
          fill="white"
        />
        <path
          d="M19.1057 36.1732H10.2109C9.18623 36.1732 8.31495 35.773 7.75773 35.0459C7.17667 34.2883 7.01293 33.2863 7.29826 32.2231L13.0776 10.6539C13.3434 9.66226 13.9752 8.73294 14.8556 8.03824C15.7403 7.34049 16.7778 6.95618 17.778 6.95618H26.6728C27.6975 6.95618 28.5687 7.35637 29.126 8.08345C29.707 8.84108 29.8708 9.84372 29.586 10.9062L23.8067 32.4755C23.5409 33.4671 22.9091 34.3964 22.0287 35.0911C21.144 35.7889 20.1065 36.1726 19.1063 36.1726L19.1057 36.1732ZM17.778 7.93315C16.1454 7.93315 14.4597 9.26694 14.0204 10.9068L8.24103 32.4761C8.03634 33.2392 8.14021 33.9406 8.53247 34.452C8.90151 34.9329 9.49723 35.1975 10.2115 35.1975H19.1063C20.7389 35.1975 22.4246 33.8637 22.8639 32.2238L28.6433 10.6545C28.848 9.89138 28.7441 9.18996 28.3518 8.67856C27.9828 8.19771 27.3871 7.93315 26.6728 7.93315H17.778Z"
          fill="#231F20"
        />
        <path
          d="M23.4077 10.2543H19.157C18.8649 10.2543 18.6914 10.0172 18.7696 9.72517C18.8478 9.43312 19.1478 9.19604 19.4405 9.19604H23.6912C23.9832 9.19604 24.1567 9.43312 24.0785 9.72517C24.0003 10.0172 23.7003 10.2543 23.4077 10.2543Z"
          fill="#231F20"
        />
        <path
          d="M55.6968 14.1768L55.6614 10.2708H59.5045V14.1768H55.6968ZM55.6968 35.1998V16.1381H59.54V35.1998H55.6968Z"
          fill="#231F20"
        />
        <path
          d="M69.1124 35.1607V14.1768H60.999V10.2708H81.0341V14.1768H72.9207V35.1607H69.113H69.1124Z"
          fill="#231F20"
        />
        <path
          d="M79.1748 25.6347C79.1748 19.9708 82.5585 16.146 88.0018 16.146C92.9301 16.146 96.3877 19.0885 96.3877 24.0901C96.3877 25.0463 96.2771 26.0392 96.1671 26.5909H82.8902C83.0375 29.9379 84.2509 31.6298 88.0757 31.6298C91.1283 31.6298 92.305 30.6002 92.305 28.9451V28.6506H96.2404V28.9817C96.2404 32.7332 92.9673 35.1607 88.0385 35.1607C82.0067 35.1607 79.1748 31.3359 79.1748 25.6347ZM82.9263 23.9429H92.5989C92.7462 20.8164 91.0543 19.4924 87.9279 19.4924C84.4709 19.4924 83.1469 21.1109 82.9257 23.9429H82.9263Z"
          fill="#231F20"
        />
        <path
          d="M98.6838 25.6892C98.6838 19.9996 102.024 16.1821 107.75 16.1821C112.559 16.1821 115.863 19.1552 115.863 23.5232V23.8538H111.935V23.6338C111.935 20.954 110.54 19.743 107.494 19.743C103.97 19.743 102.612 21.725 102.612 25.6892C102.612 29.6533 103.97 31.5987 107.494 31.5987C110.54 31.5987 111.935 30.4244 111.935 27.7445V27.5246H115.863V27.8551C115.863 32.1865 112.522 35.1962 107.604 35.1962C101.914 35.1962 98.6838 31.3421 98.6838 25.6892Z"
          fill="#231F20"
        />
        <path
          d="M117.617 35.1998V10.2689H121.667V19.7949H121.817C122.679 18.1202 124.771 16.1387 128.145 16.1387C133.02 16.1387 134.979 19.4973 134.979 23.5537V35.2005H130.929V24.4836C130.929 21.1721 129.879 19.7949 126.467 19.7949C123.054 19.7949 121.667 21.0603 121.667 24.5576V35.1998H117.618H117.617Z"
          fill="#231F20"
        />
        <path
          d="M142.931 22.7154C142.931 15.1764 147.187 10.2708 154.221 10.2708C160.714 10.2708 164.646 13.8781 164.646 19.6855V19.9018H160.498V19.6855C160.498 16.3025 158.688 14.2202 154.142 14.2202C149.005 14.2202 147.079 16.8511 147.079 22.7154C147.079 28.9922 149.099 31.4086 154.113 31.4086C158.658 31.4086 160.498 29.7131 160.498 25.7454V25.5291H164.646V25.7454C164.646 31.5528 160.714 35.1601 154.221 35.1601C147.187 35.1601 142.931 30.2545 142.931 22.7154Z"
          fill="#231F20"
        />
        <path
          d="M166.104 30.2771C166.104 27.2661 168.307 25.6873 172.199 25.1362L178.588 24.1819V23.1902C178.588 20.4731 177.34 19.6654 174.476 19.6654C171.611 19.6654 170.436 20.5831 170.436 23.0069V23.4694H166.618V23.1902C166.618 19.1143 169.812 16.1766 174.696 16.1766C179.58 16.1766 182.371 19.2609 182.371 23.7041V35.1608H178.699V31.9292H178.515C177.45 33.6553 175.358 35.1608 171.906 35.1608C168.638 35.1608 166.104 33.472 166.104 30.2771ZM173.191 32.0026C175.761 32.0026 178.588 30.9743 178.588 27.3022V26.9717L172.786 27.8527C170.693 28.1466 169.959 28.6238 169.959 29.9826C169.959 31.4148 170.876 32.0019 173.19 32.0019L173.191 32.0026Z"
          fill="#231F20"
        />
        <path
          d="M200.2 25.631C200.2 19.9647 203.585 16.1387 209.031 16.1387C213.961 16.1387 217.42 19.0824 217.42 24.0858C217.42 25.0427 217.309 26.0361 217.199 26.5879H203.917C204.064 29.9361 205.278 31.6285 209.105 31.6285C212.159 31.6285 213.336 30.5984 213.336 28.9426V28.6481H217.273V28.9793C217.273 32.732 213.998 35.1607 209.068 35.1607C203.033 35.1607 200.2 31.334 200.2 25.631ZM203.953 23.9386H213.63C213.777 20.8109 212.085 19.4869 208.957 19.4869C205.498 19.4869 204.174 21.106 203.953 23.9386Z"
          fill="#231F20"
        />
        <path
          d="M184.704 35.2004V16.1497H188.476V19.1594H188.667C189.428 17.4065 191.246 16.1472 194.027 16.1472C197.99 16.1472 199.449 18.7788 199.449 22.3219V23.5793H195.334V22.8174C195.334 20.3026 194.61 19.3885 192.21 19.3885C189.809 19.3885 188.819 20.3411 188.819 22.8559V35.201H184.704V35.2004Z"
          fill="#231F20"
        />
      </g>
      <defs>
        <clipPath id="clip0_71_545">
          <rect width="217.42" height={44} fill="white" />
        </clipPath>
      </defs>
    </svg>
   </Link> */}

</div>
<section className="bg-slate-50 px-4">
<div className="flex gap-16 pt-24 pb-8 container flex-col xl:flex-row  justify-center items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
  <div className="w-full  justify-center items-center flex flex-col gap-2">
  <h1 className="text-zinc-950 text-4xl lg:text-6xl">Terms & Conditions</h1>
  </div>
</div>
</section>
<section className="bg-white px-4">
<div className="flex gap-12 py-24 container flex-col mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
  
<article className="flex flex-col gap-10">
<div className="flex gap-4 flex-col">
    <div className="w-full md:w-4/5 lg:w-2/5   flex flex-col gap-2">
    <h4 className="text-zinc-950 text-xl lg:text-2xl">Policy on Accessories</h4>
    </div>
    <p className="text-slate-zinc-500 text-lg font-normal">
    We do not accept returns for accessories due to a change of mind. However, if the goods are faulty or non-functional, they can be exchanged within 7 days of purchase. Damage to accessories will not be eligible for coverage or exchange. While we advise using glass screen protectors and covers for all devices, we are not responsible for any damage to your device. Deposits on special orders cannot be canceled if the order has already been placed with the supplier.
    </p>
  
  </div>
  <div className="flex gap-4 flex-col">
    <div className="w-full md:w-4/5 lg:w-2/5   flex flex-col gap-2">
    <h4 className="text-zinc-950 text-xl lg:text-2xl">Policy on purchase of new phone</h4>
    </div>
    <p className="text-slate-zinc-500 text-lg font-normal">
    If a newly purchased phone is found to be faulty, it must be returned to the manufacturer for repair or servicing. We do not accept returns for new phones due to a change of mind. POLICY ON PURCHASE OF REFURBISHED/ SECOND HAND PHONE: If you decide to return the phone due to a change of mind within 7 days of purchase, a 15% processing fee will apply. The phone must be returned with all accessories and in the same condition as when purchased. Any faults on the device, such as water damage, physical damage, or tampering, will void the warranty.     </p>
  
  </div>

  <div className="flex gap-4 flex-col">
    <div className="w-full md:w-4/5 lg:w-2/5   flex flex-col gap-2">
    <h4 className="text-zinc-950 text-xl lg:text-2xl">Repair Policy</h4>
    </div>
    <p className="text-slate-zinc-500 text-lg font-normal">
    All repairs are backed by a 90-day warranty, ensuring coverage for both replacement parts and workmanship. However, any physical or water damage occurring to the device after our repair will nullify this warranty. Additionally, repaired devices must be collected within Three months from the date they are ready. We always prioritise the utmost care to safeguard customer information on devices. However, in the event of any unintentional data loss, we cannot assume responsibility.    </p>
  
  </div>
</article>
</div>
</section>
<Footer/>
    </main>
    </>
  );
}
