/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; // Emotion's css utility
import { motion } from "framer-motion"; // Framer Motion for animation

import { useState } from "react";
import Head from "next/head";
import { Button } from "@shopify/polaris";
import { Usersform, Header, Countdown, Footer } from "@/components";
import Bookrepair from "@/components/bookrepair/bookrepair";
import FAQ from "@/components/faq";
import MetaTags from "@/components/metatags";

export default function Bookarepair() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <Head>
        <title>Book a Repair</title>
       <MetaTags keywords="Mobile Repair, Book a repair, Make a visit today" title="Book a Repair" description="Make a booking today for your device so that you dont leave out."/>
      </Head>

      <main>
        {/* Animated Gradient Section */}
        <motion.section
          css={css`
            background: linear-gradient(180deg, #460909 0%, #e02d2c 100%);
            background-size: 200% 200%; /* Ensures smooth animation */
          `}
          className="px-4"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8, // Duration of the animation
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="flex gap-16 pt-40 pb-24 container flex-col xl:flex-row justify-center items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <div className="w-full justify-center items-center flex flex-col gap-8">
              <h1 className="text-white text-center text-4xl lg:text-6xl">
                Make a repair booking
                <span className="block">for your device</span>
              </h1>
<a href="#bookrepair">
                <Button>Book Now</Button>
  
</a>            </div>
          </div>
        </motion.section>
