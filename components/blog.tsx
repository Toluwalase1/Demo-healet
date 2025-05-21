import Image from "next/image";
import b1 from '@/public/b1.jpg'
import b2 from '@/public/b2.jpg'
const BlogPage = () => {
    const dateToday = new Date();
    const yearCal = ['Jan','Feb','March','April','May','June','July','August','September','October','November','December']
    return ( 
        <div className="my-10">
            <h1 className="text-4xl text-center my-5">
                LATEST FROM BLOG
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-3 w-[90%] mx-auto">
                <div className=" first-card  relative hidden">
                    <div className="  w-full">
                        <Image src={b1} className="w-full object-cover h-full" alt=""/>
                    </div>
                    <div className="mb-2 ps-4 py-5 bg-gray-100">
                        <h1 className="text-2xl font-bold">
                            Molestiae ad reiciendis dignissimos
                        </h1>
                        <p className="mb-5">
                            alteration in some form, by injected humour, or 
                            randomised words which don&apos;t look even slightly believable.
                        </p>
                        <a href="#" className="border border-black px-[20px] py-[10px] font-bold hover:bg-black hover:text-white">
                            Read More
                        </a>
                    </div>
                    <div className="border-2 border-white bg-black size-[80px] text-white flex flex-col items-center absolute bottom-[25%] left-[9%]">
                        <span className="text-2xl">
                        {dateToday.getDate()}
                        </span>
                        <span className="text-3xl">
                        {yearCal[dateToday.getMonth()]}
                        </span>
                        <br />
                        {/* {dateToday.getMonth()} */}
                        {/* {dateToday.getDay()} */}
                        {/* {dateToday} */}
                    </div>
                </div>
               {/* first card  */}
               <div className="relative">
                    <div className="relative">
                        <Image src={b1} className="w-full object-cover" alt=""/>
                        {/* Date Box - Positioned relative to the image container */}
                        <div className="border-2 border-white bg-black w-[80px] h-[80px] text-white flex flex-col items-center justify-center absolute left-5 -bottom-10">
                            <span className="text-2xl">
                            {dateToday.getDate()}
                            </span>
                            <span className="text-xl">
                            {yearCal[dateToday.getMonth()]}
                            </span>
                        </div>
                    </div>
                    <div className="mb-2 ps-4 py-5 pt-12 bg-gray-100">
                        <h1 className="text-2xl font-bold">
                            Molestiae ad reiciendis dignissimos
                        </h1>
                        <p className="mb-5">
                            alteration in some form, by injected humour, or 
                            randomised words which don&apos;t look even slightly believable.
                        </p>
                        <a href="#" className="border border-black px-[20px] py-[10px] font-bold hover:bg-black hover:text-white">
                            Read More
                        </a>
                    </div>
                </div>
                    <div className=" second-card relative hidden">
                    <div className="  w-full">
                        <Image src={b2} className="w-full object-cover h-full" alt=""/>
                    </div>
                    <div className="mb-2 ps-4 py-5 bg-gray-100">
                        <h1 className="text-2xl font-bold">
                            Molestiae ad reiciendis dignissimos
                        </h1>
                        <p className="mb-5">
                            alteration in some form, by injected humour, or 
                            randomised words which don&apos;t look even slightly believable.
                        </p>
                        <a href="#" className="border border-black px-[20px] py-[10px] font-bold hover:bg-black hover:text-white">
                            Read More
                        </a>
                    </div>
                    <div className="border-2 border-white bg-black size-[80px] text-white flex flex-col items-center absolute bottom-[25%] left-[9%]">
                        <span className="text-2xl">
                        {dateToday.getDate()}
                        </span>
                        <span className="text-3xl">
                        {yearCal[dateToday.getMonth()]}
                        </span>
                        <br />
                        {/* {dateToday.getMonth()} */}
                        {/* {dateToday.getDay()} */}
                        {/* {dateToday} */}
                    </div>
               
                </div>
                {/* second card */}
                 <div className="relative">
                    <div className="relative">
                        <Image src={b2} className="w-full object-cover" alt=""/>
                        {/* Date Box - Positioned relative to the image container */}
                        <div className="border-2 border-white bg-black w-[80px] h-[80px] text-white flex flex-col items-center justify-center absolute left-5 -bottom-10">
                            <span className="text-2xl">
                            {dateToday.getDate()}
                            </span>
                            <span className="text-xl">
                            {yearCal[dateToday.getMonth()]}
                            </span>
                        </div>
                    </div>
                    <div className="mb-2 ps-4 py-5 pt-12 bg-gray-100">
                        <h1 className="text-2xl font-bold">
                            Molestiae ad reiciendis dignissimos
                        </h1>
                        <p className="mb-5">
                            alteration in some form, by injected humour, or 
                            randomised words which don&apos;t look even slightly believable.
                        </p>
                        <a href="#" className="border border-black px-[20px] py-[10px] font-bold hover:bg-black hover:text-white">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogPage;