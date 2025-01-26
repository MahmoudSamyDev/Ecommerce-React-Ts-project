import { useState } from 'react';
import Rating from '@mui/material/Rating';

function WriteAreviewSubSection() {
    const [rateValue, setRateValue] = useState<number | null>(2);
    const [reviewInput, setReviewInput] = useState<string>('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(rateValue, reviewInput);
    }
    return(
        <div className='write-a-review-sub-section mt-[50px]'>
            <h1 className='text-[20px] font-bold'>Write a Review for this product</h1>
            <div className='input-personnel-rating flex items-center gap-[20px] mt-[20px]'>
                <span className='text-[15px]'>Your Rating: </span>
                <Rating
                    name="simple-controlled"
                    value={rateValue}
                    onChange={(_event, newValue) => {
                        setRateValue(newValue);
                    }}
                />
            </div>
            <div className='input-personnel-revire'>
                <span className='text-[15px]'>Your Review: </span>
                <form onSubmit={handleSubmit}>
                    <textarea
                        required
                        className='w-[100%] h-[150px] border border-background resize-none rounded-[12px] p-[10px] mt-[10px] focus:outline-none hover:border-black'
                        placeholder='Write your review here...'
                        value={reviewInput}
                        onChange={(e) => setReviewInput(e.target.value)}
                    ></textarea>
                    <button
                        className='w-[fit-content] px-[15px] text-[15px] h-[40px] bg-officialRed text-[white] rounded-[12px] mt-[10px]'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default WriteAreviewSubSection;