<section className="bg-white">
<div className="flex gap-16 container flex-col py-20 justify-start	items-center  mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
<h2 className="text-center font-normal text-3xl lg:text-4xl"> Booking a repair in
<span className="block">6 simple steps</span></h2>
<div  >


  <div className="relative flex items-center justify-center flex-wrap gap-2 lg:gap-8" style={{ zIndex: 1 }}>
  <svg
  width={1400}
  css={css`position:absolute;top:30%;z-index:-1;left:-18%`}
  height={12}
  className="hidden xl:block"
  viewBox="0 0 1206 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1206 6L1196 0.226497V11.7735L1206 6ZM0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 7H8V5H6V7ZM12 7H16V5H12V7ZM20 7H24V5H20V7ZM28 7H32V5H28V7ZM36 7H40V5H36V7ZM44 7H48V5H44V7ZM52 7H56V5H52V7ZM60 7H64V5H60V7ZM68 7H72V5H68V7ZM76 7H80V5H76V7ZM84 7H88V5H84V7ZM92 7H96V5H92V7ZM100 7H104V5H100V7ZM108 7H112V5H108V7ZM116 7H120V5H116V7ZM124 7H128V5H124V7ZM132 7H136V5H132V7ZM140 7H144V5H140V7ZM148 7H152V5H148V7ZM156 7H160V5H156V7ZM164 7H168V5H164V7ZM172 7H176V5H172V7ZM180 7H184V5H180V7ZM188 7H192V5H188V7ZM196 7H200V5H196V7ZM204 7H208V5H204V7ZM212 7H216V5H212V7ZM220 7H224V5H220V7ZM228 7H232V5H228V7ZM236 7H240V5H236V7ZM244 7H248V5H244V7ZM252 7H256V5H252V7ZM260 7H264V5H260V7ZM268 7H272V5H268V7ZM276 7H280V5H276V7ZM284 7H288V5H284V7ZM292 7H296V5H292V7ZM300 7H304V5H300V7ZM308 7H312V5H308V7ZM316 7H320V5H316V7ZM324 7H328V5H324V7ZM332 7H336V5H332V7ZM340 7H344V5H340V7ZM348 7H352V5H348V7ZM356 7H360V5H356V7ZM364 7H368V5H364V7ZM372 7H376V5H372V7ZM380 7H384V5H380V7ZM388 7H392V5H388V7ZM396 7H400V5H396V7ZM404 7H408V5H404V7ZM412 7H416V5H412V7ZM420 7H424V5H420V7ZM428 7H432V5H428V7ZM436 7H440V5H436V7ZM444 7H448V5H444V7ZM452 7H456V5H452V7ZM460 7H464V5H460V7ZM468 7H472V5H468V7ZM476 7H480V5H476V7ZM484 7H488V5H484V7ZM492 7H496V5H492V7ZM500 7H504V5H500V7ZM508 7H512V5H508V7ZM516 7H520V5H516V7ZM524 7H528V5H524V7ZM532 7H536V5H532V7ZM540 7H544V5H540V7ZM548 7H552V5H548V7ZM556 7H560V5H556V7ZM564 7H568V5H564V7ZM572 7H576V5H572V7ZM580 7H584V5H580V7ZM588 7H592V5H588V7ZM596 7H600V5H596V7ZM604 7H608V5H604V7ZM612 7H616V5H612V7ZM620 7H624V5H620V7ZM628 7H632V5H628V7ZM636 7H640V5H636V7ZM644 7H648V5H644V7ZM652 7H656V5H652V7ZM660 7H664V5H660V7ZM668 7H672V5H668V7ZM676 7H680V5H676V7ZM684 7H688V5H684V7ZM692 7H696V5H692V7ZM700 7H704V5H700V7ZM708 7H712V5H708V7ZM716 7H720V5H716V7ZM724 7H728V5H724V7ZM732 7H736V5H732V7ZM740 7H744V5H740V7ZM748 7H752V5H748V7ZM756 7H760V5H756V7ZM764 7H768V5H764V7ZM772 7H776V5H772V7ZM780 7H784V5H780V7ZM788 7H792V5H788V7ZM796 7H800V5H796V7ZM804 7H808V5H804V7ZM812 7H816V5H812V7ZM820 7H824V5H820V7ZM828 7H832V5H828V7ZM836 7H840V5H836V7ZM844 7H848V5H844V7ZM852 7H856V5H852V7ZM860 7H864V5H860V7ZM868 7H872V5H868V7ZM876 7H880V5H876V7ZM884 7H888V5H884V7ZM892 7H896V5H892V7ZM900 7H904V5H900V7ZM908 7H912V5H908V7ZM916 7H920V5H916V7ZM924 7H928V5H924V7ZM932 7H936V5H932V7ZM940 7H944V5H940V7ZM948 7H952V5H948V7ZM956 7H960V5H956V7ZM964 7H968V5H964V7ZM972 7H976V5H972V7ZM980 7H984V5H980V7ZM988 7H992V5H988V7ZM996 7H1000V5H996V7ZM1004 7H1008V5H1004V7ZM1012 7H1016V5H1012V7ZM1020 7H1024V5H1020V7ZM1028 7H1032V5H1028V7ZM1036 7H1040V5H1036V7ZM1044 7H1048V5H1044V7ZM1052 7H1056V5H1052V7ZM1060 7H1064V5H1060V7ZM1068 7H1072V5H1068V7ZM1076 7H1080V5H1076V7ZM1084 7H1088V5H1084V7ZM1092 7H1096V5H1092V7ZM1100 7H1104V5H1100V7ZM1108 7H1112V5H1108V7ZM1116 7H1120V5H1116V7ZM1124 7H1128V5H1124V7ZM1132 7H1136V5H1132V7ZM1140 7H1144V5H1140V7ZM1148 7H1152V5H1148V7ZM1156 7H1160V5H1156V7ZM1164 7H1168V5H1164V7ZM1172 7H1176V5H1172V7ZM1180 7H1184V5H1180V7ZM1188 7H1192V5H1188V7ZM1196 7H1200V5H1196V7Z"
    fill="#F24241"
  />
