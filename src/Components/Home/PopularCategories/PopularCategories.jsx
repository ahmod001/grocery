import { Button, Container, useMediaQuery } from '@mui/material';
import { ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import meat from "../../../assets/categories/meat.png";
import vegetables from "../../../assets/categories/vagetable.png";
import fruits from "../../../assets/categories/fruits.png";
import dairy from "../../../assets/categories/dairy.png";
import grains from "../../../assets/categories/grains.png";
import "swiper/css";
import 'swiper/css/navigation';
import CategoryCard from '../../CategoryCard/CategoryCard';
import { useRef } from 'react';
import './swiper.css'
import { useNavigate } from 'react-router-dom';


const PopularCategories = () => {
    // Media Query
    const isExtraSmallScreen = useMediaQuery('(max-width: 664px)')
    const navigate = useNavigate();

    return (
        <Container>
            <section className='space-y-7'>
                <header className='flex justify-between items-center'>
                    {/* Title */}
                    <h1 className='pb-0 md:text-2xl text-xl font-semibold capitalize'>
                        Popular Categories
                    </h1>
                    {/* See all Categories Btn */}
                    <Button
                        size={isExtraSmallScreen ? 'small' : 'medium'}
                        color='success'
                        variant='outlined'
                        onClick={()=> navigate('/categories')}
                        sx={{ textTransform: 'capitalize' }} endIcon={
                            <ArrowForward fontSize='large' />}>
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
    const swiperRef = useRef(null);
    // media Quary
    const isExtraSmallScreen = useMediaQuery('(max-width: 640px)')

    return (
        <Swiper
            breakpoints={
                {
                    // Extra_Small Screen
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    //Medium Screen
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    //Large Screen
                    1060: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    }
                }
            }

            modules={[Pagination, Navigation, FreeMode]}
            navigation={!isExtraSmallScreen}
            freeMode={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper">
            {
                [
                    { id: 0, name: 'Meat', img: meat, bgColor: '#FEF4EA' },
                    { id: 1, name: 'Vegetables', img: vegetables, bgColor: '#F5F5F5' },
                    { id: 2, name: 'Fruits', img: fruits, bgColor: '#EAF5E3' },
                    { id: 3, name: 'Dairy', img: dairy, bgColor: '#eaf4f4' },
                    { id: 4, name: 'Grains', img: grains, bgColor: '#FAF9D7', }
                ].map(category => (
                    // Category_card 
                    <SwiperSlide key={category.id}>
                        <CategoryCard category={category} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
export default PopularCategories;