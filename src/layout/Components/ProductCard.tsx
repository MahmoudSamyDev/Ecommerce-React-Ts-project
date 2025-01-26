import { ProductCard_TP } from "../../Types";
import Rating from '@mui/material/Rating';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useCart, useOpenSideCart } from '../../hooks';
import SpinnerLoader from '../../utilities/Loaders/SpinnerLoader/SpinnerLoader';
import { Link } from 'react-router-dom';

function ProductCard({ product }: { product: ProductCard_TP }) {
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
        <div className="product-card rounded-[14px] overflow-hidden group cursor-pointer duration-300 border hover:border-black relative">
            <Link to='/product'>
                <img src={product.image} alt={product.name} className="h-auto w-full duration-300 group-hover:scale-105"/>
            </Link>
            <Link to='/product'>
                <h3>{product.name}</h3>
            </Link>
            <Link to='/product'>
                <p>{product.price}$</p>
            </Link>
            <Link to='/product'>
                <span className="flex items-center justify-center">
                    <Rating name="read-only" sx={{fontSize: '16px'}} value={product.rate} readOnly /> <span className="text-[grey] text-[14px]">(0)</span>
                </span>
            </Link>
            <button
                className='w-[90%] h-[35px] block flex justify-center items-center mx-auto rounded-[12px] my-[15px] p-[5px] duration-[0.3s] hover:bg-[#eaeaea] border border-[#999999]'
                onClick={addingToCart}
            >
                {isInCart.status && <span>Add to Cart</span>}
                {isInCart.loading && <span className='w-full h-full flex justify-center items-center'><SpinnerLoader /></span>}
            </button>
            <div className='product-options absolute top-0 right-[-100px] flex flex-col items-center justify-center gap-[10px] p-[10px] duration-300 group-hover:right-0'>
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

export default ProductCard;