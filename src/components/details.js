import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header'

export default function Details() {

    const navigate = useNavigate();
    const [link, setLink] = useState({
        title: '',
        link: '',
        date: "",
        description: ""
    });

    useEffect(() => {
        const getLink = () => {
            let youtube = localStorage.getItem("youtube");
            let title = localStorage.getItem("title");
            let date = localStorage.getItem("date");
            let description = localStorage.getItem("description");
            setLink({
                title: title,
                description: description,
                link: youtube,
                date: date
            })
        };

        console.log(link);

        getLink();
    }, [])

    const back = () => {
        navigate("/");
    }

    return (
        <>
            <Header />
            <div className='max-w-[65%] mx-auto'>
                <div>
                    <div className='text-left'>
                        <button type="button" onClick={back} className='bg-[#8b0000] px-3 py-1 mx-3 rounded'>Go Back</button>
                    </div>
                    <div className='text-center '>
                        <h3 className='text-[24px] font-semibold py-3'>{link?.title}
                            <span className='text-[#808080] text-[15px] ms-2 font-thin'>{`<`}1 min read</span>
                        </h3>
                        {console.log("k", link?.title)}
                        {/* <video controls loop src="https://media.istockphoto.com/id/927328362/video/businessman-with-forex-investment.mp4?s=mp4-640x640-is&k=20&c=QaZFDUYHbH2PqO9o3nK3WKhQqPTPXmkXlIMBhEQOveg=" width='900px' height='600px'  ></video> */}
                        <div className='flex justify-center'>
                            <iframe width="560" height="315" src={link?.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                        <div className='px-20 pt-6'>
                            <div className='text-left'>
                                <p className='text-[#808080] text-[15px]'>{link?.date}</p>
                            </div>
                            <div className='flex items-start py-12'>
                                <div className='pe-4 text-[#808080]'>0:00:00</div>
                                <div className='text-left'>
                                    {/* <p class="text-xl  tracking-wider">{link?.description}</p> */}
                                    <p class="text-xl  tracking-wider">If you're a guy with zero boundaries and suddenly you want to turn around and, like, act a certain way, a lot of people will try to put you back in that pen and be like, oh, you've changed, man.</p>
                                    <p class="text-xl pt-6  tracking-wider">Like, what are you doing? You know? You're not like this.</p>
                                    <p class="text-xl pt-6  tracking-wider">That's not who you are.</p>
                                    <p class="text-xl pt-6  tracking-wider">Guys that have let it go with women for so long, maybe they've got a wife that just steamrolls in the home consistently, and they feel like shit, you know? They don't even want to go home.</p>
                                    <p class="text-xl pt-6  tracking-wider">They sit in the driveway.</p>
                                    <p class="text-xl pt-6  tracking-wider">I can, like, think, how am I even going to face her in the house? A lot of guys, specifically in the west, they go home and it's like they're going home to, like, a competitor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