</svg>
  
    <div className="flex flex-col items-center gap-4 px-2 bg-white ">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg
    width={36}
    height={39}
    viewBox="0 0 36 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_521_3820)">
      <path
        d="M16.3015 8.47998L7.97998 16.8015H16.3015V8.47998Z"
        fill="#FA706F"
      />
      <path
        d="M34.7937 4.65659H31.7534V1.62036C31.7534 1.00396 31.2536 0.5 30.633 0.5H1.12036C0.499791 0.5 0 0.999791 0 1.62036V32.8281C0 33.4445 0.499791 33.9485 1.12036 33.9485H4.16076V36.9889C4.16076 37.6053 4.66055 38.1092 5.28112 38.1092H34.7937C35.4102 38.1092 35.9141 37.6094 35.9141 36.9889V5.77696C35.9141 5.16055 35.4143 4.65659 34.7937 4.65659ZM4.48562 17.1305C4.27737 17.3388 4.15659 17.6262 4.15659 17.9219V31.7078H2.23656V2.73656H29.5126V4.65659H17.4219C17.1262 4.65659 16.8388 4.77321 16.6305 4.98562L4.48562 17.1305ZM16.3015 8.47999V16.8015H7.97999L16.3015 8.47999ZM33.6734 35.8643H6.39732V19.0381H17.4219C18.0383 19.0381 18.5422 18.5383 18.5422 17.9177V6.90565C18.5422 6.90565 18.5422 6.90148 18.5422 6.89732H33.6734V35.8685V35.8643Z"
        fill="#18181B"
      />
    </g>
    <defs>
      <clipPath id="clip0_521_3820">
        <rect
          width="35.9099"
          height="37.6051"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
  
      </div>
      <p className="text-lg text-center max-w-32"><strong>1.</strong> Enter Information</p>
    </div>
    <div className="flex flex-col items-center gap-4 px-2 bg-white">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg width="58" height="35" viewBox="0 0 58 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_521_3858)">
<path d="M23.6523 17.3057C23.6523 20.3104 25.983 22.7985 28.975 23H31.1229V11.6115H28.975C25.9893 11.813 23.6523 14.3011 23.6523 17.3057Z" fill="#FA706F"/>
<path d="M55.9598 6.93757L50.5742 6.1313V2.19443C50.5742 1.26218 49.8183 0.5 48.8797 0.5H2.29868C1.36013 0.5 0.604248 1.25588 0.604248 2.19443V32.417C0.604248 33.3492 1.36013 34.1114 2.29868 34.1114H48.8797C49.812 34.1114 50.5742 33.3555 50.5742 32.417V28.4801L55.9598 27.6739C56.7913 27.5479 57.4023 26.8361 57.4023 25.9983V8.6068C57.4023 7.76904 56.7913 7.05725 55.9598 6.93127V6.93757ZM54.0134 24.5433L48.6278 25.3495C47.7963 25.4755 47.1853 26.1873 47.1853 27.0251V30.7289H3.98681V3.88256H47.1853V7.58637C47.1853 8.42413 47.7963 9.13592 48.6278 9.2619L54.0134 10.0682V24.5433Z" fill="#18181B"/>
<path d="M38.7006 20.493H34.5055V14.2381H38.7006C39.6329 14.2381 40.3951 13.4823 40.3951 12.5437C40.3951 11.6052 39.6392 10.8493 38.7006 10.8493H34.5055V9.91074C34.5055 8.97849 33.7496 8.21631 32.8111 8.21631H28.9183C28.8868 8.21631 28.849 8.21631 28.8175 8.21631C24.5972 8.46197 21.1831 11.58 20.421 15.5987H11.9803C11.0481 15.5987 10.2859 16.3546 10.2859 17.2932C10.2859 18.2317 11.0418 18.9876 11.9803 18.9876H20.421C21.1831 23.0063 24.5972 26.1243 28.8175 26.37C28.849 26.37 28.8805 26.37 28.9183 26.37H32.8111C33.7433 26.37 34.5055 25.6141 34.5055 24.6756V23.863H38.7006C39.6329 23.863 40.3951 23.1071 40.3951 22.1686C40.3951 21.23 39.6392 20.4741 38.7006 20.4741V20.493ZM31.123 23H28.975C25.9893 22.7985 23.6524 20.3104 23.6524 17.3058C23.6524 14.3011 25.983 11.813 28.975 11.6115H31.123V23Z" fill="#18181B"/>
</g>
<defs>
<clipPath id="clip0_521_3858">
<rect width="56.7917" height="33.6051" fill="white" transform="translate(0.604248 0.5)"/>
</clipPath>
</defs>
</svg>

  
      </div>
      <p className="text-lg text-center max-w-32"><strong>2.</strong> Tell us abour the issue</p>
    </div>
    <div className="flex flex-col items-center gap-4 px-2 bg-white">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_521_3884)">
