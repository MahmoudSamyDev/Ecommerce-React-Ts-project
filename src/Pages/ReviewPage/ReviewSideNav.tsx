import ReviewSideNavSection from './ReviewSideNavSection';
import { dashboardNav, accountSetting } from './utils/data';

function ReviewSideNav() {
    return (
        <div className='review-navigations w-[20%] bg-white rounded-[14px] shadow py-[18px] h-[fit-content] hidden lg:block'>
            <ReviewSideNavSection menu={dashboardNav} />
            <ReviewSideNavSection menu={accountSetting} />
        </div>
    )
}

export default ReviewSideNav