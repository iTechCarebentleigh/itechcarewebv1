import { useState, useEffect } from "react";
import { Button, Badge } from '@shopify/polaris'; // Import Badge from Polaris
import Link from "next/link";
import { urlForImage } from "./../../sanity/lib/image";

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
                style={{ height: '410px' }}
                className="flex hover:shadow-xl hover:shadow-slate-200 bg-white w-64 max-w-64 flex-col rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
                    <div className="flex gap-2 flex-col h-full">
                        <h6
                            style={{
                                lineHeight: '23.4px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2, // Adjust the number of lines to your needs
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="font-medium text-lg"
                        >
                            {productTitle}
                        </h6>
                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2, // Adjust the number of lines to your needs
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="w-full text-zinc-500 text-base font-regular"
                        >
                            {productDescription}
                        </p>
                    </div>
                    {/* Display condition tag */}
                    <span className={`text-lg ${inStock ? 'text-green-500' : 'text-red-600'}`}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
            </div>
        </>
    );
}
