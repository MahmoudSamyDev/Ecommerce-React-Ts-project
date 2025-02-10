import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import BuyJourneyComponent from '../BuyJourneyComponent';
import DealSummary from './DealSummary';


function CustomerDealDetails() {
    return(
        <div className="deals-of-the-day w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <div className='flex flex-col gap-[15px]'>
                    <BuyJourneyComponent />
                    <div className='cart-page-content w-full flex justify-between gap-[15px] flex-wrap'>
                        <div className="cart-products w-full lg:w-[65%] h-[fit-content] flex flex-col gap-[15px]">
                        {/* Deatils */}
                        </div>
                        <DealSummary />
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default CustomerDealDetails;