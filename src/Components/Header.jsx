import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 flex items-center w-full overflow-hidden bg-black mb-[0px] relative'>
            <Navbar />
            <div className='overflow-hidden w-full h-[100vh] flex items-center'>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 55 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    className='relative right-30 bottom-20 rotate-155 hidden sm:block'>
                    <img className='w-[550px] relative' src='./src/assets/BlackCardSable.png' />
                </motion.div>
                <div className='container mx-auto text-center py-4 px-6 flex flex-col justify-center items-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='relative text-white text-5xl md:text-7xl font-[300] text-center max-w-[650px]'>
                        The Fastest, Most Premium Path to <span className='font-[700]'> Financial Freedom </span>
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-black bg-blue-500 px-10 py-5 rounded-full mt-4 hover:bg-blue-600 relative top-5 cursor-pointer'>
                        Explore
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 55 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    className='relative left-30 top-20 rotate-335 hidden sm:block'>
                    <img className='w-[550px] relative' src='./src/assets/SableNormalCard.png' />
                </motion.div>
            </div>
            <div className='absolute bottom-10 left-10 flex w-150 items-center gap-[15px] opacity-10'>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='w-[90px] h-[40px]' src='./src/assets/FDIC.svg' />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-white w-115'>Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.</motion.div>
            </div>
        </div>
    )
}

export default Header