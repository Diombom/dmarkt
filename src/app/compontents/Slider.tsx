"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const Slider = () => {

    const slides = [
        {
            id: 1,
            title: "Summer Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "/yellow.jpg",
            url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
            id: 2,
            title: "Winter Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "/blue.jpg",
            url: "/",
            bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        },
        {
            id: 3,
            title: "Spring Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "/pink.jpg",
            url: "/",
            bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        },
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [current])
    

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full transition-all ease-in-out duration-1000 flex" style={{ transform: `translateX(-${current * 100}vw)`}}>
                {
                    slides.map((slide) => (
                        <div className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row`} key={slide.id}>
                            <div className="xl:w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center gap-4">
                                <h2 className="text-2xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                                <h2 className="font-semibold text-5xl lg:text-6xl 2xl:text-8xl text-center">{slide.title}</h2>
                                <div className="ring-1 ring-gray-600 bg-black text-white px-3 py-2 rounded-md cursor-pointer hover:bg-transparent hover:text-black transition-all ease-in-out duration-300">
                                    <div className="span font-semibold">Shop Now</div>
                                </div>
                            </div>
                            <div className="flex relative xl:w-1/2 h-1/2 xl:h-full">
                                <Image className="object-cover" src={slide.img} alt="" fill sizes="100%"/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-8 flex gap-4" style={{ transform: "translateX(-50%)", left: "50%"}}>
                {
                    slides.map((slide, index) => (
                        <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-poiner flex items-center justify-center ${current === index ? "scale-150" : ""}`} key={slide.id} onClick={() => setCurrent(index)}>
                            {
                                current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider