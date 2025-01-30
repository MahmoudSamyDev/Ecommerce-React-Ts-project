import RelatedStore from './RelatedStore';

import StoreOne from '../../../assets/RecommendedStores/StoreOne.webp';
import StoreTwo from '../../../assets/RecommendedStores/StoreTwo.webp';
import StoreThree from '../../../assets/RecommendedStores/StoreThree.webp';

const recommendedStoresData = [
    {
        id: 0,
        name: 'Tech Friend',
        image: StoreOne
    },
    {
        id: 1,
        name: 'Smart Shop',
        image: StoreTwo
    },
    {
        id: 2,
        name: 'Gadget 360',
        image: StoreThree
    }
]

function OtherStoresRelated() {
    return (
        <div className='py-[15px] h-[fit-content] my-[40px]'>
            <h1 className='text-[20px] font-bold'>Also Available at</h1>
            <div className='related-stores flex flex-wrap items-center lg:flex-row gap-[20px] min-h-[200px] max-h-[fit-content]'>
                {
                    recommendedStoresData.map(store => (
                        <RelatedStore key={store.id} store={store}/>
                    ))
                }
            </div>
        </div>
    )
}



export default OtherStoresRelated