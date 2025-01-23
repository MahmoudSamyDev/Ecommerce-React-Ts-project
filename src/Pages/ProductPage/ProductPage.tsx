import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ProductInfo from './ProductInfo/ProductInfo';
import DescriptionAndReviewsNav from './DescriptionAndReviewsNav';
import FrequentlyBought from './FrequentlyBought/FrequentlyBought';
import OtherStoresRelated from './OtherStoresRelated/OtherStoresRelated';
import RelatedProducts from './RelatedProducts/RelatedProducts';

function ProductPage() {
    return (
        <div className="product-page-container w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <ProductInfo />
                <DescriptionAndReviewsNav />
                <FrequentlyBought />
                <OtherStoresRelated />
                <RelatedProducts />
            </ContainerWrapper>
        </div>
    );
}

export default ProductPage;