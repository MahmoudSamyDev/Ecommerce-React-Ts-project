import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import { Products } from '../../utilities/data';
import ProductBox from './ProductBox';

function ProductNav() {
    return (
        <div className="product-nav-container w-full py-[15px]">
            <ContainerWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {Products.map((product) => (
                        <ProductBox key={product.id} product={product} />
                    ))}
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default ProductNav;
