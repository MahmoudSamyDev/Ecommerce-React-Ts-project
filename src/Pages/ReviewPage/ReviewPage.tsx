import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ReviewSideNav from './ReviewSideNav';
import ReviewOrders from './ReviewOrders/ReviewOrders';

function ReviewPage() {
    return (
        <div className="review-page w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <div className='cart-page-content w-full flex justify-between gap-[25px] flex-wrap'>
                    <ReviewSideNav />
                    <ReviewOrders />
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default ReviewPage