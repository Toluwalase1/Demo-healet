import Image from "next/image";
import about from '@/public/about-img.jpg'


const AboutPage = () => {
    return ( 
        <div className=" w-[80%] mx-auto flex flex-col items-center lg:flex-row justify-between h-[full] py-4 mb-10">
                <div className="w-[53%]  p-2 flex flex-col justify-center items-center relative">
                    <Image src={about} alt="" className="w-full rounded-sm min-w-[300px]" />
                    <div className="black-box hidden lg:block  size-[200px] bg-black absolute top-[-3%] -z-10 left-[-2%] ">

                    </div>
                </div>
                <div className=" max-w-[450px]  flex flex-col justify-center p-2">
                    <div className="">
                        <h1 className="mb-1 text-4xl">About Us</h1>
                        <p className="mb-6 font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, 
                            eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                           
                        </p>
                        
                        <a href="#"  className=" text-white px-[40px] py-[10px] bg-[#fd9c6b] border border-[#fd9c6b] hover:bg-white hover:text-[#fd9c6b] ">
                            Read More
                        </a>

                    </div>
                </div>
        </div>
     );
}
 
export default AboutPage;