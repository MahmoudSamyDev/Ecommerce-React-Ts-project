import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import BuyJourneyComponent from '../BuyJourneyComponent';
import DealSummary from './DealSummary';
import Address from './Address';
import { Link } from 'react-router-dom';

function CustomerDealDetails() {
    return(
        <div className="deals-of-the-day w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <div className='flex flex-col gap-[15px]'>
                    <BuyJourneyComponent route='details' />
                    <div className='cart-page-content w-full flex justify-between gap-[15px] flex-wrap'>
                        <div className="cart-products w-full lg:w-[65%] h-[fit-content] flex flex-col gap-[30px]">
                            <Address header="Shipping"/>
                            <Address header="Billing"/>
                            <div className='options w-full flex flex-col md:flex-row justify-between gap-[15px] flex-wrap'>
                                <Link
                                    to='/cart'
                                    className="text-officialRed text-center w-full md:w-[45%] p-[8px] border border-officialRed rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed h-[38px]"
                                >
                                    <button
                                    >
                                        Back to Cart
                                    </button>
                                </Link>
                                <Link
                                    to='/payment'
                                    className="text-white text-center w-full md:w-[45%] p-[8px] border border-[red] rounded-[8px] duration-300 bg-officialRed hover:bg-[#f61225] hover:border hover:border-officialRed h-[38px]"
                                >
                                    <button
                                >
                                    Proceed To Payment
                                </button>
                                </Link>
                            </div>
                        </div>
                        <DealSummary />
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}



export default CustomerDealDetails;