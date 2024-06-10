import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'
import { useGSAP } from '@gsap/react'
import { exploreVideo, explore1Img, explore2Img } from '../utils'
import gsap from 'gsap'

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play none restart restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        animateWithGsap('#features_title', { y: 0, opacity: 1 })
        animateWithGsap(
            '.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrub: 2 }
        );
        animateWithGsap(
            '.g_text',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
        )
    }, []);

    return (
        <section className='relative h-full overflow-hidden common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='w-full mb-12'>
                    <h1 id="features_title" className='section-heading'>
                        Explore the full story.
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center overflow-hidden'>
                    <div className='pl-24 mt-32 mb-24'>
                        <h2 className='text-5xl font-semibold lg:text-7xl'>iPhone.</h2>
                        <h2 className='text-5xl font-semibold lg:text-7xl'>Forged in titanium.</h2>
                    </div>

                    <div className='flex-col flex-center sm:px-10'>
                        <div className='relative h-[50vh] w-full flex items-center'>
                            <video playsInline id='exploreVideo' muted autoPlay preload='none' className='object-cover object-center w-full h-full' ref={videoRef}>
                                <source src={exploreVideo} type='video/mp4' />
                            </video>
                        </div>

                        <div className='relative flex flex-col w-full'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore1Img} alt='titanium' className='feature-video g_grow' />
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore2Img} alt='titanium 2' className='feature-video g_grow' />
                                </div>
                            </div>

                            <div className='feature-text-container'>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'>
                                        <span className='text-white'>The first iPhone to feature an aerospace-grade titanium design. </span>
                                        <span>Using the same allow that spacecraft use for mission to mars.</span>
                                    </p>
                                </div>

                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'>
                                        Titanium has one of the best strength-to-strength ratios of any metal. making this our
                                        <span className='text-white'> lighetest Pro models ever.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features