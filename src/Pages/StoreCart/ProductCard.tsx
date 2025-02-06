import { Typography } from '@mui/material';
import { CartProduct_TP } from '../../Types';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Add, Remove } from '@mui/icons-material';
import { useCart, useOpenSideCart } from '../../hooks';
import { useState } from 'react';


function ProductCard({ product }: { product: CartProduct_TP}) {
        const [count, setCount] = useState(product.amount);
        const [totalProductPrice, setTotalProductPrice] = useState(product.price * product.amount);
        const { setProductsInCart } = useCart();
        const { setTotalCartPrice } = useOpenSideCart()

        const handleRemoveProduct = () => {
            setProductsInCart((prevProducts) => prevProducts.filter(p => p.id !== product.id));
            setTotalCartPrice((prev: number) => prev - (product.price * count));
        };

    function countChangeHandler(value: number, op: string) {
        if (value < 1) {
            return;
        }
        setCount(value);
        setTotalProductPrice(product.price * value);
        if (op === 'add') {
            setTotalCartPrice((prev: number) => prev + (product.price));
            return;
        }
        setTotalCartPrice((prev: number) => prev - (product.price));
    }
    return (
        <div className='bg-white h-[150px] rounded-[14px] shadow relative'>
            <div className='absolute top-[6px] right-[6px]'>
                <IconButton
                    size="small"
                    onClick={handleRemoveProduct}
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <div className='flex gap-[10px] items-center'>
                <div className='product-image w-[150px] h-[150px]'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='product-details flex flex-col gap-[5px] text-[20px]'>
                    <span>{product.name}</span>
                    <div className='product-price-based-on-ammount text-[grey] text-[15px]'>
                        <span>${product.price} x {count}</span>
                        <span className='text-officialRed ml-[15px]'>${totalProductPrice}</span>
                    </div>
                    <div className='flex items-center'>
                        <IconButton
                            onClick={() => countChangeHandler(count - 1, 'remove')}
                            sx={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}
                            size="small"
                        >
                            <Remove />
                        </IconButton>
                        <Typography variant="body2" sx={{ margin: '0 8px' }}>
                            {count}
                        </Typography>
                        <IconButton
                            onClick={() => countChangeHandler(count + 1, 'add')}
                            sx={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}
                            size="small"
                        >
                            <Add />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;