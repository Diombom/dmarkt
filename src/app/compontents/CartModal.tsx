"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const CartModal = () => {
    // Set products in state so they can be updated
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Party Cups",
            price: 12.99,
            availability: "Available",
            qty: 4,
            image: '/party_cups.jpg'
        },
        {
            id: 2,
            title: "Headphones",
            price: 119.99,
            availability: "Available",
            qty: 1,
            image: '/headphones.jpg'
        },
    ]);

    const [cartTotal, setCartTotal] = useState(0);
    
    // Check if the cart has items
    const cartItems = products.length > 0;

    useEffect(() => {
        // Calculate the total whenever products list changes
        let total = 0;
        products.forEach(product => {
            total += product.price * product.qty;
        });
        setCartTotal(total);
    }, [products]); // Adding products as a dependency ensures total recalculates when products change

    // Function to handle removing an item from the cart
    const handleRemove = (id: number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts); // Update the products state
    };

    return (
        <div className="absolute p-4 rounded-md shadow-lg top-4 right-0 flex flex-col gap-6 z-20 w-72 bg-white">
            {
                !cartItems ? 
                (<div className="">
                    <div className="">
                        <h2 className="font-medium mb-4">Shopping Cart</h2>
                    </div>
                    <p className="text-sm mb-1">Cart is empty.</p>
                    <p className="text-xs mb-1">Continue shopping to add some items to your cart.</p>
                </div>) :

                (<div className="">
                    <div className="">
                        <h2 className="font-medium mb-4">Shopping Cart</h2>
                    </div>
                    {
                        products.map((product) => (
                            <div className="flex w-full gap-3 mb-3" key={product.id}>
                                <div className="flex h20">
                                    <Image className="object-contain rounded-md" src={product.image} alt="" width={60} height={90} />
                                </div>
                                <div className="flex flex-col items-stretch justify-between flex-1">
                                    <div className="flex">
                                        <div className="flex flex-col flex-1">
                                            <h3 className="font-bold text-sm">{product.title}</h3>
                                            <p className="text-lime-400 text-xs font-light">{product.availability}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm">${product.price}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col flex-1">
                                            <span className="text-xs text-gray-500">Qty {product.qty}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-danger cursor-pointer" onClick={() => handleRemove(product.id)}>Remove</span>
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
                        <Link className="bg-transparent ring-1 ring-gray-300 rounded-md text-xs p-2 font-semibold" href="#">View Cart</Link>
                        <Link className="bg-black rounded-md text-xs text-white p-2 font-semibold" href="#">Checkout</Link>
                    </div>
                </div>)
            }
        </div>
    )
}

export default CartModal
