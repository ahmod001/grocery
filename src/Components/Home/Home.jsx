import CustomersReview from './CustomersReview/CustomersReview';
import DownloadOurApp from './DownloadOurApp/DownloadOurApp';
import Hero from './Hero/Hero';
import OurBestQualities from './OurBestQualities/OurBestQualities';
import OurServices from './OurServices/OurServices';
import PopularCategories from './PopularCategories/PopularCategories';

const Home = () => {
  return (
    <main className='min-h-screen space-y-5 mb-9'>
      <Hero />
      <PopularCategories />
      <OurBestQualities />
      <OurServices />
      <CustomersReview/>
      <DownloadOurApp />
    </main>
  )
};

export default Home;