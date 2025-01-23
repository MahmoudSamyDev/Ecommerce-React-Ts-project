import ProductImageSection from './ProductImageSection';
import ProductDetailsSection from './ProductDetailsSection';
function ProductInfo() {
    
    return (
        <div className='min-h-[80vh] h-[fit-content] max-h-[fit-content] px-[45px] py-[20px] flex flex-col md:flex-row justify-between'>
            <ProductImageSection />
            <ProductDetailsSection />
        </div>
    );
}

export default ProductInfo;