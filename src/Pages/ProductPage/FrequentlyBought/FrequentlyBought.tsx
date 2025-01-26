import RecommendedOne from '../../../assets/RecommendedProducts/recommended-1.webp';
import RecommendedTwo from '../../../assets/RecommendedProducts/recommended-2.webp';
import RecommendedThree from '../../../assets/RecommendedProducts/recommended-3.webp';
import RecommendedFour from '../../../assets/RecommendedProducts/recommended-4.webp';
import RecommendedProduct from './RecommendedProduct';
import RecommnededSummary from './RecommnededSummary';

function FrequentlyBought() {
    return (
        <div className='py-[15px]'>
            <h1 className='text-[20px] font-bold'>Frequently Bought Together</h1>
            <div className='recommended-products flex flex-wrap lg:flex-row gap-[20px] mt-[20px]'>
                <RecommendedProduct img={RecommendedOne}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct img={RecommendedTwo}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct img={RecommendedThree}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct img={RecommendedFour}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>=</div>
                <RecommnededSummary />
            </div>
        </div>
    );
}

export default FrequentlyBought;