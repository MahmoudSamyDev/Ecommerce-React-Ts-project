import { ProductCard_TP } from "../../Types";
import Rating from '@mui/material/Rating';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';



function ProductCard({ product }: { product: ProductCard_TP }) {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
    }
    return (
        <div className="product-card rounded-[14px] overflow-hidden group cursor-pointer duration-300 border hover:border-black relative">
            <img src={product.src} alt={product.title} className="h-auto w-full duration-300 group-hover:scale-105"/>
            <h3>{product.title}</h3>
            <p>{product.price}$</p>
            <span className="flex items-center justify-center">
                <Rating name="read-only" sx={{fontSize: '16px'}} value={product.rate} readOnly /> <span className="text-[grey] text-[14px]">(0)</span>
            </span>
            <button className='w-[90%] block mx-auto rounded-[12px] my-[15px] p-[5px] duration-[0.3s] hover:bg-[#eaeaea] border border-[#999999]'>Add to cart</button>
            <div className='product-options absolute top-0 right-[-100px] flex flex-col items-center justify-center gap-[10px] p-[10px] duration-300 group-hover:right-0'>
                <IconButton aria-label="add to favorites">
                    <VisibilityIcon />
                </IconButton>
                <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </div>
        </div>
    );
}

export default ProductCard;