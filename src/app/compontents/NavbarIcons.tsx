"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"

const NavbarIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    
    const router = useRouter()

    const isLoggedIn = true

    const handleProfile = () => {
        if(!isLoggedIn) {
            router.push("/login")
        }

        setIsCartOpen(false)

        setIsProfileOpen((prev) => !prev)
    }

    const handleCartPress = () => {

        setIsProfileOpen(false)

        setIsCartOpen((prev) => !prev)
    }

    return (
        <div className="flex items-center justify-between gap-4">
            <Image className="cursor-pointer" src="/profile.png" alt="" height={22} width={22} onClick={handleProfile} />
            {
                isProfileOpen && <div className="absolute p-4 top-16 rounded-md text-sm shadow-lg z-10 w-40">
                    <Link href="/">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            }
            <Image className="cursor-pointer" src="/notification.png" alt="" height={22} width={22} />
            <div className="relative">
                <Image className="cursor-pointer relative" src="/cart.png" alt="" height={22} width={22} onClick={handleCartPress} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-danger rounded-full text-white text-sm flex items-center justify-center">2</div>
                {
                    isCartOpen && <div className="relative">
                        <CartModal />
                    </div>
                }
            </div>
        </div>
    )
}

export default NavbarIcons