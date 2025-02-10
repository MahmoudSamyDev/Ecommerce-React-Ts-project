function DealSummary() {
    return(
        <div className="cart-products-summary flex-1 bg-white h-[fit-content] rounded-[14px] shadow p-[20px] flex flex-col gap-[10px]">
            <header className='summary-header flex justify-between'>
                <span className='text-[grey] text-[18px]'>Total:</span>
                <span className='text-black text-[25px]'>$340</span>
            </header>
            <hr className='my-[15px]'></hr>
            <button className="text-[red] text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed">Apply Voucher</button>
        </div>
    )
}

export default DealSummary;