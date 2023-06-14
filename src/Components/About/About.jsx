import React from 'react';
import animation from '../../assets/animations/aboutUsAnimation.gif'
import { Container, Fade } from '@mui/material';

const About = () => {
       // Scrolling Bug Fixed
       window.scroll({ top: 0 });
    return (
        <div className=" min-h-screen pt-20 px-2 flex items-center sm:px-6 lg:px-8">
            <Fade in={true}>
                <Container>
                    <div className="max-w-7xl pb-5 container mx-auto ">
                        <div className="lg:grid md:grid-cols-2">
                            {/* Animation */}
                            <div className='col flex order-last justify-center'>
                                <img
                                    className='xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[17.5rem]'
                                    src={animation}
                                    alt="about_us" />
                            </div>
                            <div className="xl:space-y-7 lg:space-y-5 md:space-y-7 space-y-5 sm:mt-0 sm:px-0">
                                {/* Title */}
                                <h2 className="xl:text-3xl md:text-3xl lg:text-2xl text-2xl font-semibold text-gray-800">
                                    Welcome to Our Grocery App
                                </h2>
                                {/* Article */}
                                <p className=" text-justify xl:text-base lg:text-sm md:text-base text-sm text-gray-600">
                                    At <strong>Grocery</strong>, we are committed to providing you with the freshest
                                    and highest quality products for your everyday needs.
                                    Our extensive range includes fresh
                                    vegetables, succulent meats, dairy products, pantry essentials, and much more. We carefully
                                    select our suppliers to ensure that you receive only the best.<br /><br />

                                    With our user-friendly interface and reliable delivery service, grocery shopping has never been
                                    easier. Simply browse our wide selection, add items to your cart, and enjoy the convenience of
                                    doorstep delivery. Say goodbye to long supermarket queues and heavy bags.<br /><br />

                                    We take pride in our commitment to exceptional customer service. Our dedicated support team is
                                    always ready to assist you with any questions or concerns you may have. Your satisfaction is our
                                    top priority.<br /><br />

                                    Experience the convenience and joy of shopping from the comfort of your home. Join us at <strong>Grocery</strong> and discover a new way to grocery shop.<br /><br />

                                    Start shopping now and make your everyday life healthier and more convenient.
                                </p>
                                <div className="mt-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </div >
    );
};

export default About;
