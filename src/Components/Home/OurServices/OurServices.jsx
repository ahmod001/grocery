import OurServicesAndQualities from '../../OurServicesAndQualities/OurServicesAndQualities';
import { useMediaQuery } from '@mui/material';
import truck from '../../../assets/icons/service_icons/truck.png';
import headphones from '../../../assets/icons/service_icons/headphones.png';
import location from '../../../assets/icons/service_icons/location.png';
import price from '../../../assets/icons/service_icons/price.png';

const OurServices = () => {
    return (
        <OurServicesAndQualities>
            <OurServicesList />
        </OurServicesAndQualities>
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
        <div className='lg:space-y-6 sm:space-y-4 space-y-5'>
            {/* List of Services */}
            <ul className='md:space-y-6 sm:space-y-2 max-w-[20rem] space-y-2.5'>
                {[
                    new Service(0, 'Extra Fastest Delivery', truck),
                    new Service(1, 'Track and Manage Orders', location),
                    new Service(2, 'Customer Support', headphones),
                    new Service(3, 'Competitive Price', price)
                ].map((service) => (
                    <li key={service.id} className='space-x-3.5 hover:shadow-md transition-shadow'>
                    <img className='inline-block h-9 my-auto' src={service.icon} alt={service.name} />
                    <span className='inline-block text-lg font-semibold'>{service.name}</span>
                  </li>                  
                ))}
            </ul>
        </div>
    )
}

export default OurServices;