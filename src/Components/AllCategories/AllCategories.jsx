import { Container, Fade } from '@mui/material';
import CategoryCard from '../CategoryCard/CategoryCard';
import moduleName from '../../assets/categories/dairy.png';
import meat from "../../assets/categories/meat.png";
import vegetables from "../../assets/categories/vagetable.png";
import fruits from "../../assets/categories/fruits.png";
import dairy from "../../assets/categories/dairy.png";
import grains from "../../assets/categories/grains.png";

const AllCategories = () => {
    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    return (
        <main className='min-h-screen space-y-5 pt-20 mb-9'>
            <Fade in={true}>
                <Container className='xl:space-y-10 sm:space-y-8 space-y-6'>
                    {/* Title */}
                    <h1 className='pb-0 md:text-2xl text-xl font-semibold text-gray-700 capitalize'>
                        All Categories
                    </h1>
                    {/* All Category Cards */}
                    <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                        {[
                            { id: 0, name: 'Meat', img: meat, bgColor: '#FEF4EA' },
                            { id: 1, name: 'Vegetables', img: vegetables, bgColor: '#F5F5F5' },
                            { id: 2, name: 'Fruits', img: fruits, bgColor: '#EAF5E3' },
                            { id: 3, name: 'Dairy', img: dairy, bgColor: '#eaf4f4' },
                            { id: 4, name: 'Grains', img: grains, bgColor: '#FAF9D7', }

                        ].map(category => (
                            <CategoryCard
                                key={category.id}
                                shadow={true}
                                category={category} />
                        ))}
                    </section>
                </Container>
            </Fade>
        </main>
    );
};

export default AllCategories;