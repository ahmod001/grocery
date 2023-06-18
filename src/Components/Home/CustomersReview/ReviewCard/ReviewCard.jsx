import { Avatar, Skeleton } from '@mui/material';
import React from 'react';
import truck from '../../../../assets/icons/service_icons/truck.png';
import { Star } from '@mui/icons-material';

const ReviewCard = ({ user }) => {
    const { name, picture } = user;

    return (
        <div className='rounded-lg mx-auto cursor-pointer reviewCard px-6 md:px-6 sm:px-4 py-4 md:space-y-3.5 sm:space-y-2.5 space-y-3.5 transition-all max-w-[23rem] shadow-sm duration-300'>
            <header className='flex items-center space-x-3'>
                {/* Customer Img */}
                <Avatar
                    src={picture.medium}
                    sx={{ height: '3.2rem', width: '3.2rem' }} />

                <div className=''>
                    {/* Name */}
                    <h3 className='font-bold h-6 tracking-wide text-lg text-gray-700'>
                        {name.first + ' ' + name.last}
                    </h3>

                    {/* Title */}
                    <span className='text-xs font-normal'>Happy Customer</span>
                </div>
            </header>

            {/* Review Text */}
            <p className='text-sm text-justify  sm:text-xs md:text-sm tracking-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis, aut voluptates officia ipsa modi .</p>

            {/* Review Stars */}
            <footer className='text-lg space-x-0.5'>
                {
                    [1, 2, 3, 4, 5].map(star => (
                        <Star
                            key={star}
                            color='warning'
                            fontSize='inherit' />
                    ))
                }
            </footer>
        </div>
    );
};

// Review Card Skeleton
export const ReviewCardSkeleton = () => (
    <div className='rounded-lg mx-auto px-6 py-4 space-y-3.5 max-w-[23rem] sm:shadow-md shadow-sm'>
        <header className='flex items-center space-x-3'>
            {/* Img */}
            <Skeleton
                height={45}
                width={45}
                variant='circular' />

            <div>
                {/* Name */}
                <Skeleton
                    height={33}
                    width={85}
                    variant='text' />

                {/* Title */}
                <Skeleton
                    height={15}
                    width={100}
                    variant='text' />
            </div>
        </header>
        {/* Review Text */}
        <div>
            <Skeleton
                height={15}
                width={'100%'}
                variant='text' />
            <Skeleton
                height={15}
                width={'100%'}
                variant='text' />
            <Skeleton
                height={15}
                width={'100%'}
                variant='text' />
            <Skeleton
                height={15}
                width={'40%'}
                variant='text' />
        </div>

        {/* Review Stars */}
        <footer className='text-lg flex space-x-2'>
            {
                [1, 2, 3, 4, 5].map(star => (
                    <Skeleton
                        key={star}
                        height={13}
                        width={13}
                        variant='circular' />
                ))
            }
        </footer>
    </div>
)

export default ReviewCard;