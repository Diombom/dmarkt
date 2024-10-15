"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const CartModal = () => {

    const [cartTotal, setCartTotal] = useState(0)

    const cartItems = false

    const products = [
        {
            title: "Party Cups",
            price: 12.99,
            availability: "Available",
            qty: 4,
            image: '/party_cups.jpg'
        },
        {
            title: "Headphones",
            price: 119.99,
            availability: "Available",
            qty: 1,
            image: '/headphones.jpg'
        },
    ]

    useEffect(() => {
      
        let total = 0

        products.map(product => {
            total += product.price * product.qty
        })

        setCartTotal(total)
        
    }, [])

    return (
        <div className="absolute p-4 rounded-md shadow-lg top-4 right-0 flex flex-col gap-6 z-20 w-72">
            {
                !cartItems ? 

                (<div className="">
                    <div className="">
                        <h2 className="font-medium mb-4">Shopping Cart</h2>
                    </div>
                    {
                        products.map((product, index) => (
                            <div className="flex w-full gap-3 mb-3">
                                <div className="flex h20">
                                    <Image className="object-contain rounded-md" src="/product.jpg" alt="" width={60} height={90} />
                                </div>
                                <div className="flex flex-col items-stretch justify-between flex-1">
                                    <div className="flex">
                                        <div className="flex flex-col flex-1">
                                            <h3 className="font-bold text-sm">{product.title}</h3>
                                            <p className="text-lime-400 text-xs font-semibold">{product.availability}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm">${product.price}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col flex-1">
                                            <p className="text-xs text-gray-500">Qty {product.qty}</p>
                                        </div>
                                        <div>
                                            <Link className="text-xs text-danger" href="#remove">Remove</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xs">Subtotal</h3>
                        <h3 className="font-bold text-xs">${cartTotal.toFixed(2)}</h3>
                    </div>
                    <p className="text-xs mb-1">Shipping and taxes calculated at checkout.</p>
                    <div className="flex items-center justify-between mt-3">
                        <Link className="bg-transparent border-2 rounded-md text-xs p-2 font-semibold" href="#">View Cart</Link>
                        <Link className="bg-black rounded-md text-xs text-white p-2 font-semibold" href="#">Checkout</Link>
                    </div>
                </div>) :

                (<div>Display cart items</div>)
            }
        </div>
    )
}

export default CartModal