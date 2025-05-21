import client from '@/public/client.jpg'
import Image from 'next/image';
import { Quote } from 'lucide-react';
const TestimonialPage = () => {
    return ( 
        <div className=" w-[80%] mx-auto pb-10 ">
            <h1 className="text-center text-3xl my-5 mb-10">TESTIMONIAL</h1>
            <div className=" rounded-[8px]  mx-auto bg-[#160E0B] text-white flex flex-col items-center p-[50px]">
                <Image src={client} className='rounded-full size-[150px] border-6 border-[#ffffff73]' alt=''/>
                <p className='text-2xl mt-3 mb-3 text-[#fd9c6b]'>
                    Samantha Jonas
                </p>
                <blockquote className='w-[55vw] text-center mb-5'>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable 
                </blockquote>
                      <Quote />
            </div>

        </div>
     );
}
 
export default TestimonialPage;