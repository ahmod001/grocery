import { createContext, useContext } from 'react';
import OurServicesAndQualities from '../../OurServicesAndQualities/OurServicesAndQualities';
import right from '../../../assets/icons/right_symbol.png';
import { Button, useMediaQuery } from '@mui/material';
import { groceryContext } from '../../Layout/Layout';
import { handleSessionStorage } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

export const ourBestQualityContext = createContext();

const OurBestQualities = () => (
    <ourBestQualityContext.Provider value={true}>
        <OurServicesAndQualities>
            <OurQualities />
        </OurServicesAndQualities>
    </ourBestQualityContext.Provider>
);

// Our Best qualities SubComponent
const OurQualities = () => {
    // Get Cart Items from Context
    const { cartItemsState } = useContext(groceryContext);
    const [cartItems, setCartItems] = cartItemsState;
    const navigate = useNavigate()
    const isUserLoggedIn = handleSessionStorage('get', 'userLoggedIn')
    // Media Query
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');

    // Handle Order
    const handleOrder = () => {
        cartItems.length > 0 && isUserLoggedIn ?
            navigate('/cart') : navigate('/products')
    }

    return (
        <div className='lg:space-y-6 sm:space-y-4 space-y-5'>
            {/* List of Qualities */}
            <ul className='md:space-y-4 sm:space-y-2 space-y-2.5'>
                {['Best Quality Healthy And Fresh Grocery', '100% Organic & Natural Products', '100% Returns & Refunds', 'User-Friendly Mobile Apps'].map((quality, i) => (
                    <li key={i} className='space-x-2 p-0'>
                        <img className='inline-block lg:h-6 h-4 my-auto'
                            src={right}
                            loading='lazy'
                            alt={quality} />
                        <span className='inline-block lg:text-base md:text-sm sm:text-xs text-sm font-semibold'>{quality}</span>
                    </li>
                ))}
            </ul>

            {/* Order_Now Btn */}
            <Button
                onClick={handleOrder}
                size={isMediumScreen ? 'medium' : 'large'}
                sx={{ textTransform: 'capitalize' }}
                variant='contained'
                color='success'>
                Order Now
            </Button>
        </div>
    )
}

export default OurBestQualities;