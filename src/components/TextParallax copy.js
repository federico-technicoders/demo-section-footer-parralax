'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
// import styles from './page.module.css'
import { useRef } from 'react';

export default function TextParallax() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    

    // useGSAP( () => {
    //     gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
    //     requestAnimationFrame(animate)
    // }, [])


    // const animate = () => {
    //     if(xPercent > 0){
    //         xPercent = -100
    //     }
    //     gsap.set(firstText.current, {xPercent: xPercent})
    //     gsap.set(secondText.current, {xPercent: xPercent})
    //     requestAnimationFrame(animate)
    //     xPercent += 0.1
    // }

   
    let direction = -1;
    useGSAP( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if(xPercent < -100){
            xPercent = 0;
        }else if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }


    return (
        <div 
            // className={styles.main}
            className='mb-screen h-screenp relative bg-black'
        >
            {/* <Image 
                src="/images/background.jpeg"
                fill={true}
                alt="background"
                className='object-cover'
            /> */}
            <div 
                // className={styles.sliderContainer}
                className='absolute'
            >
                <div 
                    ref={slider} 
                    // className={styles.slider}
                    
                    className='relative flex w-full whitespace-nowrap'
                >
                    <p 
                        className='m-0 text-white text-[240px] font-bold'
                        ref={firstText}
                    >
                        Freelance Developer -
                    </p>
                    <p 
                        ref={secondText}
                        className='m-0 text-white text-[240px] font-bold'
                    >
                        Freelance Developer -
                    </p>
                </div>
            </div>
        </div>
    )
}