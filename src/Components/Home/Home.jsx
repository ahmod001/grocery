import Hero from './Hero/Hero';
import OurBestQualities from './OurBestQualities/OurBestQualities';
import OurServices from './OurServices/OurServices';
const Home = () => {
  return (
    <main className='min-h-screen space-y-5 mb-9'>
        <Hero />
        <OurBestQualities/>
        <OurServices/>
    </main>
  )
};

export default Home;