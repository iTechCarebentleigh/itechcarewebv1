import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from './ui/accordion';
import { client } from '../../sanity/lib/client';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const queryfaqs = `*[_type == "faqs"]`;
        const fetchedFaqs = await client.fetch(queryfaqs);
        setFaqs(fetchedFaqs);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load FAQs.");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>{error}</p>;
  if (!faqs || faqs.length === 0) return <p>No FAQs available.</p>;

  return (
    <section className="flex flex-col items-center px-4 bg-zinc-50">
      <div className="flex gap-16 container flex-col lg:flex-row py-16 items-start mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-4xl font-regular">
            Frequently asked <span className="block text-[var(--colors-brand-primary-600)]">questions</span>
          </h1>
          <p className="text-zinc-400 text-xl font-regular">
            You ask, and we answer your frequently asked questions.
          </p>
        </div>
        <div className="py-6 px-4 bg-white w-full">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
