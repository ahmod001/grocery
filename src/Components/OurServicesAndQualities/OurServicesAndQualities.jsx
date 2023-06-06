import React from 'react';
import { Container } from "@mui/material";
import ourQualitiesBg from '../../assets/backgrounds/2_bg.png';
import qualityMan from "../../assets/premium_qualityMan.png";

const OurServicesAndQualities = () => {
    return (
        <section style={{ backgroundImage: `url(${ourQualitiesBg})`, backgroundRepeat: 'no-repeat' }}>
            <Container>
                <div className='grid gap-x-5 sm:grid-cols-2 grid-cols-1'>
                    {/* Img */}
                    <div>
                        <img className='xl:h-[33.5rem] mx-auto lg:h-[28.5rem] md:h-[25rem] sm:h-[18rem] h-[19rem]' src={qualityMan} alt="quality_man" />
                    </div>

                    {/* texts */}
                    <div className='flex md:max-w-none max-w-[32rem] items-center'>
                        <div>
                            <div className='md:space-y-4 space-y-3 w-11/12 '>
                                {/* title */}
                                <h1 className='xl:text-3xl pb-0  md:text-3xl sm:text-2xl text-2xl font-bold capitalize xl:tracking-wide'>
                                    Best Quality Healthy And
                                    Fresh Grocery
                                </h1>
                                {/* description */}
                                <p className='lg:text-base md:text-sm sm:text-xs text-sm'>
                                    We prioritize quality in each of our grocery, below are the advantage of our products. Organic food is food produced.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurServicesAndQualities;