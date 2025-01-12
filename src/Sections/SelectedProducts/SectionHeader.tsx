import {ProductsSlides, NewArrivalsProducts, BestSellersProducts, MostPopulerProducts} from '../../utilities/data';


function SectionHeader({ title, setSelectedProducts, active, setActive }: { title: string, setSelectedProducts: any, active: any, setActive: any }) {

    const handleSelectionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const productType = e.currentTarget.getAttribute('selected-product');
        switch (productType) {
            case 'NewArrivalsProducts':
                setSelectedProducts(NewArrivalsProducts);
                setActive({ newArrivals: true, bestSellers: false, mostPopuler: false, all: false });
                break;
            case 'BestSellersProducts':
                setSelectedProducts(BestSellersProducts);
                setActive({ newArrivals: false, bestSellers: true, mostPopuler: false, all: false });
                break;
            case 'MostPopulerProducts':
                setSelectedProducts(MostPopulerProducts);
                setActive({ newArrivals: false, bestSellers: false, mostPopuler: true, all: false });
                break;
            case 'ProductsSlides':
                setSelectedProducts(ProductsSlides);
                setActive({ newArrivals: false, bestSellers: false, mostPopuler: false, all: true });
                break;
            default:
                setSelectedProducts(ProductsSlides);
                setActive({ newArrivals: true, bestSellers: false, mostPopuler: false, all: false });
        }
    };

    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-[20px]">{title}</h2>
                <p>All our new arrivals in an exclusive brand selection</p>
            </div>
            <div className='selection-buttons flex gap-[10px]'>
                <button
                    className={`selection-button border py-[8px] px-[10px] font-bold ${active.newArrivals ? 'bg-darkBlue text-white' : 'bg-background text-[#002c3d]'} border-[#002c3d] rounded-[10px] duration-300 hover:${active.newArrivals ? '' : 'bg-background text-[#002c3d]'}`}
                    selected-product="NewArrivalsProducts"
                    onClick={handleSelectionClick}
                >
                    New Arrivals
                </button>
                <button
                    className={`selection-button border py-[8px] px-[10px] font-bold ${active.bestSellers ? 'bg-darkBlue text-white' : 'bg-background text-[#002c3d]'} border-[#002c3d] rounded-[10px] duration-300 hover:${active.newArrivals ? '' : 'bg-background text-[#002c3d]'}`}
                    selected-product="BestSellersProducts"
                    onClick={handleSelectionClick}
                >
                    Best Sellers
                </button>
                <button
                    className={`selection-button border py-[8px] px-[10px] font-bold ${active.mostPopuler ? 'bg-darkBlue text-white' : 'bg-background text-[#002c3d]'} border-[#002c3d] rounded-[10px] duration-300 hover:${active.newArrivals ? '' : 'bg-background text-[#002c3d]'}`}
                    selected-product="MostPopulerProducts"
                    onClick={handleSelectionClick}
                >
                    Most Populer
                </button>
                <button
                    className={`selection-button border py-[8px] px-[10px] font-bold ${active.all ? 'bg-darkBlue text-white' : 'bg-background text-[#002c3d]'} border-[#002c3d] rounded-[10px] duration-300 hover:${active.newArrivals ? '' : 'bg-background text-[#002c3d]'}`}
                    selected-product="ProductsSlides"
                    onClick={handleSelectionClick}
                >
                    View All
                </button>
            </div>
        </div>
    );
}

export default SectionHeader;