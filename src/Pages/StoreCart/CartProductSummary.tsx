function CartProductSummary() {
    return(
        <div className="cart-products-summary flex-1 bg-white h-[100vh] rounded-[14px] shadow p-[20px] flex flex-col gap-[10px]">
            <header className='summary-header flex justify-between'>
                <span className='text-[grey] text-[18px]'>Total:</span>
                <span className='text-black text-[25px]'>$340</span>
            </header>
            <hr className='my-[15px]'></hr>
            <section className='flex flex-col gap-[10px]'>
                <div className='flex gap-[8px] items-center'>
                    <span className='text-black text-[18px]'>Additional Comments</span>
                    <span className='text-officialRed bg-[#ffd3d3] h-[fit-content] text-[12px] px-[8px]'>Note</span>
                </div>
                <form>
                    <label htmlFor="additionalComment" className="sr-only">Additional Comments</label>
                    <textarea id="additionalComment" className='notes-text-input outline outline-[1px] outline-[#dbdbdb] w-full resize-none p-[10px] rounded-[8px] hover:outline-black' style={{ height: '200px' }}></textarea>
                    <label htmlFor="voucher" className="sr-only">Voutcher</label>
                    <input
                        type='text'
                        placeholder="Voucher"
                        id="voucher"
                        className='notes-text-input outline outline-[1px] outline-[#dbdbdb] w-full resize-none p-[10px] rounded-[8px] hover:outline-black my-[12px]'
                        style={{ height: '50px' }}
                    ></input>
                    <button className="text-[red] text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 hover:bg-[#ffd3d3] hover:border hover:border-officialRed">Apply Voucher</button>
                </form>
            </section>
            <hr className='my-[15px]'></hr>
            <section className='shipping-stimations'>
                <div className='flex gap-[8px] items-center'>
                    <span className='text-black text-[18px]'>Shipping Estimates</span>
                </div>
            </section>
        </div>
    )
}

export default CartProductSummary;