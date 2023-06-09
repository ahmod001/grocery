import { Container } from "@mui/material";
import ourQualitiesBg from '../../assets/backgrounds/2_bg.png';
import qualityMan from "../../assets/premium_qualityMan.png";
import serviceMan from '../../assets/deliveryMan.png';
import phone from '../../assets/phone.png';
import { useContext } from "react";
import { ourBestQualityContext } from "../Home/OurBestQualities/OurBestQualities";
import { servicesContext } from "../Home/OurServices/OurServices";
import { downloadApp } from "../Home/DownloadOurApp/DownloadOurApp";


const OurServicesAndQualities = ({ children }) => {
    // Get props from context 
    const isOurQuality = useContext(ourBestQualityContext);
    const isService = useContext(servicesContext);
    const isDownloadApp = useContext(downloadApp);

    return (
        <section id={!isOurQuality ? "services": ''}
            style={isOurQuality ? { backgroundImage: `url(${ourQualitiesBg})`, backgroundRepeat: 'no-repeat' } : {}}>
            <Container>
                <div className='grid py-3.5 gap-x-3 gap-y-4 sm:grid-cols-2 grid-cols-1'>
                    {/* Img */}
                    <img className='xl:h-[29rem] sm:m-0 mx-auto lg:h-[27.5rem] md:h-[24rem] sm:h-[20rem] h-[18rem]' src={isOurQuality ? qualityMan : isService ? serviceMan : phone} alt="" />

                    {/* texts */}
                    <div className={`flex md:max-w-none ${!isOurQuality && 'sm:order-first order-none'} max-w-[32rem] items-center`}>
                        <div className={isDownloadApp? 'lg:space-y-10 sm:space-y-7 space-y-8' :'lg:space-y-6  space-y-3.5'}>
                            <div className={`${isDownloadApp? 'md:space-y-6 space-y-4':'md:space-y-3 sm:space-y-1.5  space-y-2.5'} w-11/12`}>
                                {/* title */}
                                <h1 className='pb-0 lg:text-3xl md:text-2xl text-xl font-bold capitalize xl:tracking-wide'>
                                    {isOurQuality ?
                                        'Best Quality Healthy And Fresh Grocery'
                                        : isService ?
                                            'Why We’re Best Quality grocery Shopper '
                                            : 'Download Our Grocery Mobile App And Save Time, Money'}
                                </h1>
                                {/* description */}
                                <p className='lg:text-base text-gray-7o 00 md:text-sm sm:text-xs text-sm'>
                                    {isOurQuality ? 'We prioritize quality in each of our grocery, below are the advantage of our products. Organic food is food produced.' : isService ? 'We offer a wide variety of products to choose from you can find everything you need to feed your family.' : 'Our grocery mobile app makes it easy to shop for groceries on the go.You can browse our selection of products, create a shopping list, and order groceries for pickup or delivery.'}
                                </p>
                            </div>

                            {/* Child Component goes here */}
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