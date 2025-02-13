import React from 'react'
import { reviews } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <div className='h-[70vh] bg-black flex flex-col items-center justify-center gap-20'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-white text-[80px]'>
                Testimonials
            </motion.div>
            <div className='flex w-[150vw] justify-around relative'>
                {reviews.map((review, index) => {
                    return (
                        <motion.div
                            initial={{ x: -440 }} // Start off-screen to the right
                            animate={{ x: 2700 }} // Move off-screen to the left
                            transition={{
                                duration: 15, // Duration of one full loop
                                repeat: Infinity, // Infinite loop
                                ease: 'linear', // Smooth linear animation
                                delay: index * (15 / reviews.length), // Stagger the start of each logo's animation
                            }}
                            className='h-[325px] absolute left-[0px] gap-0 w-[500px] bg-[#0E0E0F] rounded-[20px] flex flex-col justify-center items-center gap-15'>
                            <div className='flex justify-center gap-10'>
                                <img className='w-[40px] h-[40px]' src='./src/assets/quotes.png' />
                                <div className='text-white text-[20px] w-[65%] leading-[30px]'>{review.review}</div>
                            </div>
                            <div className='flex items-center w-full gap-3 w-[65%] justify-end'>
                                <img className='h-[3.86px] w-[40px]' src='./src/assets/div.png' />
                                <div className='text-white font-[600] w-[65%]'>{review.name}</div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials