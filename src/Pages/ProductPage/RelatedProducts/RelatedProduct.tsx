import { ProductCard_TP } from "../../../Types";
import Rating from '@mui/material/Rating';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useCart, useOpenSideCart } from '../../../hooks';
import SpinnerLoader from '../../../utilities/Loaders/SpinnerLoader/SpinnerLoader';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function RelatedProduct({ product }: { product: ProductCard_TP }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState({status: true, loading: false});
    const { setProductsInCart } = useCart();
    const { setOpenSideCart, setTotalCartPrice } = useOpenSideCart()

    function handleFavorite() {
        setIsFavorite(!isFavorite);
    }

    function addingToCart() {
        setProductsInCart((prev: any) => {
            const updatedProducts = new Set([...prev, product]);
            return Array.from(updatedProducts);
        });
        setTotalCartPrice((prev: any) => prev + product.price);
        setIsInCart({status: false, loading: true});
        setTimeout(() => {
            setIsInCart({status: true, loading: false});
            setOpenSideCart(true);
        }, 1000);
    }

    return (
        <div className="related-product rounded-[14px] overflow-hidden group cursor-pointer duration-300 border relative bg-white w-full md:w-[200px] lg:grow h-full ">
            <div className='discount-container text-left p-[10px]'>
                <span className='text-white text-[10px] p-[4px] font-bold rounded-[4px] bg-officialRed'>20% off</span>
            </div>
            <div className='product-img-container border-b-[1px]'>
                <Link to='/product'>
                    <img src={product.image} alt={product.name} className="h-auto w-full duration-300 group-hover:scale-105"/>
                </Link>
            </div>
            <div className='flex flex-col gap-[5px] p-[10px] w-[90%]'>
                <Link to='/product'>
                    <h3 className='truncate'>{product.name}</h3>
                </Link>
                <Link to='/product'>
                    <span className="flex items-center justify-start">
                        <Rating name="read-only" sx={{fontSize: '16px'}} value={product.rate} readOnly /> <span className="text-[grey] text-[14px]">(0)</span>
                    </span>
                </Link>
                <div className='price-cartAdd flex justify-between'>
                    <Link to='/product'>
                        <p className='text-officialRed'>${product.price} <span className='line-through text-[grey] text-[15px]'>$1200</span></p>
                    </Link>
                    <button
                        className='w-[25px] h-[25px] block flex justify-center items-center rounded-[8px] duration-[0.3s] hover:bg-[#eaeaea] border border-officialRed'
                        onClick={addingToCart}
                    >
                        {isInCart.status && <span className='text-black flex justify-center items-center'><AddIcon sx={{color: '#c50f1e', fontSize: '20px'}}/></span>}
                        {isInCart.loading && <span className='w-full h-full flex justify-center items-center'><SpinnerLoader /></span>}
                    </button>
                </div>
            </div>
            <div className='product-options absolute top-0 right-0 opacity-0 flex flex-col items-center justify-center gap-[10px] p-[10px] duration-300 group-hover:opacity-100'>
                <Link to='/product'>
                    <IconButton aria-label="add to favorites">
                        <VisibilityIcon />
                    </IconButton>
                </Link>
                <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </div>
        </div>
    );
}

export default RelatedProduct;