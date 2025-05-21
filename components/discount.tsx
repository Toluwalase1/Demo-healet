const DiscountComp = () => {
    return ( 
        <div className="w-full  py-4  grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 mb-5">
            <div className="first  bg-[url('/o1.jpg')] bg-center bg-cover relative min-h-[200px]">
            <div className="absolute z-10 text-white top-6 left-10">
                <h1 className="text-5xl mb-10">Upto 15% Off</h1>
                <a href="#" className=" text-[#fd9c6b] px-[40px] py-[10px]  border border-[#fd9c6b] hover:bg-[#fd9c6b] hover:text-white ">
                    Shop Now
                </a>
            </div>
            </div>
            <div className="second grid grid-cols-1 gap-y-5">
                <div className=" bg-[url('/o2.jpg')] bg-center bg-cover relative min-h-[200px]">
                <div className="absolute z-10 text-white bottom-5 right-8">
                  <h1 className="text-3xl mb-5">Upto 10% Off</h1>
                <a href="#" className=" text-[#fd9c6b] px-[40px] py-[10px]  border border-[#fd9c6b] hover:bg-[#fd9c6b] hover:text-white ">
                    Shop Now
                </a>
                </div>
                </div>
                <div className=" bg-[url('/o3.jpg')] bg-center bg-cover relative min-h-[200px]">
                <div className="absolute z-10 text-white bottom-6 left-10">
                  <h1 className="text-3xl mb-5">Upto 20% Off</h1>
                <a href="#" className=" text-[#fd9c6b] px-[40px] py-[10px]  border border-[#fd9c6b] hover:bg-[#fd9c6b] hover:text-white ">
                    Shop Now
                </a>
                </div>
                </div>
            </div>

        </div>
     );
}
 
export default DiscountComp;