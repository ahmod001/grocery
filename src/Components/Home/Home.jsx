import { Fade } from '@mui/material';
import CustomersReview from './CustomersReview/CustomersReview';
import DownloadOurApp from './DownloadOurApp/DownloadOurApp';
import Hero from './Hero/Hero';
import OurBestQualities from './OurBestQualities/OurBestQualities';
import OurServices from './OurServices/OurServices';
import PopularCategories from './PopularCategories/PopularCategories';
import EnjoyOurFreshGroceryItems from './EnjoyOurFreshGroceryItems/EnjoyOurFreshGroceryItems';

const Home = () => {
  // Scrolling Bug Fixed
  window.scroll({ top: 0 });

  return (
    <Fade in={true}>
      <main className='min-h-screen space-y-5 mb-9'>
        <Hero />
        <PopularCategories />
        <OurBestQualities />
        <EnjoyOurFreshGroceryItems />
        <OurServices />
        <CustomersReview />
        <DownloadOurApp />
      </main>
    </Fade>
  )
};

export default Home;