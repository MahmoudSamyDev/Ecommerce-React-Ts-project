import Rating from '@mui/material/Rating';


function ReviewBox({ img }: { img: string }) {
    return(
        <div className='review-box w-full mb-[20px]'>
            <div className='personnel-rate flex items-center mb-[10px]'>
                <div className='personnel-img w-[55px] h-[50px] rounded-[10px] bg-[#dadada] overflow-hidden mr-[15px]'>
                    <img src={img} alt='avatar' className='w-[50px] h-[50px] mx-auto'/>
                </div>
                <div className='personnel-rating text-left'>
                    <span className='personnel-name font-bold'>Jannie Schumm</span>
                    <span className="flex items-center">
                        <Rating name="read-only" sx={{fontSize: '16px'}} value={4} readOnly /> <span className="text-[grey] text-[14px]">(4)</span> <span className='text-[grey] text-[12px] ml-[20px]'>4 years ago</span>
                    </span>
                </div>
            </div>
            <div className='personnel-review md:w-[80%] lg:w-[40%] text-[grey] text-[14px]'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
                </p>
            </div>
        </div>
    )
}

export default ReviewBox