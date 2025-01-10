import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import SectionHeader from '../../layout/Components/SectionHeader';
import ProductsSlider from './ProductsSlider';

function DealsOfTheDay() {
    return (
        <div className="deals-of-the-day w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="w-full">
                    <SectionHeader title='Deals of the Day' nav='More Products' />
                    <ProductsSlider />
                </div>
            </ContainerWrapper>
        </div>
    )
}



export default DealsOfTheDay