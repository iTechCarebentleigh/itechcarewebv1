import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Import pagination styles if used
import { Pagination } from 'swiper/modules'; // Import pagination module

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data.reviews || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        width={14}
        height={13}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
          fill="#FFD500"
        />
      </svg>
    ));
  };

  return (
    <section className="flex flex-col items-center px-4 bg-zinc-800">
      <div className="flex gap-16 container flex-col py-16 items-start mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <div className="flex flex-col gap-6 w-full items-center">
          <h1 className="text-4xl font-regular text-center text-white">
            Words from our <span className="block"><span className="text-[var(--colors-brand-primary-600)]">Valuable</span> Customers</span>
          </h1>
        </div>

        <div className="py-6 w-full">
          {loading ? (
            <p className="text-center text-gray-500">Loading reviews...</p>
          ) : reviews && reviews.length > 0 ? (
            <div className='w-full h-fit relative'>
 <div style={{zIndex:2,background:'linear-gradient(90deg, #27272A 0%, rgba(39, 39, 42, 0.00) 100%)'}} className="absolute -left-2 top-0 h-full w-16 lg:w-56  pointer-events-none"></div>
  
  {/* Faded gradient on the right */}
  <div style={{zIndex:2,background:'linear-gradient(270deg, #27272A 0%, rgba(39, 39, 42, 0.00) 100%)'}} className="absolute -right-2 top-0 h-full w-16 lg:w-56  pointer-events-none"></div>
              <Swiper
                loop={true} // Enable looping
                className='h-fit'
                grabCursor
                pagination={{ clickable: true }}
                breakpoints={{
                  // Adjust the number of slides for different screen sizes
                  340: {
                    slidesPerView: 1.05, // Show 1.5 slides on mobile
                    spaceBetween:16

                  },
                  768: {
                    slidesPerView: 2, // Show 2 slides on tablet
                    spaceBetween:32

                  },
                  1024: {
                    slidesPerView: 2.5, // Show 2.5 slides on desktop
                    spaceBetween:50

                  },
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className='overflow-hidden p-6 bg-zinc-900 rounded-xl'>
                    <div className='flex flex-col h-[220px] gap-4'>
                    <p className="text-base text-white h-2/3 overflow-hidden w-full line-clamp-6 pointer-events-none">
        "{review.text}"
      </p>                    <div className="flex flex-row items-center gap-4">
                        {/* Display the profile photo */}
                        {review.profile_photo_url && (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-10 h-10 rounded-full"
                          />
                        )}
                        <div>
                          <p className="text-lg font-semibold text-white">{review.author_name}</p>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <p className="text-center text-gray-500">No reviews available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