<path d="M5.30797 10.8592C5.30797 13.0564 7.08059 14.8445 9.25881 14.8445C11.437 14.8445 13.2096 13.0564 13.2096 10.8592V10.1722H18.0468V10.8592C18.0468 13.0564 19.8194 14.8445 21.9976 14.8445C24.1758 14.8445 25.9485 13.0564 25.9485 10.8592V10.1722H30.7856V10.8592C30.7856 13.0564 32.5582 14.8445 34.7364 14.8445C36.9147 14.8445 38.6873 13.0564 38.6873 10.8592V10.1722H41.3062V16.0264H2.6891V10.1722H5.30797V10.8592Z" fill="#FA706F"/>
<path d="M1.34699 7.45988H5.30784V4.79291C5.30784 2.5957 7.08046 0.807617 9.25868 0.807617C11.4369 0.807617 13.2095 2.5957 13.2095 4.79291V7.45988H18.0467V4.79291C18.0467 2.5957 19.8193 0.807617 21.9975 0.807617C24.1757 0.807617 25.9483 2.5957 25.9483 4.79291V7.45988H30.7855V4.79291C30.7855 2.5957 32.5581 0.807617 34.7363 0.807617C36.9145 0.807617 38.6872 2.5957 38.6872 4.79291V7.45988H42.653C43.3941 7.45988 44 8.06601 44 8.81862V40.3019C44 43.3376 41.5514 45.8076 38.5419 45.8076H5.46307C2.45362 45.8076 0.00500488 43.3376 0.00500488 40.3019V8.81357C0.00500488 8.06601 0.605892 7.45483 1.352 7.45483L1.34699 7.45988ZM2.69398 16.0265H41.311V10.1723H38.6922V10.8593C38.6922 13.0565 36.9195 14.8445 34.7413 14.8445C32.5631 14.8445 30.7905 13.0565 30.7905 10.8593V10.1723H25.9533V10.8593C25.9533 13.0565 24.1807 14.8445 22.0025 14.8445C19.8243 14.8445 18.0517 13.0565 18.0517 10.8593V10.1723H13.2145V10.8593C13.2145 13.0565 11.4419 14.8445 9.26368 14.8445C7.08546 14.8445 5.31285 13.0565 5.31285 10.8593V10.1723H2.69398V16.0265ZM10.5205 4.78786C10.5205 4.08576 9.9547 3.51499 9.25868 3.51499C8.56265 3.51499 7.99681 4.08576 7.99681 4.78786V10.8593C7.99681 11.5613 8.56265 12.1321 9.25868 12.1321C9.9547 12.1321 10.5205 11.5613 10.5205 10.8593V4.78786ZM23.2594 4.78786C23.2594 4.08576 22.6935 3.51499 21.9975 3.51499C21.3015 3.51499 20.7356 4.08576 20.7356 4.78786V8.81357V10.8593C20.7356 11.5613 21.3015 12.1321 21.9975 12.1321C22.6935 12.1321 23.2594 11.5613 23.2594 10.8593V4.78786ZM36.0032 4.78786C36.0032 4.08576 35.4374 3.51499 34.7413 3.51499C34.0453 3.51499 33.4795 4.08576 33.4795 4.78786V8.81357V10.8542C33.4795 11.5563 34.0453 12.1271 34.7413 12.1271C35.4374 12.1271 36.0032 11.5563 36.0032 10.8542V4.78786ZM2.69398 40.2969C2.69398 41.8375 3.93581 43.0901 5.46307 43.0901H38.5419C40.0692 43.0901 41.311 41.8375 41.311 40.2969V18.7389H2.69398V40.2969Z" fill="#18181B"/>
<path d="M37.3451 25.4316H6.65481C5.91372 25.4316 5.30782 24.8255 5.30782 24.0728C5.30782 23.3202 5.90871 22.7141 6.65481 22.7141H37.3451C38.0862 22.7141 38.6921 23.3202 38.6921 24.0728C38.6921 24.8255 38.0913 25.4316 37.3451 25.4316Z" fill="#18181B"/>
<path d="M37.3451 31.7202H6.65481C5.91372 31.7202 5.30782 31.114 5.30782 30.3614C5.30782 29.6088 5.90871 29.0027 6.65481 29.0027H37.3451C38.0862 29.0027 38.6921 29.6088 38.6921 30.3614C38.6921 31.114 38.0913 31.7202 37.3451 31.7202Z" fill="#18181B"/>
<path d="M37.3451 38.0137H6.65481C5.91372 38.0137 5.30782 37.4076 5.30782 36.655C5.30782 35.9024 5.90871 35.2963 6.65481 35.2963H37.3451C38.0862 35.2963 38.6921 35.9024 38.6921 36.655C38.6921 37.4076 38.0913 38.0137 37.3451 38.0137Z" fill="#18181B"/>
</g>
<defs>
<clipPath id="clip0_521_3884">
<rect width="44" height="45" fill="white" transform="matrix(-1 0 0 1 44 0.80249)"/>
</clipPath>
</defs>
</svg>

  
      </div>
      <p className="text-lg text-center max-w-32"><strong>3. </strong>Schedule a visit</p>
    </div>
    <div className="flex flex-col items-center gap-4 px-2 bg-white">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg
  width={48}
  height={45}
  viewBox="0 0 48 45"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_521_4306)">
    <path
      d="M41.9582 35.7121V16.5604H39.5853V22.7927C39.5853 24.1386 38.488 25.2359 37.1421 25.2359H11.8613V36.0873H36.8279C37.053 36.0873 37.2781 36.1482 37.4751 36.2655L43.8433 40.0686L42.0754 36.242C42.0004 36.0779 41.9582 35.895 41.9582 35.7121ZM30.8676 31.2056H15.4863C14.7922 31.2056 14.2248 30.6428 14.2248 29.9441C14.2248 29.2454 14.7875 28.6826 15.4863 28.6826H30.8676C31.5617 28.6826 32.1291 29.2454 32.1291 29.9441C32.1291 30.6428 31.5664 31.2056 30.8676 31.2056Z"
      fill="#FA706F"
    />
    <path
      d="M47.834 42.7087L44.4763 35.4354V16.4572C44.4763 15.1254 43.393 14.0421 42.0612 14.0421H39.5852V2.5483C39.5852 1.20243 38.4879 0.105103 37.142 0.105103H6.05571C4.70984 0.105103 3.61251 1.20243 3.61251 2.5483V22.0236L0.165775 29.4891C-0.0640078 29.9909 0.0579177 30.5865 0.465899 30.9522C0.705061 31.168 1.00518 31.2758 1.31 31.2758C1.5304 31.2758 1.7555 31.2149 1.95714 31.0976L9.34301 26.6895V36.195C9.34301 37.5268 10.4263 38.6101 11.7581 38.6101H36.4808L46.0473 44.3218C46.2489 44.4438 46.4693 44.5 46.6944 44.5C46.9992 44.5 47.2994 44.3922 47.5385 44.1765C47.9512 43.806 48.0731 43.2151 47.8386 42.7134L47.834 42.7087ZM37.4703 36.2701C37.2733 36.1528 37.0529 36.0919 36.8231 36.0919H11.8612V25.2405H37.142C38.4879 25.2405 39.5852 24.1432 39.5852 22.7973V16.565H41.9581V35.7167C41.9581 35.8996 41.9956 36.0778 42.0753 36.2466L43.8432 40.0732L37.475 36.2701H37.4703ZM4.16118 26.849L6.0182 22.8301C6.09323 22.666 6.13543 22.4831 6.13543 22.3002V2.62333H37.0717V22.7176H11.4251C11.2 22.7176 10.9749 22.7786 10.778 22.8958L4.15649 26.849H4.16118Z"
      fill="#18181B"
    />
    <path
      d="M10.2012 9.76999H33.3904C34.0845 9.76999 34.6519 9.20726 34.6519 8.50853C34.6519 7.8098 34.0892 7.24707 33.3904 7.24707H10.2012C9.50712 7.24707 8.9397 7.8098 8.9397 8.50853C8.9397 9.20726 9.50243 9.76999 10.2012 9.76999Z"
      fill="#18181B"
    />
    <path
      d="M26.8393 15.4067C26.8393 14.7127 26.2766 14.1453 25.5778 14.1453H10.2012C9.50712 14.1453 8.9397 14.708 8.9397 15.4067C8.9397 16.1055 9.50243 16.6682 10.2012 16.6682H25.5825C26.2766 16.6682 26.844 16.1055 26.844 15.4067H26.8393Z"
      fill="#18181B"
    />
    <path
      d="M30.8677 28.6826H15.4863C14.7923 28.6826 14.2249 29.2454 14.2249 29.9441C14.2249 30.6428 14.7876 31.2055 15.4863 31.2055H30.8677C31.5617 31.2055 32.1291 30.6428 32.1291 29.9441C32.1291 29.2454 31.5664 28.6826 30.8677 28.6826Z"
      fill="#18181B"
    />
  </g>
  <defs>
    <clipPath id="clip0_521_4306">
      <rect
        width="47.9026"
        height="44.3949"
        fill="white"
        transform="translate(0.048584 0.105103)"
      />
    </clipPath>
  </defs>
