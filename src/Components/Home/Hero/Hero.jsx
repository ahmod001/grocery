import React from 'react';
import Hero_bg from '../../../assets/backgrounds/1_bg.png'
import { Button, Container, useMediaQuery } from '@mui/material';
import hero_customer from '../../../assets/hero_customer.png';
import ful_kopi from '../../../assets/icons/ful_kopi_icon.png';

const Hero = () => {
    // Media Query
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <section style={{ backgroundImage: `url(${Hero_bg})`, backgroundSize: 'cover' }} className='pt-16 sm:bg-green-400/10'>

            <Container>
                <div className='sm:grid sm:grid-cols-2 flex flex-col-reverse gap-x-5'>
                    {/* Text */}
                    <div className='col pb-6 pt-3 flex items-center'>
                      <div className='xl:space-y-7 lg:space-y-6 md:space-y-5 sm:space-y-4 space-y-5 w-11/12 sm:tracking-normal tracking-wide'>
                          {/* title */}
                          <h1 className='xl:text-5xl pb-0  md:text-3xl sm:text-2xl text-3xl font-bold capitalize xl:tracking-wide'>
                            Make healthy life <br />
                           <div className='xl:my-2.5 lg:my-1.5 sm:my-0 md:my-0.5 my-1'>
                           with <span className='text-green-500'>
                                fresh grocery
                            </span>
                           </div>
                           products <img className='inline xl:h-11  md:h-7 sm:h-6 h-7' src={ful_kopi} alt="vegetable" />
                        </h1>
                        {/* description */}
                        <p className='lg:text-base md:text-sm sm:text-xs text-sm'>
                        Get the best quality and most delicious grocery food in the world, you can get them our website. Fresh grocery every day to your family.
                        </p>

                        {/* Shop_now Btn */}
                        <Button  sx={{textTransform: 'capitalize'}}
                        variant='contained'
                        size={isSmallScreen?'medium':'large'}
                        color='success'>
                            Shop Now 
                        </Button>
                      </div>
                    </div>

                    {/* Hero Img */}
                    <div className='col'>
                        <img className='xl:h-[33.5rem] lg:h-[28.5rem] md:h-[25rem] mx-auto sm:h-[18rem] h-[19rem]' src={hero_customer} alt="hero_customer" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;