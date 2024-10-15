"use client"

import Image from "next/image"
import Link from "next/link"

const Categories = () => {

    const categories = [ 1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="px-4 overflow-x-scroll">
            <div className="flex gap-4 md:gap-8">
                {
                    categories.map(item => (
                        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-72">
                                <Image src="/products/sunglasses.jpg" alt="" fill sizes="20vw" className="object-cover" />
                            </div>
                            <h2 className="mt-4 font-light text-cl tracking-wide">Category Name</h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories