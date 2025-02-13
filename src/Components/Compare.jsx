import React from 'react'
import { compare } from '../assets/assets'
import { motion } from 'motion/react'

const Compare = () => {
    return (
        <div className='flex flex-col items-center max-h-full h-[110vh] bg-black'>
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='flex relative top-15 justify-center gap-[100px] '>
                <span className='text-white text-[80px] tracking-[3px]'> Compare Sable</span>
                <span className='text-white text-[80px] tracking-[3px]'>•</span>
                <span className='text-white text-[80px] tracking-[3px]'> Compare Sable</span>
            </motion.div>
            {/* Cards */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                className=' w-[90vw] relative top-40'>
                <div className='w-[70%] float-right flex'>
                    <div className='w-[50%] flex flex-col gap-3'>
                        <img className='w-40' src='./src/assets/BlackCardHorizontal.png' />
                        <div className='text-[#10ACA2] font-[300] tracking-[0.5px] text-[25px] w-60'>Sable Premium Credit Card</div>
                    </div>
                    <div className='w-[50%] flex flex-col gap-3'>
                        <img className='w-40' src='./src/assets/SableNormalHorizontal.png' />
                        <div className='text-[#10ACA2] font-[300] tracking-[0.5px] text-[25px] w-50'>Sable Secured Debit Card</div>
                    </div>
                </div>
            </motion.div>
            {/* Benefits */}
            <div className='relative top-43'>
                <ul className='w-[90vw] h-[50vh] flex flex-col justify-between'>
                    {compare.map((benefit) => {
                        return (
                            <>
                                <div className='border-t border-white opacity-10' />
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 1.5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className=' h-[100%] flex flex-col justify-center'>
                                    <div className='flex justify-between items-center'>
                                        <li className='text-white font-[200] opacity-70'>{benefit.text}</li>
                                        <div className='flex w-[70%]'>
                                            <li className='w-[50%]'>{benefit.credit ?
                                                (<img src='./src/assets/check.png' />) :
                                                (<img src='./src/assets/Lock.png' />)
                                            }</li>
                                            <li className='w-[50%]'>{benefit.debit ?
                                                (<img src='./src/assets/check.png' />) :
                                                (<img src='./src/assets/Lock.png' />)
                                            }</li>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )
                    })}
                    <div className='border-t border-white opacity-10' />
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[100%] flex items-center justify-between'>
                        <span className='text-white font-[200] opacity-70'>Cost per year</span>
                        <div className='flex w-[71%]'>
                            <span className='text-white font-[200] opacity-70 w-[50%] text-[10px]'>
                                <span className='text-[40px] font-[400]'>$0</span> /year
                            </span>
                            <span className='text-white font-[200] opacity-70 w-[50%] text-[10px]'>
                                <span className='text-[40px] font-[400]'>$0</span> /year
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='h-[100%]'>
                        <div className='h-[200%] w-[71%] float-right flex items-center justify-between'>
                            <div className='w-[50%]'>
                                <button className='bg-[#6FDBD4] rounded-[50px] w-[122px] h-[47px] p-2 text-black tracking-[1.35px] text-[12px] font-semibold cursor-pointer'>GET CREDIT</button>
                            </div>
                            <div className='w-[50%]'>
                                <button className='bg-[#6FDBD4] rounded-[50px] w-[122px] h-[47px] p-2 text-black tracking-[1.35px] text-[12px] font-semibold cursor-pointer'>GET DEBIT</button>
                            </div>
                        </div>
                    </motion.div>
                </ul>
            </div>
        </div>
    )
}

export default Compare