import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import SectionHeader from '../../layout/Components/SectionHeader';

function DealsOfTheDay() {
    return (
        <div className="deals-of-the-day w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="w-full">
                    <SectionHeader title='Deals of the Day' nav='More Products' />
                    <ProductsSlider id="deals-of-the-day" slides={5}/>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default DealsOfTheDay