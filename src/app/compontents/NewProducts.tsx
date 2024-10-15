import Image from "next/image"
import Link from "next/link"
import { newProducts } from '../constants/data'

const NewProducts = () => {
    return (
        <div className="flex mt-6 gap-x-8 gap-y-16 justify-between flex-wrap">
            {
                newProducts.map(item => (
                    <Link href="#" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={item.id + item.title}>
                        <div className="relative w-full h-60">
                            <Image 
                                className="absolute object-cover rounded-md shadow-md z-10 transition-opacity hover:opacity-0 duration-500" 
                                src={"/products" + item.image} 
                                alt="" 
                                fill 
                                sizes="25vw" 
                            />
                            <Image 
                                className="absolute object-cover rounded-md shadow-md" 
                                src={"/products" + item.image} 
                                alt="" 
                                fill 
                                sizes="25vw" 
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold">{item.title}</span>
                            <span className="text-sm font-semibold">${item.price}</span>
                        </div>
                        <div className="">
                            <p className="text-sm">{item.description}</p>
                        </div>
                        <div className="flex">
                            <span className="flex ring-1 ring-red-500 py-1 px-3 rounded-xl text-red-500 text-sm font-medium transition-all ease-in-out duration-300 hover:bg-red-500 hover:text-white">Add To Cart</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default NewProducts