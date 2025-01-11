import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProductsSection({category, navTitle, id}: {category: any, navTitle: string, id: string}) {
    return (
        <div className="deals-of-the-day w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="w-full flex gap-10">
                    <CategoryNavigation category={category} navTitle={navTitle}/>
                    <div className='w-[70%]'>
                        <ProductsSlider id={id} slides={4}/>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}

function CategoryNavigation({category, navTitle}: {category: any, navTitle: string}) {
    return (
        <div className="category-navigation bg-white w-[30%] p-[15px] my-auto p-[25px] rounded-[14px]">
            <span className='font-bold block text-[20px]'>{navTitle}</span>
            <div className='navs'>
                {
                    category.navs.map((nav: any) => (
                        <span key={nav.id} className='block my-[10px] cursor-pointer'>{nav.title}</span>
                    ))
                }
            </div>
            <span className='block mt-[20px] text-[15px] font-bold cursor-pointer'>Browse All <ArrowRightAltIcon /> </span>
        </div>
    )
}
export default ProductsSection;