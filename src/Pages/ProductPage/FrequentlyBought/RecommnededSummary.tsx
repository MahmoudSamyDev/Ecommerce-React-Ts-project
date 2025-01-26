function RecommnededSummary({addToCartHandler}: {addToCartHandler: () => void}) {
    return(
        <div className='recommneded-summary flex justify-center items-center border border-[#f0f0f0] border-[2px] rounded-[12px] p-[15px] bg-background w-full md:w-[300px] h-[fit-content] md:h-[290px]'>
            <div className='summary-contet w-full text-center flex flex-col gap-[10px]'>
                <span className='block official-price text-officialRed font-bold text-2xl'>$400</span>
                <span className='block dicount-rate text-[grey]'>You Saved $800</span>
                <div className='recommnedation-options flex justify-between gap-[10px]'>
                    <button
                        className='add-to-cart-btn w-full bg-officialRed text-white py-[10px] rounded-[12px] mt-[10px]'
                        onClick={addToCartHandler}
                    >
                        Add to Cart
                    </button>
                    <button className='add-list-btn w-full border border-officialRed text-officialRed py-[10px] rounded-[12px] mt-[10px]'>Add to List</button>
                </div>
            </div>
        </div>
    )
}

export default RecommnededSummary;