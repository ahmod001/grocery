import OurServicesAndQualities from '../../OurServicesAndQualities/OurServicesAndQualities';
import { useMediaQuery } from '@mui/material';
import truck from '../../../assets/icons/service_icons/truck.png';
import headphones from '../../../assets/icons/service_icons/headphones.png';
import location from '../../../assets/icons/service_icons/location.png';
import price from '../../../assets/icons/service_icons/price.png';
import { createContext } from 'react';

export const servicesContext = createContext();
const OurServices = () => {
    return (
        <servicesContext.Provider value={true}>
            <OurServicesAndQualities>
                <OurServicesList />
            </OurServicesAndQualities>
        </servicesContext.Provider>
    );
};

// Our Best Services SubComponent
const OurServicesList = () => {
    // Media Query
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');

    // Class For Service List
    class Service {
        constructor(id, name, icon) {
            this.id = id;
            this.name = name;
            this.icon = icon;
        }
    }

    return (
        // List of Services
        <ul className='lg:max-w-[22rem] sm:max-w-[20rem] sm:p-0 px-1 md:space-y-2 space-y-1'>
            {[
                new Service(0, 'Extra Fastest Delivery', truck),
                new Service(1, 'Track and Manage Orders', location),
                new Service(2, 'Customer Support', headphones),
                new Service(3, 'Competitive Price', price)
            ].map((service) => (
                <li key={service.id}
                    className='xl:space-x-3.5 space-x-3 flex p-0 xl:ps-3.5 md:ps-3 ps-0 rounded-md items-center xl:h-16 lg:h-14 h-12 md:hover:shadow-md  transition-all md:duration-400 duration-200'>
                    <img
                        className='xl:h-9 lg:h-8 h-7 my-auto'
                        src={service.icon}
                        alt={service.name} />
                    <div>
                        <span className='xl:text-lg lg:text-base text-sm font-semibold my-auto'>{service.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default OurServices;