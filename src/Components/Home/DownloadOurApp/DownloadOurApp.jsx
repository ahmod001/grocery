import React, { createContext } from 'react';
import OurServicesAndQualities from '../../OurServicesAndQualities/OurServicesAndQualities';
import appleStore from '../../../assets/icons/store_icons/appleStore.png';
import playStore from '../../../assets/icons/store_icons/playStore.png';

export const downloadApp = createContext();
const DownloadOurApp = () => {

    return (
        <downloadApp.Provider value={true}>
            <OurServicesAndQualities>
                <AppStores />
            </OurServicesAndQualities>
        </downloadApp.Provider>
    );
};

// Stores Link_buttons to download the app
const AppStores = () => (
    <div className='flex items-center xl:space-x-5 lg:space-x-4 space-x-4'>
        {/* Apple Store */}
        <a href="#">
            <div className='bg-black p-2.5 rounded-md'>
                <img src={appleStore} className='xl:h-7 md:h-6 h-5' alt="appleStore" />
            </div>
        </a>

        {/* Play Store */}
        <a href="#">
            <div className='bg-black p-2.5 rounded-md'>
                <img src={playStore} className='xl:h-7 md:h-6 h-5' alt="playStore" />
            </div>
        </a>
    </div>
)
export default DownloadOurApp;