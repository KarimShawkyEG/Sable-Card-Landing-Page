import React from 'react'
import { companies1, companies2, companies3 } from '../assets/assets'
import '../index.css'
import { motion } from 'motion/react'

const Benefits = () => {
    return (
        <div className='flex bg-[#1C1C1E] justify-between max-h-full h-[100vh] border-t border-[rgba(0,0,0,92%)]'>
            {/* Benefits Section */}
            <div className='w-[50%] bg-[#1C1C1E] flex flex-col items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }} className='w-[70%] h-[85%] flex flex-col items-center'>
                    <div className='border-t border-[#C4C4C4] h-[33%] flex flex-col justify-center gap-10'>

                        <div className='font-[400] text-white text-[40px] w-[100%] leading-[45px]'>Earn 2% cash back on favorite brands</div>

                        <div className='font-[300] text-white text-[18px] w-[90%]
                        leading-[23px] tracking-[0.8px]'>Earn 2% cash back on favorite brands, 1% cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more.</div>

                    </div>
                    <div className='border-t border-[#C4C4C4] h-[33%] flex flex-col justify-center gap-10 opacity-30'>

                        <div className='font-[400] text-white text-[40px] w-[100%] leading-[45px]'>Moving to the U.S.? No SSN required</div>

                        <div className='font-[300] text-white text-[18px] w-[90%]
                        leading-[23px] tracking-[0.8px]'>Start building credit before you even enter the country. Sign up with your international address, passport & visa instead.</div>

                    </div>
                    <div className='border-t border-[#C4C4C4] h-[33%] flex flex-col justify-center gap-10 opacity-30'>

                        <div className='font-[400] text-white text-[40px] w-[75%] leading-[45px]'>Get help from a real person</div>

                        <div className='font-[300] text-white text-[18px] w-[90%]
                        leading-[23px] tracking-[0.8px]'>When you've got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs.</div>

                    </div>
                </motion.div>
            </div>
            {/* Companies Section */}
            <div className='w-[50%] custom-bg gap-[75px] flex justify-center items-center overflow-hidden'>
                <div className='relative flex flex-col h-[130%] justify-around w-[255px] items-center'>
                    {companies1.map((company, index) => {
                        return (
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 1400 }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: index * (15 / companies1.length),
                                }}
                                className='bg-white absolute top-[-100px] rounded-[34px] p-10 w-[250px] h-[250px] flex justify-center items-center'>
                                <img src={company.image} />
                            </motion.div>
                        )
                    })}
                </div>
                <div className='relative flex flex-col h-[130%] justify-around w-[255px] items-center'>
                    {companies2.map((company, index) => {
                        return (
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: -1400 }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: index * (15 / companies2.length),
                                }}
                                className='bg-white bg-white absolute bottom-[-100px] rounded-[34px] p-10 w-[250px] h-[250px] flex justify-center items-center'>
                                <img className='w-[200px]' src={company.image} />
                            </motion.div>
                        )
                    })}
                </div>
                <div className='relative flex flex-col h-[130%] justify-around w-[255px] items-center'>
                    {companies3.map((company, index) => {
                        return (
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: 1400 }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: index * (15 / companies3.length),
                                }}
                                className='bg-white bg-white absolute top-[-100px] rounded-[34px] p-10 w-[250px] h-[250px] flex justify-center items-center'>
                                <img className='w-[200px]' src={company.image} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Benefits