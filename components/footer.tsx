import { Facebook, Twitter, Linkedin, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import p1 from '@/public/p1.png'
import p2 from '@/public/p2.png'

const FooterComp = () => {
  return (
    <footer className=" p-3 bg-[#160e0b] text-white ">
      <div className="con w-[80%]  mx-auto p-2">
        {/* Email subscription part and social media icons */}
        <div className=" flex flex-col items-center gap-6 md:flex-row justify-center w-full p-5">
          {/* Email input with button */}
          <div className=" flex justify-center w-full md:w-auto">
            <div className="relative flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="outline outline-white w-full md:w-[400px] h-[50px]  pe-16 ps-5 bg-white text-black"
            />
           <button className="absolute right-0 h-[50px] w-[50px] flex items-center justify-center bg-[#fd9c6b] hover:bg-black hover:border hover:border-[#fd9c6b]">
                <ArrowRight />
              </button>
            </div>


          </div>
          {/* Social media icons */}
          <div className=" flex justify-center mt-4 md:mt-0 md:ml-5 space-x-4 ">
            <a href="#"  className="border border-white size-[50px] flex items-center justify-center hover:border-[#fd9c6b]">
                <Facebook />
            </a>
            <a href="#" className="border border-white size-[50px] flex items-center justify-center hover:border-[#fd9c6b]">
                <Twitter />
            </a>
            <a href="#" className="border border-white size-[50px] flex items-center justify-center hover:border-[#fd9c6b] ">
                <Linkedin />
            </a>
          </div>

        </div>
        {/* Main Footer Section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 gap-8">
              {/* Menu Section */}
            <div className="mb-6 sm:mb-0 ">
                <h1 className="text-2xl mb-2 font-medium">
                Menu
                </h1>
                <ul className="space-y-2">
                      <li><a href="#" className="hover:text-[#fd9c6b]">Home</a></li>
                      <li><a href="#" className="hover:text-[#fd9c6b]">About</a></li>
                      <li><a href="#" className="hover:text-[#fd9c6b]">Shop</a></li>
                      <li><a href="#" className="hover:text-[#fd9c6b]">Blog</a></li>
                </ul>
            </div>

            {/* Instagram section */}
                 <div className="mb-6 sm:mb-0">
            <h1 className="text-2xl mb-4 font-medium">Instagram</h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white w-[100px] h-[70px] flex-shrink-0">
                  <Image src={p1} alt="" className="object-contain w-full h-full" />
                </div>
                <div className="ml-3 text-sm">long established fact that a reader</div>
              </div>
              <div className="flex items-center">
                <div className="bg-white w-[100px] h-[70px] flex-shrink-0">
                  <Image src={p2} alt="" className="object-contain w-full h-full" />
                </div>
                <div className="ml-3 text-sm">long established fact that a reader</div>
              </div>
            </div>
                </div>

             {/* About Us section */}
             <div className="mb-6 sm:mb-0">
            <h1 className="text-2xl mb-4 font-medium">About Us</h1>
            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
          </div>


             {/* Contact Us section */}
            <div >
              <h1 className="text-2xl mb-4 font-medium">Contact Us</h1>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
                <MapPin size={20} />
                <span>Location</span>
              </a>
              <a href="tel:08143086623" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
                <Phone size={20} />
                <span>Call 08143086623</span>
              </a>
              <a href="mailto:Jay@gmail.com" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
                <Mail size={20} />
                <span>Jay@gmail.com</span>
              </a>

                </div>
               
            </div>

        </div>
      </div>
    </footer>
  );
};


// const FooterComp = () => {
//   return (
//     <footer className="p-3 bg-[#160e0b] text-white">
//       <div className="w-11/12 md:w-[90%] lg:w-[80%] mx-auto p-2">
//         {/* Email subscription and social media section */}
//         <div className="flex flex-col gap-6 md:flex-row justify-center items-center w-full p-5">
//           {/* Email input with button */}
//           <div className="flex w-full md:w-auto justify-center">
//             <div className="relative flex w-full md:w-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="outline outline-white w-full md:w-[350px] h-[50px] ps-5 pe-16 bg-white text-black"
//               />
//               <button className="absolute right-0 h-[50px] w-[50px] flex items-center justify-center bg-[#fd9c6b] hover:bg-black hover:border hover:border-[#fd9c6b]">
//                 <ArrowRight />
//               </button>
//             </div>
//           </div>
          
//           {/* Social media icons */}
//           <div className="flex justify-center space-x-4 mt-4 md:mt-0 md:ml-5">
//             <a href="#" className="border border-white w-[50px] h-[50px] flex items-center justify-center hover:border-[#fd9c6b]">
//               <Facebook />
//             </a>
//             <a href="#" className="border border-white w-[50px] h-[50px] flex items-center justify-center hover:border-[#fd9c6b]">
//               <Twitter />
//             </a>
//             <a href="#" className="border border-white w-[50px] h-[50px] flex items-center justify-center hover:border-[#fd9c6b]">
//               <Linkedin />
//             </a>
//           </div>
//         </div>
        
//         {/* Footer content sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-2">
//           {/* Menu section */}
//           <div className="mb-6 sm:mb-0">
//             <h1 className="text-2xl mb-4 font-medium">Menu</h1>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-[#fd9c6b]">Home</a></li>
//               <li><a href="#" className="hover:text-[#fd9c6b]">About</a></li>
//               <li><a href="#" className="hover:text-[#fd9c6b]">Shop</a></li>
//               <li><a href="#" className="hover:text-[#fd9c6b]">Blog</a></li>
//             </ul>
//           </div>

//           {/* Instagram section */}
//           <div className="mb-6 sm:mb-0">
//             <h1 className="text-2xl mb-4 font-medium">Instagram</h1>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <div className="bg-white w-[100px] h-[70px] flex-shrink-0">
//                   <Image src={p1} alt="" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="ml-3 text-sm">long established fact that a reader</div>
//               </div>
//               <div className="flex items-center">
//                 <div className="bg-white w-[100px] h-[70px] flex-shrink-0">
//                   <Image src={p2} alt="" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="ml-3 text-sm">long established fact that a reader</div>
//               </div>
//             </div>
//           </div>

//           {/* About Us section */}
//           <div className="mb-6 sm:mb-0">
//             <h1 className="text-2xl mb-4 font-medium">About Us</h1>
//             <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
//           </div>

//           {/* Contact Us section */}
//           <div>
//             <h1 className="text-2xl mb-4 font-medium">Contact Us</h1>
//             <div className="space-y-4">
//               <a href="#" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
//                 <MapPin size={20} />
//                 <span>Location</span>
//               </a>
//               <a href="tel:08143086623" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
//                 <Phone size={20} />
//                 <span>Call 08143086623</span>
//               </a>
//               <a href="mailto:Jay@gmail.com" className="flex items-center space-x-3 hover:text-[#fd9c6b]">
//                 <Mail size={20} />
//                 <span>Jay@gmail.com</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };


export default FooterComp;