</svg>

  
      </div>
      <p className="text-lg text-center max-w-32"><strong>4. </strong>Receive Confirmation</p>
    </div>
    <div className="flex flex-col items-center gap-4 px-2 bg-white">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg
  width={52}
  height={45}
  viewBox="0 0 52 45"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_521_3909)">
    <path
      d="M44.9772 37.2237C42.5048 35.4818 39.1947 34.5215 35.6547 34.5215C32.1146 34.5215 28.8045 35.4818 26.3321 37.2237C24.488 38.5263 23.3029 40.1354 22.8892 41.862H48.4201C48.0064 40.1354 46.8213 38.5263 44.9772 37.2237Z"
      fill="#FA706F"
    />
    <path
      d="M27.0369 30.4195L22.3271 28.2179C21.7498 27.9471 21.4331 27.3137 21.5659 26.6905C21.5813 26.6139 21.806 25.5769 22.3168 24.0802C20.4779 23.4263 18.4346 23.079 16.3402 23.079C12.8002 23.079 9.49005 24.0393 7.01766 25.7812C5.17359 27.0838 3.98847 28.6929 3.57471 30.4195H27.0369Z"
      fill="#FA706F"
    />
    <path
      d="M46.5606 34.9812C44.9158 33.8217 42.9747 32.9533 40.865 32.4169C41.1153 32.187 41.3553 31.9418 41.5852 31.6813L48.9819 28.2179C49.5592 27.9472 49.8759 27.3138 49.7431 26.6906C49.7124 26.5424 48.9615 23.0535 46.9335 19.4471C44.1444 14.4921 40.2724 11.7234 35.7414 11.4425C35.7414 11.4425 35.7312 11.4425 35.7261 11.4425C35.7056 11.4425 35.6801 11.4425 35.6597 11.4425C35.6341 11.4425 35.6086 11.4425 35.583 11.4425H35.5728C31.0418 11.7234 27.1698 14.4921 24.3807 19.4471C23.9822 20.152 23.6349 20.8518 23.3335 21.5261C22.7562 21.3167 22.1586 21.1328 21.5507 20.9795C23.3335 19.3449 24.5339 16.893 24.728 14.1141C24.7587 14.0681 24.7893 14.0221 24.8149 13.9761L27.0012 10.007C27.1289 9.77206 27.1902 9.50644 27.1647 9.2357C27.1595 9.13864 26.9654 6.87058 25.5402 4.61274C24.2121 2.50304 21.5456 0 16.4016 0C16.3812 0 16.3607 0 16.3454 0C16.3301 0 16.3045 0 16.2892 0C11.1452 0 8.47871 2.50815 7.15057 4.61274C5.72537 6.87058 5.53126 9.14375 5.52615 9.2357C5.50572 9.50133 5.56191 9.77206 5.68961 10.007L7.87594 13.9761C7.90148 14.0272 7.93213 14.0681 7.96278 14.1141C8.15689 16.893 9.35733 19.3449 11.1401 20.9795C9.0304 21.5159 7.08927 22.3843 5.44442 23.5439C2.36415 25.7098 0.668213 28.6419 0.668213 31.7937C0.668213 32.5497 1.2812 33.1678 2.04233 33.1678H28.1403C26.9195 33.6531 25.7803 34.261 24.7536 34.9863C21.6784 37.1573 19.9825 40.0844 19.9825 43.2361C19.9825 43.9922 20.5955 44.6103 21.3566 44.6103H49.9576C50.7136 44.6103 51.3317 43.9973 51.3317 43.2361C51.3317 40.0844 49.6358 37.1522 46.5606 34.9863V34.9812ZM22.8891 41.862C23.3028 40.1354 24.4879 38.5263 26.332 37.2237C28.8044 35.4818 32.1145 34.5215 35.6545 34.5215C39.1946 34.5215 42.5047 35.4818 44.9771 37.2237C46.8212 38.5263 48.0063 40.1354 48.42 41.862H22.8891ZM7.02286 25.7864C9.49525 24.0445 12.8054 23.0841 16.3454 23.0841C18.4449 23.0841 20.4831 23.4264 22.322 24.0854C21.8112 25.5821 21.5865 26.619 21.5711 26.6957C21.4383 27.3189 21.755 27.9523 22.3323 28.223L27.0421 30.4247H3.5748C3.98857 28.6981 5.17368 27.089 7.01776 25.7864H7.02286ZM35.6597 14.1907C42.8163 14.6964 45.9119 23.2067 46.7854 26.2155L43.6898 27.6662C43.935 26.7467 44.0729 25.7711 44.0729 24.7596C44.0729 24.0036 43.4599 23.3855 42.6988 23.3855C41.9377 23.3855 41.3247 23.9985 41.3247 24.7596C41.3247 26.6599 40.7117 28.3865 39.7156 29.6533C39.685 29.6891 39.6594 29.7248 39.6288 29.7606C38.6071 31.0121 37.2023 31.7835 35.6545 31.7835C34.1068 31.7835 32.702 31.0121 31.6803 29.7606C31.6548 29.7248 31.6241 29.6891 31.5986 29.6584C30.6025 28.3916 29.9895 26.665 29.9895 24.7647C29.9895 24.0087 29.3765 23.3906 28.6154 23.3906C27.8543 23.3906 27.2413 24.0036 27.2413 24.7647C27.2413 25.7762 27.3741 26.757 27.6244 27.6713L24.5288 26.2206C25.3972 23.2118 28.4826 14.7066 35.6597 14.1958V14.1907ZM10.6753 13.4704C10.6753 13.4193 8.31014 9.08245 8.31014 9.08245C8.41741 8.47457 8.72391 7.21794 9.52079 5.99707C10.9205 3.8414 13.1987 2.74823 16.2841 2.74823C16.2994 2.74823 16.3199 2.74823 16.3352 2.74823H16.3403C19.4563 2.73291 21.7499 3.83118 23.1598 5.99707C23.9567 7.22305 24.2581 8.47968 24.3704 9.08245C24.3704 9.08245 22.0053 13.4245 22.0053 13.4755C21.944 17.2863 19.4257 20.341 16.3352 20.341C13.2447 20.341 10.7366 17.2761 10.665 13.4755L10.6753 13.4704Z"
      fill="#18181B"
    />
  </g>
  <defs>
    <clipPath id="clip0_521_3909">
      <rect
        width="50.6635"
        height="44.6052"
        fill="white"
        transform="translate(0.668213)"
      />
    </clipPath>
  </defs>
