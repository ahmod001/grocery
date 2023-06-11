import { Container, Fade } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard, { ProductCardSkeleton } from './ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get Products 
    useEffect(() => {
        const getData = async function () {
            try {
                const res = await fetch('https://dummyjson.com/products/category/groceries')
                const data = await res.json();
                setProducts(data.products)
                setIsLoading(!isLoading)

            } catch (error) {
                console.error('products_fetch_error', error);
            }
        }();
    }, [])

    return (
        <main className='min-h-screen space-y-5 pt-20 mb-9'>
            <Fade in={true}>
                <Container className='xl:space-y-10 sm:space-y-8 space-y-6'>
                    {/* Title */}
                    <h1 className='pb-0 xl:text-3xl md:text-2xl text-xl xl:font-normal font-semibold capitalize'>
                        All Products
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