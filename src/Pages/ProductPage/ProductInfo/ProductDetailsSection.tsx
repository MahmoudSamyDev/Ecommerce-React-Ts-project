import { useState } from 'react';
import Rating from '@mui/material/Rating';
// import { useCart, useOpenSideCart } from '../../../hooks';


function ProductDetailsSection() {
    // const { setProductsInCart } = useCart();
    // const { setOpenSideCart } = useOpenSideCart();
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedType, setSelectedTyoe] = useState("");

    const handleSelectOption = (option: any) => {
        setSelectedOption(option);
    };
    const handleSelectType = (option: any) => {
        setSelectedTyoe(option);
    };
    function addProductToCart() {
        console.log(`Product Added to Cart`);
        // setProductsInCart((prev: any) => {
        //     const updatedProducts = new Set([...prev, {}]);
        //     console.log( Array.from(updatedProducts))
        //     return Array.from(updatedProducts);
        // });
        // setOpenSideCart(true);
    }

    return (
        <section className='product-info w-full md:w-[47%] flex flex-col gap-[20px]'>

            <h1 className='text-3xl font-bold'>Product Name</h1>

            <span className='flex gap-[8px] text-[15px] items-center'>
                Rated: 
                <span className="flex items-center">
                    <Rating name="read-only" sx={{fontSize: '16px'}} value={5} readOnly /> <span className="text-[grey] text-[14px]">(0)</span>
                </span>
            </span>

            <div className='options-choices'>
                <h5 className='text-[15px]'>Options</h5>
                <div className="button-group flex gap-[10px]">
                    {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
                    <button
                        key={option}
                        className={`option-button border rounded-[6px] text-[12px] py-[5px] px-[10px] transition ease-in-out duration-300 hover:bg-[#d8d8d8] ${selectedOption === option ? "border-[#f9b8b8]" : ""}`}
                        onClick={() => handleSelectOption(option)}
                    >
                        {option}
                    </button>
                    ))}
                </div>
            </div>

            <div className='options-choices'>
                <h5 className='text-[15px]'>Types</h5>
                <div className="button-group flex gap-[10px]">
                    {["type 1", "type 2", "type 3", "type 4"].map((type) => (
                    <button
                        key={type}
                        className={`option-button border rounded-[6px] text-[12px] py-[5px] px-[10px] transition ease-in-out duration-300 hover:bg-[#d8d8d8] ${selectedType === type ? "border-[#f9b8b8]" : ""}`}
                        onClick={() => handleSelectType(type)}
                    >
                        {type}
                    </button>
                    ))}
                </div>
            </div>

            <div>
                <span className='text-[30px] font-bold text-[#af0000]'>$200</span>
                <span className='block text-[13px]'>Stock Available</span>
            </div>

            <button
                className='bg-[#ac0000] hover:bg-officialRed duration-300 w-[150px] py-[10px] rounded-[10px] text-white text-[15px] transition ease-in-out duration-300 hover:bg-[#cb0000] my-[25px]'
                onClick={addProductToCart}
            >
                Add to Cart
            </button>

            <span className='flex gap-[8px] items-center'>
            <span className='text-[15px]'>Sold By:</span>
            <span className='font-bold cursor-pointer'>Store Name</span>
                </span>
        </section>
    )

}

export default ProductDetailsSection;