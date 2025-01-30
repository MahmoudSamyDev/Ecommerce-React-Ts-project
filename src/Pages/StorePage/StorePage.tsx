import StoreCover from './StoreCover';
import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import StoreFilter from './StoreFilter';
import StoreProducts from './StoreProducts';

function StorePage() {
    return (
        <div className="deals-of-the-day w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <StoreCover />
                <div className="w-full flex flex-col md:flex-row gap-[35px] items-start">
                    {/* Add self-start to StoreFilter */}
                    <div className="self-start w-full md:w-[25%]">
                        <StoreFilter />
                    </div>
                    <StoreProducts />
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default StorePage;

