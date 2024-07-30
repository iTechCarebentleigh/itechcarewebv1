import React, { useState, useEffect, useCallback } from 'react';
import { Footer, Header, Productcard, Breadcrumb } from '@/components';
import { client } from '../../../sanity/lib/client';
import Head from 'next/head';
import Link from 'next/link';
import { TextField, ButtonGroup, Button, Icon } from '@shopify/polaris';
import { SearchIcon } from '@shopify/polaris-icons';

const Productshomepage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of products to display per page

  const handleSearchChange = useCallback((value) => setSearchTerm(value), []);
  const handleFilterChange = (newFilter) => setFilter(newFilter);

  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { text: "Products" },
  ];

  useEffect(() => {
    let results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== 'all') {
      results = results.filter(product => product.condition === filter);
    }

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to the first page when filtering or searching
  }, [searchTerm, filter, products]);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>All Products</title>
      </Head>
      <Header />

      <section className="bg-slate-50 px-4">
        <div className="flex gap-4 container flex-col justify-center items-center mx-auto h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <div className="py-32 lg:py-16 w-full mt-4 justify-center flex flex-col gap-16">
            <div className="w-full flex flex-col">
              <Breadcrumb links={breadcrumbLinks} />
              <h2 className="text-4xl">
                All Listings ({filteredProducts.length})
              </h2>
            </div>
            <div className="w-full flex flex-col justify-center mb-4">
              <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                <div className="w-full lg:w-1/3 mb-4">
                  <TextField
                    value={searchTerm}
                    onChange={handleSearchChange}
                    autoComplete="off"
                    placeholder="Search products"
                    clearButton
                    prefix={<Icon source={SearchIcon} />}
                    onClearButtonClick={handleClearSearch}
                  />
                </div>
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4'>
                  <span className='text-lg font-medium'>Filter:</span>
                  <ButtonGroup variant="segmented" >
                    <Button pressed={filter === 'all'}  onClick={() => handleFilterChange('all')}><span style={{fontSize:'16px!important'}}>All</span></Button>
                    <Button pressed={filter === 'brand new'} onClick={() => handleFilterChange('brand new')}><span style={{fontSize:'16px!important'}}>Brand New</span></Button>
                    <Button pressed={filter === 'used'} onClick={() => handleFilterChange('used')}><span style={{fontSize:'16px!important'}}>Used</span></Button>
                    <Button pressed={filter === 'like new'} onClick={() => handleFilterChange('like new')}><span style={{fontSize:'16px!important'}}>Like New</span></Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center min-h-96">
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <Link href={`/products/${product.slug}`} key={product.name}>
                    <Productcard
                      productTitle={product.name}
                      productDescription={product.description}
                      image={product.image}
                      initialStock={product.instock}
                      condition={product.condition}
                    />
                  </Link>
                ))
              ) : (
               <div className='flex flex-col gap-4 items-center'> 
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B0BBC9" className="size-22">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>


               <p className="text-center text-xl">No Results Found</p>
               </div>
              )}
            </div>
            {/* Pagination */}
            <div className="flex justoi justify-center mt-8">
              <ButtonGroup>
                {Array.from({ length: Math.ceil(filteredProducts.length / pageSize) }, (_, index) => (
                  <Button key={index + 1} onClick={() => paginate(index + 1)} pressed={currentPage === index + 1}>
                    {index + 1}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const query = `*[
    _type=="Product" 
   ] | order(_createdAt desc){
     name,
     "description":description[0].children[0].text,
     condition,
     image,
     instock,
     "slug":slug.current
   }`;

  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
}

export default Productshomepage;
