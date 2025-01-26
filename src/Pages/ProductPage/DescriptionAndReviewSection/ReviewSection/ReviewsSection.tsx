import ReviewBox from './ReviewBox';
import CustomTabPanel from './CustomTabPanel';
import WriteAreviewSubSection from './WriteAreviewSubSection';
import Avatar1 from '../../../../assets/Avatars/avatar-1.webp';
import Avatar2 from '../../../../assets/Avatars/avatar-2.webp';
import Avatar3 from '../../../../assets/Avatars/avatar-3.webp';


function ReviewsSection({ value }: { value: number }) {
    return (
        <CustomTabPanel value={value} index={1}>
            <div className='review-boxes'>
                <ReviewBox img={Avatar1}/>
                <ReviewBox img={Avatar2}/>
                <ReviewBox img={Avatar3}/>
                <WriteAreviewSubSection />
            </div>
        </CustomTabPanel>
    )
}



export default ReviewsSection