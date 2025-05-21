"use client"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Openbar = ({ isOpen, isClose}) => {

    if(!isOpen){
        return;
    }
    
    return ( 
        <div className='fixed w-full h-full bg-[#160e0b] top-0 bottom-0 left-0 right-0 z-[100]'>
            

            <button className='cursor-pointer text-white  absolute top-4 right-10 font-extrabold  ' onClick={isClose}>
                <X />
            </button>

            <div className=' w-[100%] top-[40%] z-[101] relative text-white flex flex-col text-center'>
              <Link href={'/'} className=' mb-5 text-3xl font-bold hover:text-[#fd9c6b]' onClick={isClose}> 
                Home
              </Link>
               <Link href={'/about'} className=' mb-5 text-3xl font-bold hover:text-[#fd9c6b]' onClick={isClose}>
                About
              </Link> 
              <Link href={'/blog'} className=' mb-5 text-3xl font-bold hover:text-[#fd9c6b]' onClick={isClose}>
                Blog
              </Link> 
              <Link href={'/shop'} className=' mb-5 text-3xl font-bold hover:text-[#fd9c6b]' onClick={isClose}>
                Shop
              </Link>
              
        
            </div>
        </div>
     );
}
 


const Header = () => {
    const [bar, setBar] = useState(false);
    // const tab = use
    const pathname = usePathname()
   
    const homePage = pathname === '/'
   
    return ( 
        // <header className={`bg-[#160e0b] p-5 font-bold flex justify-between items-center absolute  border border-white mb-10`} >
        <header className={`${homePage ? `bg-transparent absolute`:'bg-[#160e0b]' } p-5 font-bold flex justify-between items-center `} >
            <div className='text-white text-2xl'>
                <Link href={'/'}>
                
            HEALET
                </Link>
            </div>
            <button className='bg-white cursor-pointer rounded-full w-[50px] h-[50px]  flex flex-col items-center justify-center fixed right-5' onClick={() => setBar(true)}>
                <Menu className='size-8 z-10 text-black' />
            </button>
           
            <Openbar isOpen={bar} isClose={() => setBar(false)} />
        </header>
     
     );
}
 
export default Header;