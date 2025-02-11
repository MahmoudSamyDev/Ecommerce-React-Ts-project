import CommentsAndVoucher from './CommentsAndVoucher';
import ShippingEstimates from './ShippingEstimates/ShippingEstimates';


function CartProductSummary() {

    function checkOutProducts() {
        // Implement the logic to checkout the products
        console.log('Checking out products');
    }
    return(
        <div className="cart-products-summary flex-1 bg-white h-[fit-content] rounded-[14px] shadow p-[20px] flex flex-col gap-[10px]">
            <header className='summary-header flex justify-between'>
                <span className='text-[grey] text-[18px]'>Total:</span>
                <span className='text-black text-[25px]'>$340</span>
            </header>
            <hr className='my-[15px]'></hr>
            <CommentsAndVoucher/>
            <hr className='my-[15px]'></hr>
            <ShippingEstimates/>
            <button className="text-officialRed text-center w-full p-[8px] border border-officialRed rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed h-[38px]">Calculate Shipping</button>
            <button
                className="text-white text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 bg-officialRed hover:bg-[#f61225] hover:border hover:border-officialRed h-[38px]"
                onClick={checkOutProducts}
            >
                Checkout Now
            </button>
        </div>
    )
}

export default CartProductSummary;