function PaymentSummary() {
    return (
        <div className="cart-products-summary flex-1 bg-white h-[fit-content] rounded-[14px] shadow p-[20px] flex flex-col gap-[10px]">
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Total:</span>
                <span className='text-black text-[16px]'>$340</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Shipping:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Tax:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Discount:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <hr className='my-[15px]'></hr>
            <span className='text-[30px] text-right'>$340</span>
        </div>
    );
}

export default PaymentSummary;