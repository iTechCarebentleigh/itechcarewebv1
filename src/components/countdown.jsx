import React, { useEffect, useState } from 'react';

const Countdown = ({setIsCompleted,isCompleted}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('August 1, 2024 00:00:00').getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsCompleted(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsCompleted(true);
      }
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {!isCompleted && (
        <div className='flex flex-col'>
          <h5 className="text-zinc-950 text-xl lg:text-2xl font-medium">15% off on repairs & Accessories</h5>
          <p className="text-lg lg:text-2xl text-zinc-500">Offer ends in:</p>
          <div className="text-lg lg:text-2xl text-zinc-500  flex flex-row gap-2 mt-8 w-full">
            <div className='py-2 border-2 border-zinc-400 flex justify-center rounded-lg countdown-field border-zinc-100 bg-zinc-50'>
              {timeLeft.days}
            </div>:
            <div className='py-2 flex justify-center border-2 border-zinc-400 countdown-field rounded-lg border-zinc-100 bg-zinc-50'>
              {timeLeft.hours}
            </div>:
            <div className='py-2 flex justify-center border-2 border-zinc-400 countdown-field rounded-lg border-zinc-100 bg-zinc-50'>
              {timeLeft.minutes}
            </div>:
            <div className='py-2 flex justify-center border-2 border-zinc-400 countdown-field rounded-lg border-zinc-100 bg-zinc-50'>
              {timeLeft.seconds}
            </div>
          </div>
          <div className="text-lg lg:text-lg text-zinc-500 flex flex-row gap-5 w-full">
            <div className='flex justify-center countdown-label'>days</div>
            <div className='flex justify-center countdown-label'>hrs</div>
            <div className='flex justify-center countdown-label'>mins</div>
            <div className='flex justify-center countdown-label'>secs</div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Countdown;
