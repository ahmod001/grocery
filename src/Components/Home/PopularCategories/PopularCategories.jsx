import { Button, Container } from '@mui/material';
import React from 'react';
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination , Navigation} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const PopularCategories = () => {
    return (
        <Container>
            <section className='space-y-8'>
                <header className='flex justify-between'>
                    {/* Title */}
                    <h1 className='pb-0 lg:text-3xl md:text-2xl text-xl font-semibold capitalize'>
                        Popular Categories
                    </h1>

                    {/* See all Categories Btn */}
                    <Button
                        color='success'
                        variant='outlined'
                        sx={{ textTransform: 'capitalize' }} endIcon={<KeyboardArrowRightRounded fontSize='large' />}>
                        See All
                    </Button>
                </header>

                {/* Categories */}
                <Categories />
            </section>
        </Container>
    );
};


// Categories Carousel
const Categories = () => {
    return(
        <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className='h-5 w-full bg-yellow-300'>.</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-5 w-full bg-green-300'>.</div>
        </SwiperSlide>
    </Swiper>
    )
}
export default PopularCategories;