import Landing from '../../Sections/Landing/Landing';
import Values from '../../Sections/Values/Values';
import ProductNav from '../../Sections/ProductNav/ProductNav';
import BlackFridaySale from '../../Sections/Ads/BlackFridaySale';

function Home() {
    return (
        <div className='home w-full'>
            <Landing />
            <Values />
            <ProductNav />
            <BlackFridaySale />
        </div>
    );
}

export default Home;