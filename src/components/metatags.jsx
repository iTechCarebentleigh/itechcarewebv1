import React from 'react';
import Head from 'next/head';

const MetaTags = ({
  title = "iTech Care - Top Repairs, Quality Accessories",
  description = "Your closest repair shop that caters to all the equipment needed for repairing your device. We repair mobile, laptop, tablets, and any electronics essential to your day.",
  keywords = "Mobile Repair, Laptop Repair, Tablet Repair, Mobile Screen Replacement",
  url = "https://www.itechcare.com.au",
  author = "iTech Care - Top Repairs, Quality Accessories",
  imageWidth = "1200",
  imageHeight = "630",
}) => {
  return (
    <>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph (for Social Media Sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      </>
  );
};

export default MetaTags;
