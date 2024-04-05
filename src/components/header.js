import React from 'react'
import profile from '../asset/images/profile.webp'
import gettr from '../asset/images/gettr-logo.svg'
import instagram from '../asset/images/instagram-logo.webp'
import rumble from '../asset/images/rumble-logo.webp'
import youtube from '../asset/images/youtube-logo.webp'
import Description from './description'

export default function header() {
    return (
        <div className='container mx-auto py-5'>
            <div class="max-w-[65%] mx-auto border-b border-[#8080804d] pb-12">
                <div class="md:flex  ">
                    <div class="md:shrink-0 ">
                        <img class="object-fill rounded-[16px] h-full w-80 " src={profile} />
                    </div>
                    <div class="text-left ps-8  flex items-center">
                        <div>
                            <h1 class=" text-[46px]  tracking-[0px] font-semibold">Stephen Ronald Bell</h1>
                            <p class="text-2xl pt-6 pb-12 tracking-wider">From prisoner to multi-millionaire Investor, Entrepreneur and Philanthropist</p>
                            <div className='flex text-left'>
                                <a href=" https://rumble.com/user/stephenronaldbell" target="_blank" > <img class="object-fill rounded-[16px] h-10 w-10 me-3 " src={rumble} /></a>
                                <a href="https://gettr.com/user/stephenronaldbell" target="_blank" > <img class="object-fill rounded-[16px] h-10 w-10 mx-2 " src={gettr} /></a>
                                <a href="https://www.instagram.com/stephenronaldbell/" target="_blank"><img class="object-fill rounded-[16px] h-10 w-10 mx-3 " src={instagram} /></a>
                                <a href="https://www.youtube.com/channel/UC4GlGlALaWbwuovbveoal_A" target="_blank" > <img class="object-fill rounded-[16px] h-10 w-10 mx-2 " src={youtube} /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
