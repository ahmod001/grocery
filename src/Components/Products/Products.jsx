import { Container, Fade } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ProductCard, { ProductCardSkeleton } from './ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

const Products = ({ categoryProducts }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryName } = useParams();

    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    // Get Products 
    useEffect(() => {
        const getData = async function () {
            const allProductsUrl = 'https://api.npoint.io/bc3d1b1bc1a0fde36701';
            const categoryProductsUrl = `https://api.npoint.io/bc3d1b1bc1a0fde36701/${categoryName === 'meat' ? 0
                : categoryName === 'vegetables' ? 1
                    : categoryName === 'fruits' ? 2
                        : categoryName === 'dairy' ? 3
                            : categoryName === 'grains' ? 4
                                : 2}`
            try {
                const res = await fetch(categoryName ? categoryProductsUrl : allProductsUrl)
                const data = await res.json();
                setProducts(categoryName ? data.items
                    : data[0].items.concat(data[1].items, data[2].items, data[3].items, data[4].items))
                setIsLoading(!isLoading)
            }
            catch (error) {
                throw new Error('Products Fetch Failed', error)
            }
        }();
    }, [])

    return (
        <main className='min-h-screen space-y-5 pt-20 mb-9'>
            <Fade in={true}>
                <Container className='xl:space-y-10 sm:space-y-8 space-y-6'>
                    {/* Title */}
                    <h1 className='pb-0 md:text-2xl text-xl font-semibold text-gray-700 capitalize'>
                        {categoryName ? categoryName : 'All Products'}
                    </h1>

                    {/* Product_cards*/}
                    <section className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
                lg:gap-6 gap-x-5 gap-y-5'>
                        {
                            !isLoading ?
                                products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product} />
                                ))
                                : Array.from({ length: 8 }).map((pd, i) => {
                                    return <ProductCardSkeleton key={i} />
                                })
                        }
                    </section>
                </Container>
            </Fade>
        </main>
    );
};

export default Products;