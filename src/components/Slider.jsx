import React from 'react'
import Marquee from 'react-fast-marquee'
import as from "../assets/sa.png"
import ab from "../assets/sb.png"
import ad from "../assets/sd.png"
import ae from "../assets/se.png"
import af from "../assets/sf.png"
import ac from "../assets/sc.png"
import ah from "../assets/sh.png"
import aj from "../assets/sj.png"


const Slider = () => {
    return (
        <>
        <section className="my-20 mx-5">
            <div className="py-2">
                <h1 className='text-center text-xl md:text-2xl text-gray-800'>
                    Our Brand Collection
                </h1>
                {/* images*/}
                <div className="mx-2">
                    <Marquee style>
                        <div className="md:mx-10 mx-1">
                            <img src={as} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={ab} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={ad} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={ah} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={ae} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={ac} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={af} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                        <div className="md:mx-10 mx-1">
                            <img src={aj} alt="Img-Slider" className='w-[150px] object-cover' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
        </>
    )
    }

export default Slider
