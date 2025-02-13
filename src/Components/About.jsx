import React from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'



const About = () => {

    return (
        <div className='max-h-full max-w-100% mx-auto bg-[#1C1C1E] overflow-hidden'>
            {/* About Section */}
            <div className='flex flex-col items-center justify-center pt-20 mb-[-500px] max-h-full'>
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='flex flex-col items-center'>
                    <span className='text-[#6FDBD4] font-[200] text-[14.45px]'>400,000 ACCOUNTS & COUNTING</span>
                    <div className='flex flex-col items-center'>
                        <span className='text-white font-[600] text-[36.62px]'>No hidden fees. No credit checks</span>
                        <span className='text-white font-[200] text-[36.62px]'>No more barriers to building credit.</span>
                    </div>
                </motion.div>
                {/* Main image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='max-w-[1400px]'>
                    <img className='w-[1100px]' src='./src/assets/iphoneAbout.png' />
                </motion.div>
                {/* Information */}
                <div className='flex items-center justify-between w-[1300px] h-[500px] relative bottom-[600px] px-40'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[170px] w-[260.7px] justify-between flex flex-col absolute top-0 left-0'>
                        <img className='w-[32px]' src='./src/assets/CreditCard.png' />
                        <div className='flex flex-col h-[68%] justify-between gap-3'>
                            <span className='w-55 text-[23px] font-semibold text-white leading-[25px]'>Get a secured credit card and bank account in 5 minutes.</span>
                            <span className='w-55 text-[14px] font-[100] text-white leading-[18.5px]'>No credit history, credit check, or minimum deposit required.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[170px] w-[260.7px] justify-between flex flex-col absolute bottom-0 left-0'>
                        <img className='w-[32px]' src='./src/assets/Trophy.png' />
                        <div className='flex flex-col h-[68%] justify-between gap-3'>
                            <span className='w-60 text-[23px] font-semibold text-white leading-[25px]'>The only premium card for building credit.</span>
                            <span className='w-60 text-[14px] font-[100] text-white leading-[18.5px]'>2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[170px] w-[260.7px] items-end text-right flex flex-col absolute top-0 right-0 gap-5'>
                        <img className='w-[32px]' src='./src/assets/Radar.png' />
                        <div className='flex flex-col h-[40%] justify-between gap-3'>
                            <span className='w-55 text-[23px] font-semibold text-white leading-[25px]'>Build your U.S. credit</span>
                            <span className='w-55 text-[14px] font-[100] text-white leading-[18.5px]'>We believe in forming positive habits. Build your U.S. credit with Sable</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[170px] w-[260.7px] items-end text-right flex flex-col absolute bottom-0 right-0 gap-5'>
                        <img className='w-[32px]' src='./src/assets/Globe.png' />
                        <div className='flex flex-col h-[68%] justify-between gap-3'>
                            <span className='w-60 text-[23px] font-semibold text-white leading-[25px]'>Bank like a global citizen with Sable.</span>
                            <span className='w-60 text-[14px] font-[100] text-white leading-[18.5px]'>Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <div className='border border-white w-[85%] opacity-20'></div>
            </div>
            {/* Partners Section */}
            <div
                className=" h-[180px] partners-slider overflow-hidden py-10 bg-[#1C1C1E] bg-repeat flex flex-row items-center justify-center gap-10 w-[100%]">
                <div className=" flex w-[100vw] bg-[#1C1C1E] h-[180px] z-50 relative items-center">
                    {assets.map((company, index) => {
                        return (
                            <motion.div
                                initial={{ x: -440 }} // Start off-screen to the right
                                animate={{ x: 2500 }} // Move off-screen to the left
                                transition={{
                                    duration: 15, // Duration of one full loop
                                    repeat: Infinity, // Infinite loop
                                    ease: 'linear', // Smooth linear animation
                                    delay: index * (15 / assets.length), // Stagger the start of each logo's animation
                                }}
                                key={index}
                                className="absolute right-440 flex items-center justify-center w-[25%] mx-4">
                                <img src={company.image} alt={company.company} className=" w-[150px]" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default About