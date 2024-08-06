import { useState, useEffect } from "react";
import { Button, Badge } from '@shopify/polaris'; // Import Badge from Polaris
import Link from "next/link";
import { urlForImage } from "./../../sanity/lib/image";
import { PortableText } from '@portabletext/react';

export default function Productcard({ productTitle, productDescription, initialStock, image, condition }) {
    const [inStock, setInStock] = useState(initialStock);

    useEffect(() => {
        // Any side effects related to inStock can be handled here
    }, [inStock]);

    const [tone, setTone] = useState('');
    const [completion, setCompletion] = useState('');

    useEffect(() => {
        if (condition === "brand new") {
            setTone("success");
            setCompletion("complete")
        } if (condition === "like new") {
            setTone("success");
            setCompletion("partiallyComplete")
        } if (condition === "used") {
          setTone("warning");
          setCompletion("complete")
      }
        // Any side effects related to inStock can be handled here
    }, [condition]);

    return (
        <>
            <div
               
                className="flex hover:shadow-xl hover:shadow-slate-200 bg-white w-40 lg:w-64  h-64 lg:h-96 flex-col rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out focus:outline-none "
                tabIndex="0" // Make div focusable
            >
                <div className="w-full relative h-3/5">
                    {condition && (
                        <div className="absolute top-4 right-4">
                            <Badge progress={completion} tone={tone}>
                                {condition}
                            </Badge>
                        </div>
                    )}
                    {image && <img src={urlForImage(image).url()} alt={productTitle} className="h-full w-full object-cover" />}
                </div>
                <div className="flex flex-col p-3 h-2/5 justify-between gap-2">
                    <div className="flex gap-1 lg:gap-2 flex-col h-full">
                        <h6
                            style={{
                                lineHeight: '100%',
                                display: '-webkit-box',
                                WebkitLineClamp: 2, // Adjust the number of lines to your needs
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="font-medium text-sm lg:text-lg"
                        >
                            {productTitle}
                        </h6>
                        <div
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2, // Adjust the number of lines to your needs
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="w-full text-zinc-500 text-xs lg:text-base font-regular"
                        > <PortableText
                    value={productDescription}
                    components={{
                      block: {
                        h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
                        normal: ({ children }) => <p className="text-xs lg:text-base whitespace-pre-wrap text-slate-500">{children}</p>,
                      },
                      list: {
                        bullet: ({ children }) => <ul className="list-disc ml-5 flex flex-col gap-4">{children}</ul>,
                        number: ({ children }) => <ol className="list-decimal ml-5 flex flex-col gap-4">{children}</ol>,
                      },
                      listItem: {
                        bullet: ({ children }) => <li className="text-xs lg:text-base text-slate-500">{children}</li>,
                        number: ({ children }) => <li className="text-xs lg:text-base text-slate-500">{children}</li>,
                      },
                      marks: {
                        strong: ({ children }) => <strong>{children}</strong>,
                        em: ({ children }) => <em>{children}</em>,
                        link: ({ value, children }) => {
                          const { href } = value;
                          return <a href={href} className="text-blue-500 underline">{children}</a>;
                        },
                      },
                    
                    }}
                  /></div>
                       
                        
                    </div>
                    {/* Display condition tag */}
                    <span className={`text-xs lg:text-lg ${inStock ? 'text-green-500' : 'text-red-600'}`}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
            </div>
        </>
    );
}
