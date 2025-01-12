import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import {ProductsSlides} from '../../utilities/data';
import SectionHeader from './SectionHeader';
import { useState } from 'react';

function SelectedProducts() {
    const [selectedProducts, setSelectedProducts] = useState(ProductsSlides);
    const [active, setActive] = useState({
        newArrivals: true,
        bestSellers: false,
        mostPopuler: false,
        all: false
    });
    return (
        <div className="deals-of-the-day w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="w-full">
                    <SectionHeader title='Selected Products' setSelectedProducts={setSelectedProducts} active={active} setActive={setActive} />
                    <ProductsSlider id="deals-of-the-day" slides={5} cards={selectedProducts}/>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default SelectedProducts