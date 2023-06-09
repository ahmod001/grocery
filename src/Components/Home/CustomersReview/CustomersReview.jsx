import { useEffect, useState } from 'react';
import ReviewCard, { ReviewCardSkeleton } from './ReviewCard/ReviewCard';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
SwiperCore.use([Pagination, Navigation, Autoplay]);

const CustomersReview = () => {
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Get Users
    useEffect(() => {
        const getUsers = async function () {
            try {
                const res = await fetch('https://randomuser.me/api/?results=9');
                const user = await res.json()
                setUsers(user.results)
                setIsLoaded(!isLoaded)
            }
            catch (error) { console.error('Error', error) }
        }();
    }, [])

    return (
        <Container>
            <section className='sm:space-y-10 space-y-8'>
                {/* Title */}
                <h1 className='pb-0 lg:text-4xl md:text-2xl text-xl font-semibold capitalize'>
                    What people say
                </h1>

                {/* Reviews */}
                <Swiper style={{ minHeight: '14rem' }}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={
                        {
                            // Extra_Small Screen
                            0: {
                                slidesPerView: 1,
                            },
                            //Small Screen
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            //Large Screen
                            1060: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }
                    }
                    navigation={true}
                    autoplay={{ delay: 1000 }}
                    speed={800}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    {
                        isLoaded ? users.map((user, i) => (
                            <SwiperSlide key={i}>
                                <ReviewCard user={user} />
                            </SwiperSlide>
                        ))

                            : [...Array(9)].map((user, i) => (
                                <SwiperSlide key={i}>
                                    <ReviewCardSkeleton />
                                </SwiperSlide>))
                    }
                </Swiper>
            </section>
        </Container >
    );
};

export default CustomersReview