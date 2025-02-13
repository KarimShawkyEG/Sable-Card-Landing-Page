import React from 'react'
import { motion } from 'motion/react'

const Download = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='h-[75vh] flex justify-center items-center'>
            <div className='w-380 h-120 rounded-[25px] relative'>
                <img className='w-400 h-120 object-cover object-[0%_70%] rounded-[25px] brightness-75' src='./src/assets/customerPayment.png' />
                <div className='text-white rounded-[0px_0px_25px_25px] w-380 h-40 flex absolute bottom-0'>
                    <div className='h-[150%] w-[60%] rounded-[0px_0px_0px_25px] relative bottom-20 flex flex-col pl-20 pt-3 gap-2'>
                        <div className='font-[500] text-[50px]'>Join over <span className='font-[600] text-[60px]'>400,000</span> accounts</div>
                        <div className='w-125 text-[20px] tracking-[0.5px]'>Download Sable: effortless, borderless banking for a more connect world.</div>
                    </div>
                    <div className='h-full w-[40%] rounded-[0px_0px_25px_0px] flex justify-center gap-12 items-center'>
                        <button className='w-50 h-15 bg-white rounded-[12px] p-4 flex justify-center items-center cursor-pointer'>
                            <img src='./src/assets/DownloadGoogle.png' />
                        </button>
                        <button className='w-50 h-15 bg-white rounded-[12px] p-3 flex justify-center items-center cursor-pointer'>
                            <img src='./src/assets/DownloadApple.png' />
                        </button>
                    </div>
                </div>
            </div >
        </motion.div >
    )
}

export default Download