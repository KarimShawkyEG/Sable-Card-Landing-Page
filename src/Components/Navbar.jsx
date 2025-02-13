import React from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10 '>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='container mx-auto flex justify-between items-center py-4 px-6 bg-transparent'>
                <div> {/* Logo */}
                    <img src="./src/assets/Logo.png" />
                </div>
                <div className='w-[30%] flex justify-around gap-7 items-center text-white text-[20px] hidden sm:flex'> {/* Button container */}
                    <a className='font-[400] opacity-64 hover:opacity-100 cursor-default'>
                        Credit
                    </a>
                    <a className='font-[400] opacity-64 hover:opacity-100 cursor-default'>
                        Debit
                    </a>
                    <a className='font-[400] opacity-64 hover:opacity-100 cursor-default'>
                        App
                    </a>
                    <a className='font-[400] opacity-64 hover:opacity-100 cursor-default'>
                        Learn
                    </a>
                </div>
                <div> {/* Sign Up Button */}
                    <a className='md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:opacity-90'>Sign Up</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar