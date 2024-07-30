import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@shopify/polaris';
import {
    ChevronLeftIcon
  } from '@shopify/polaris-icons';

const Breadcrumb = ({ links }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav className="breadcrumb">
      <ul className="flex space-x-2 text-gray-600  flex flex-col lg:flex-row gap-4 ">
        <li>
        <Button variant="plain"  onClick={handleBackClick} icon={ChevronLeftIcon}>Back</Button>

         
        </li>
       <div className='flex flex-row gap-2'>
            {links.map((link, index) => (
              <li key={index} className="flex items-center text-base">
                {index > 0 && <span className="mx-2">/</span>}
                {link.href ? (
                  <Link className='text-blue-500 hover:underline' href={link.href}>{link.text}
                    
                  </Link>
                ) : (
                  <span className="text-gray-500 max-w-32 md:max-w-64 xl:max-w-fit	truncate">{link.text}</span>
                )}
              </li>
            ))}
       </div>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
