import { Container } from "@mui/material";
import ourQualitiesBg from '../../assets/backgrounds/2_bg.png';
import qualityMan from "../../assets/premium_qualityMan.png";
import serviceMan from '../../assets/deliveryMan.png';
import { useContext } from "react";
import { ourBestQualityContext } from "../Home/OurBestQualities/OurBestQualities";


const OurServicesAndQualities = ({ children }) => {
    const isOurQuality = useContext(ourBestQualityContext);

    return (
        <section style={isOurQuality ? { backgroundImage: `url(${ourQualitiesBg})`, backgroundRepeat: 'no-repeat' } : {}}>
            <Container>
                <div className='grid py-3.5 gap-x-3 gap-y-1 sm:grid-cols-2 grid-cols-1'>
                    {/* Img */}
                    <div>
                        <img className='xl:h-[29rem] sm:m-0 mx-auto lg:h-[27.5rem] md:h-[24rem] sm:h-[20rem] h-[18rem]' src={isOurQuality?qualityMan: serviceMan} alt="quality_man" />
                    </div>

                    {/* texts */}
                    <div className={`flex md:max-w-none ${!isOurQuality && 'sm:order-first order-none'} max-w-[32rem] items-center`}>
                        <div className='lg:space-y-6 sm:space-y-3.5 space-y-5'>
                            <div className='md:space-y-3 space-y-1.5 w-11/12 '>
                                {/* title */}
                                <h1 className='pb-0 lg:text-3xl md:text-2xl text-xl font-bold capitalize xl:tracking-wide'>
                                    {isOurQuality ? 'Best Quality Healthy And Fresh Grocery' : 'Why We’re Best Quality grocery Shopper '}
                                </h1>
                                {/* description */}
                                <p className='lg:text-base md:text-sm sm:text-xs text-sm'>
                                    {isOurQuality ? 'We prioritize quality in each of our grocery, below are the advantage of our products. Organic food is food produced.' : 'We offer a wide variety of products to choose from you can find everything you need to feed your family.'}
                                </p>
                            </div>
                            {/* Services/Qualities List goes here */}
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurServicesAndQualities;