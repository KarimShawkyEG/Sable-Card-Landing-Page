import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[80vh] text-white'>

            {/* Footer */}

            <div className='flex h-[50%] bg-black'>
                <div className='w-[33.3%] flex flex-col pl-40 gap-[15px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <span className='text-[35px] font-[400]'>Sable Credit</span>
                        <div className='flex flex-col gap-[2px]'>
                            <a className='text-[14px] font-[200] cursor-pointer'>Sable PREMIUM Credit</a>
                            <div className='flex justify-between w-[165px] text-[14px] font-[300]'>
                                <a className='text-[14px] font-[200] cursor-pointer'>Credit Score</a>
                                <span className='text-[14px] font-[200] text-blue-200 opacity-50'>Coming Soon</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10.5px]'>
                        <a className='text-[35px] font-[400] cursor-pointer'>Sable Debit</a>
                        <a className='text-[35px] font-[400] cursor-pointer'>App</a>
                        <a className='text-[35px] font-[400] cursor-pointer'>Learn</a>
                    </div>
                    <div className='text-[14px] font-[200] gap-[2px] flex flex-col cursor-pointer'>
                        <a>FAQs</a>
                        <a>About Sable</a>
                    </div>
                </div>
                <div className='w-[33.3%] flex flex-col justify-between pl-25'>
                    <div className='tracking-[1px] flex flex-col gap-[10px]'>
                        <span className='text-[35px] font-[400]'>Contact</span>
                        <div className='flex flex-col gap-[2px]'>
                            <span className='text-[14px] font-[200]'>Email: help@sablecard.com</span>
                            <span className='text-[14px] font-[200]'>Location: Cairo, EG</span>
                        </div>
                    </div>
                    <div className='flex w-full h-[20%] items-center justify-left gap-15'>
                        <a className='cursor-pointer'><img src='./src/assets/insta.png' /></a>
                        <a className='cursor-pointer'><img src='./src/assets/X.png' /></a>
                        <a className='cursor-pointer'><img src='./src/assets/facebook.png' /></a>
                        <a className='cursor-pointer'><img src='./src/assets/yt.png' /></a>
                        <a className='cursor-pointer'><img src='./src/assets/tiktok.png' /></a>
                    </div>
                </div>
                <div className='w-[33.3%] flex flex-col justify-between pl-55'>
                    <img src='./src/assets/logoFooter.png' className='w-[248px] h-[60px]' />
                    <div className='h-[20%] flex items-center opacity-50'>© Sable Money Inc, all rights reserved.</div>
                </div>
            </div>

            <div className='h-[40px] bg-black flex justify-center items-center'>
                <div className='border border-white opacity-10 w-[85%]' /> {/* Line Breaker */}
            </div>

            {/* PP & TAC */}
            <div className='h-[50%] bg-black flex justify-center items-top text-[12px] opacity-10'>
                <div className='h-[80%] w-[85%] flex flex-col'>
                    <span className='py-6'>
                        <a className='cursor-pointer hover:opacity-50'>Privacy policy</a> | <a className='cursor-pointer hover:opacity-50'>Terms and conditions</a></span>
                    <span className='py-2 flex flex-col'>
                        <span>*Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.</span>
                        <span>Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community Bank, Member FDIC.</span>
                        <span>**If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is required to open a bank account.</span>
                        <span>*** Double cashback bonus (through 12/2022)</span>
                    </span>
                    <span className='py-2 flex flex-col pl-5'>
                        <span>Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions. Some exclusions apply.</span>
                        <span>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</span>
                        <span>This benefit is provided by MasterCard. Benefits are subject to terms, conditions and limitations, including limitations on the amount of coverage. Please see the terms and conditions.</span>
                        <span>Sable estimated annual value</span>
                        <span>Sable product comparisons</span>
                    </span>
                    <span>Sable Remittance Best Rate Guarantee Terms</span>
                </div>
            </div>
        </div>
    )
}

export default Footer