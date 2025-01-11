import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import {ProductsSlides, NewArrivalsProducts, BestSellersProducts, MostPopulerProducts} from '../../utilities/data';
import { useState } from 'react';

function SelectedProducts() {
    const [selectedProducts, setSelectedProducts] = useState(ProductsSlides);
    return (
        <div className="deals-of-the-day w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="w-full">
                    <SectionHeader title='Selected Products' setSelectedProducts={setSelectedProducts} />
                    <ProductsSlider id="deals-of-the-day" slides={5} cards={selectedProducts}/>
                </div>
            </ContainerWrapper>
        </div>
    )
}

function SectionHeader({title, setSelectedProducts}: {title: string, setSelectedProducts: React.Dispatch<React.SetStateAction<any>>}) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-[20px]">{title}</h2>
                <p>All our new arrivals in a exclusive brand selection</p>
            </div>
            <div className='selection-buttons flex gap-[10px]'>
                <button
                    className='selection-button border py-[8px] px-[10px] font-bold bg-background text-[#002c3d] border-[#002c3d] rounded-[10px] duration-300 hover:bg-[#d2d2d2]'
                    onClick={() => setSelectedProducts(NewArrivalsProducts)}
                >
                    New Arrivals
                </button>
                <button
                    className='selection-button border py-[8px] px-[10px] font-bold bg-background text-[#002c3d] border-[#002c3d] rounded-[10px] duration-300 hover:bg-[#d2d2d2]'
                    onClick={() => setSelectedProducts(BestSellersProducts)}
                >
                    Best Sellers
                </button>
                <button
                    className='selection-button border py-[8px] px-[10px] font-bold bg-background text-[#002c3d] border-[#002c3d] rounded-[10px] duration-300 hover:bg-[#d2d2d2]'
                    onClick={() => setSelectedProducts(MostPopulerProducts)}
                >
                    Most Populer
                </button>
                <button
                    className='selection-button border py-[8px] px-[10px] font-bold bg-background text-[#002c3d] border-[#002c3d] rounded-[10px] duration-300 hover:bg-[#d2d2d2]'
                    onClick={() => setSelectedProducts(ProductsSlides)}
                >
                    View All
                </button>
            </div>
        </div>
    )
}
export default SelectedProducts