</svg>

  
      </div>
      <p className="text-lg text-center max-w-28"><strong>5. </strong>Make    the Visit</p>
    </div>
    <div className="flex flex-col items-center gap-4 px-2 bg-white">
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl">
      <svg
  width={56}
  height={33}
  viewBox="0 0 56 33"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_521_3944)">
    <path
      d="M15.0435 9.30176H10.3315V23.3094H15.0435V9.30176Z"
      fill="#FA706F"
    />
    <path d="M27.554 9.30176H22.842V23.3094H27.554V9.30176Z" fill="#FA706F" />
    <path
      d="M40.0643 9.30176H35.3523V23.3094H40.0643V9.30176Z"
      fill="#FA706F"
    />
    <path
      d="M54.1575 6.24601L48.9322 5.46373V1.64401C48.9322 0.739498 48.1988 0 47.2882 0H2.09323C1.1826 0 0.449219 0.733386 0.449219 1.64401V30.9672C0.449219 31.8717 1.1826 32.6112 2.09323 32.6112H47.2882C48.1927 32.6112 48.9322 31.8778 48.9322 30.9672V27.1475L54.1575 26.3652C54.9643 26.243 55.5571 25.5524 55.5571 24.7396V7.86557C55.5571 7.05273 54.9643 6.36212 54.1575 6.23989V6.24601ZM52.2691 23.3278L47.0437 24.1101C46.237 24.2323 45.6441 24.9229 45.6441 25.7357V29.3293H3.73112V3.2819H45.6441V6.87549C45.6441 7.68833 46.237 8.37894 47.0437 8.50117L52.2691 9.28345V23.3278Z"
      fill="#18181B"
    />
    <path
      d="M16.6877 6.01379H8.68771C7.7832 6.01379 7.0437 6.74718 7.0437 7.6578V24.9474C7.0437 25.8519 7.77709 26.5914 8.68771 26.5914H16.6877C17.5922 26.5914 18.3317 25.858 18.3317 24.9474V7.6578C18.3317 6.75329 17.5984 6.01379 16.6877 6.01379ZM15.0437 23.3095H10.3317V9.30181H15.0437V23.3095Z"
      fill="#18181B"
    />
    <path
      d="M29.198 6.01379H21.198C20.2935 6.01379 19.554 6.74718 19.554 7.6578V24.9474C19.554 25.8519 20.2873 26.5914 21.198 26.5914H29.198C30.1025 26.5914 30.842 25.858 30.842 24.9474V7.6578C30.842 6.75329 30.1086 6.01379 29.198 6.01379ZM27.554 23.3095H22.842V9.30181H27.554V23.3095Z"
      fill="#18181B"
    />
    <path
      d="M41.7082 6.01379H33.7082C32.8037 6.01379 32.0642 6.74718 32.0642 7.6578V24.9474C32.0642 25.8519 32.7976 26.5914 33.7082 26.5914H41.7082C42.6127 26.5914 43.3522 25.858 43.3522 24.9474V7.6578C43.3522 6.75329 42.6189 6.01379 41.7082 6.01379ZM40.0642 23.3095H35.3522V9.30181H40.0642V23.3095Z"
      fill="#18181B"
    />
  </g>
  <defs>
    <clipPath id="clip0_521_3944">
      <rect
        width="55.1017"
        height="32.6051"
        fill="white"
        transform="translate(0.449219)"
      />
    </clipPath>
  </defs>
</svg>

  
      </div>
      <p className="text-lg text-center max-w-32"><strong>6. </strong>Get Device Repaired</p>
    </div>
  </div>
</div>
</div>
</section>
        {/* Book Repair Section */}
        <section id="bookrepair" className="bg-white dark:bg-zinc-900 dark:text-white px-4">
          <div className="container flex flex-col items-center">
            <div className="w-full lg:w-2/5 py-16">
              <Bookrepair />
            </div>
          </div>
        </section>

        <FAQ />
        <Footer />
      </main>
    </>
  );
}