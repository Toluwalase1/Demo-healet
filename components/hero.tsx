const Hero = () => {
    return ( 
       <div className="w-full h-[700px] bg-[url('/slider-bg.jpg')]  bg-cover bg-center bg-no-repeat -z-10 text-white flex flex-col justify-center sm:bg-right">
        <div className="hero-con w-full  sm:w-[60%] md:w-[50%] md:ms-10 p-5">
            <h1 className="text-5xl mb-3 font-bold">
                Best Jewellery 
                <span className="block">
                Collection
                </span>
            </h1>
            <p className="w-[80%] mb-10 font-semibold">
                It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.
                 The point of using Lorem
            </p>
            <button className="cursor-pointer outline py-[10px] px-[45px] rounded-sm outline-[#fd9c6b] text-[#fd9c6b] hover:bg-[#fd9c6b] hover:text-white font-bold">
                Shop Now
            </button>

        </div>
        </div>

     );
}
 
export default Hero;