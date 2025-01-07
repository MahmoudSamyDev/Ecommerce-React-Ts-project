interface ProductBox_TP {
    id: number;
    title: string;
    src: string;
}

function ProductBox({ product }: { product: ProductBox_TP }) {
    return (
    <div key={product.id} className="product-nav-item group cursor-pointer relative overflow-hidden rounded-[15px] grow">
            <img 
                src={product.src} 
                className='h-full w-full ease-in-out duration-300 group-hover:scale-105' 
                alt={product.title} 
            />
            <button 
                className="bg-[#eaeaea] text-black py-1 w-[90%] rounded-md absolute bottom-2 left-[50%] transform translate-x-[-50%] z-10 ease-in-out duration-300 group-hover:scale-105 group-hover:bg-black group-hover:text-white">
                {product.title}
            </button>
        </div>
    )
}

export default ProductBox;
