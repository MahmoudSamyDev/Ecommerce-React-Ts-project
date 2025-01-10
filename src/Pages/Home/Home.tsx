import Landing from '../../Sections/Landing/Landing';
import Values from '../../Sections/Values/Values';
import ProductNav from '../../Sections/ProductNav/ProductNav';
import BlackFridaySale from '../../Sections/Ads/BlackFridaySale';
import DealsOfTheDay from '../../Sections/DealsOfTheDay/DealsOfTheDay';

function Home() {
    return (
        <div className='home w-full bg-background'>
            <Landing />
            <Values />
            <ProductNav />
            <BlackFridaySale />
            <DealsOfTheDay />
        </div>
    );
}

export default Home;