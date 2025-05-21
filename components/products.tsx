// 'use client'
import Image from "next/image";
import p1 from '@/public/p1.png'
import p2 from '@/public/p2.png'
import p3 from '@/public/p3.png'
import p4 from '@/public/p4.png'
import p5 from '@/public/p5.png'
import p6 from '@/public/p6.png'
import p7 from '@/public/p7.png'
import p8 from '@/public/p8.png'

interface objType {
    title: string,
    price: string,
    image: typeof p1
}
const ProductCard = ({p}:{p:objType; }) => {
    return (
        <div className=" w-[200px] h-[300px]  relative flex flex-col  bg-gray-100">
            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center absolute top-[10px] left-[10px] ">
                New    
            </div>
            <div className="con  w-[100%] mt-[55px] ">
                <div className="px-[30px] py-[15px] ">
                    <Image src={p.image} alt=""  className="size-[160px] object-contain object-center " />
                </div>
                
            </div>

            <div className="flex justify-between mt-5 px-2">
                <div>
                    {p.title}
                </div>
                <div>
                    Price <span className="text-red-300">{p.price}</span>
                </div>
            </div>

        </div>
    );
}

const ProductPage = () => {
    const products = [
        {
            title: 'Necklace',
            price: '$200',
            image: p1
        },
        {
            title: 'Necklace',
            price: '$300',
            image: p2
        },
        {
            title: 'Necklace',
            price: '$110',
            image: p3
        },
        {
            title: 'Ring',
            price: '$45',
            image: p4
        },
        {
            title: 'Ring',
            price: '$95',
            image: p5
        },
         {
            title: 'Earrings',
            price: '$70',
            image: p6
        },
         {
            title: 'Earrings',
            price: '$400',
            image: p7
        },
         {
            title: 'Necklace',
            price: '$450',
            image: p8
        }
    ]
    return (  
        <div className="mt-10 mb-10 ">
            <p className="text-center text-4xl font-bold">
                LATEST PRODUCTS
            </p>
            <div className="w-[85%] mx-auto mt-5 p-5 grid sm:grid-cols-2 gap-4 lg:grid-cols-4 place-content-center md:grid-cols-2 space-x-5">
                {
                    products && products.map((prod, index) =>(  <ProductCard p={prod} key={index} />) )
                }
              
            </div>
            <div className="btn-box mx-auto flex justify-center mt-6 p-5">
                    <a href="#" className="text-white px-[40px] py-[10px] bg-[#fd9c6b] rounded-lg border border-[#fd9c6b] hover:bg-white hover:text-[#fd9c6b] ">
                        View All Products
                    </a>
            </div>
        </div>
    );
}
 
export default ProductPage;