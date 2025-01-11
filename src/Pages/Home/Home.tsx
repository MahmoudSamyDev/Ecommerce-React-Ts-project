import Landing from '../../Sections/Landing/Landing';
import Values from '../../Sections/Values/Values';
import ProductNav from '../../Sections/ProductNav/ProductNav';
import BlackFridaySale from '../../Sections/Ads/BlackFridaySale';
import DealsOfTheDay from '../../Sections/DealsOfTheDay/DealsOfTheDay';
import AdsCards from '../../Sections/Ads/AdsCards';
import ProductsSection from '../../Sections/ProductsSection/ProductsSection';
import AdsBanners from '../../Sections/AdsBanners/AdsBanners';
import LongPanner from '../../Sections/LongPanner/LongPanner';
import FeaturedBrands from '../../Sections/FeaturedBrands/FeaturedBrands';
import SelectedProducts from '../../Sections/SelectedProducts/SelectedProducts';
import { ElectronicsSection } from '../../utilities/data';

function Home() {
    return (
        <div className='home w-full bg-background'>
            <Landing />
            <Values />
            <ProductNav />
            <BlackFridaySale />
            <DealsOfTheDay />
            <AdsCards />
            <ProductsSection category={ElectronicsSection} navTitle='Electronics' id='electronics-section'/>
            <AdsBanners />
            <ProductsSection category={ElectronicsSection} navTitle="Men's Fashion" id='man-section'/>
            <LongPanner />
            <ProductsSection category={ElectronicsSection} navTitle="Women's Fashion" id='women-section'/>
            <FeaturedBrands />
            <SelectedProducts />
        </div>
    );
}

export default Home;