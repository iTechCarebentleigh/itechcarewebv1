import { useState ,useCallback,useRef } from 'react';
import { Footer, Header, Usersform, Magnifier, Breadcrumb } from '@/components';
import { useRouter } from 'next/router';
import { client } from './../../../sanity/lib/client'; // Import the sanity client
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import { urlForImage } from "./../../../sanity/lib/image";
import { TextContainer,TextField, ButtonGroup, Button, Icon , Frame, Modal} from '@shopify/polaris';
import Image from 'next/image';

const ProductPage = ({ product }) => {
  const [inStock, setInStock] = useState(product.instock);
  const router = useRouter();
  const imageRef=useRef();
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => 
  {
    console.log("closed")
    setActive(!active), [active]

  }
);


  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleCall = () => {
    window.location.href = 'tel:+6191912669';
  };

  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/products', text: 'Products' },
    { text: product.name },
  ];

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <main>
        <section className='w-full bg-slate-50'>
          <div className="flex gap-4 gap-28 py-16 container flex-col justify-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <div className='px-8 lg:px-0 mt-16'>
              <Breadcrumb links={breadcrumbLinks} />
              <h1 className="text-zinc-950 text-2xl mb-12 lg:text-4xl">{product.name}</h1>
            </div>
            <div className="text-2xl flex flex-col px-8 lg:px-0 lg:flex-row gap-16 font-regular whitespace-pre-wrap">
              <div className='w-full lg:w-1/2 h-100 flex justify-center'>
                <div className='sticky top-20 h-fit'>
                  <div ref={imageRef} onClick={handleChange} className='h-fit cursor-pointer'><Magnifier  src={urlForImage(product.image).url()} /></div>
       
        <Modal
          activator={imageRef}
          open={active}
          size="large"
          onClose={handleChange}
          title={product.name}
         
           >
          <Modal.Section>
            <TextContainer>
            <div className='flex justify-center'><img className='w-1/2 ' src={urlForImage(product.image).url()}/></div>

           
           </TextContainer>
          </Modal.Section>
        </Modal>
       
                </div>
              </div>
              <div className='w-full lg:w-1/2 flex flex-col gap-16'>
                <div className='flex flex-col gap-8'>
                  <h6>Description:</h6>
                  <PortableText
                    value={product.description}
                    components={{
                      block: {
                        h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
                        normal: ({ children }) => <p className="text-base whitespace-pre-wrap text-slate-500">{children}</p>,
                      },
                      list: {
                        bullet: ({ children }) => <ul className="list-disc ml-5 flex flex-col gap-4">{children}</ul>,
                        number: ({ children }) => <ol className="list-decimal ml-5 flex flex-col gap-4">{children}</ol>,
                      },
                      listItem: {
                        bullet: ({ children }) => <li className="text-base text-slate-500">{children}</li>,
                        number: ({ children }) => <li className="text-base text-slate-500">{children}</li>,
                      },
                      marks: {
                        strong: ({ children }) => <strong>{children}</strong>,
                        em: ({ children }) => <em>{children}</em>,
                        link: ({ value, children }) => {
                          const { href } = value;
                          return <a href={href} className="text-blue-500 underline">{children}</a>;
                        },
                      },
                      types: {
                        image: ({ value }) => {
                          return (
                            <div className="relative w-full h-64">
                              <Image
                                src={urlForImage(value.asset).url()}
                                alt={value.alt || 'Image'}
                                layout="fill"
                                objectFit="cover"

                                className="w-full h-fit"
                              />
                            </div>
                          );
                        }
                      }
                    }}
                  />
                </div>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-row gap-4 '>
                    <h6>Condition:</h6>
                    <span className='text-md capitalize font-semibold'>{product.condition}</span>
                  </div>
                  
                  <div className='flex flex-row gap-4 items-center'>
                    
                    {inStock ? <div className='flex flex-col gap-4 items-start'>
                      <div className='flex flex-row gap-4 items-center'>
                    <h6>Buy now:</h6>
                    <Button size="medium" onClick={handleCall}>Call: +61 9191 2669</Button></div>
                    <div className='w-full flex flex-col text-center'>Or</div>

                    <Usersform />
                    </div>:<span className='text-red-600'>Out of stock</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "Product"]{ "slug": slug.current }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "Product" && slug.current == $slug][0]{
    name,
    description,
    condition,
    image,
    instock,
    "slug": slug.current
  }`;
  const product = await client.fetch(query, { slug: params.slug });

  return {
    props: { product },
    revalidate: 1, // Optionally revalidate data at an interval
  };
}

export default ProductPage;
