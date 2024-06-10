import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);

    const handleVideoSrcSet = () => {
        if (window.innerWidth > 768) {
            setVideoSrc(heroVideo);
        } else {
            setVideoSrc(smallHeroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, [videoSrc]);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
        });

        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,
        });
    }, []);

    const scrollToHighlights = () => {
        document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='relative w-full bg-black nav-height'>
            <div className='flex-col w-full h-5/6 flex-center'>
                <p id='hero' className='hero-title'>iPhone 15 Pro</p>
                <div className='w-9/12 md:w-10/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id='cta'
                className='flex flex-col items-center translate-y-20 opacity-0'>
                <button onClick={scrollToHighlights} className='btn'>Buy</button>
                <p className='text-xl font-normal'>From $999 or $41.62/mo. for 24 mo.</p>
            </div>
        </section>
    );
};

export default Hero;
