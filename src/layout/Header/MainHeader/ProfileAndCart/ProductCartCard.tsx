import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';
import { useState } from 'react';
import { CartProduct_TP } from '../../../../Types';
import { useCart, useOpenSideCart } from '../../../../hooks';


function ProductCartCard({ product }: { product: CartProduct_TP}) {
    const [count, setCount] = useState(1);
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
        if (op === 'add') {
            setTotalCartPrice((prev: number) => prev + (product.price));
            return;
        }
        setTotalCartPrice((prev: number) => prev - (product.price));
    }
    return(
        <div className='products-cart'>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    bgcolor: 'background.paper',
                    marginBottom: 2,
                }}
            >
                <Avatar
                    src={product.image}
                    alt={product.name}
                    variant="square"
                    sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <div>
                    <div>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', width: '100%' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {product.price} $
                        </Typography>
                    </div>
                    <div className='flex items-center'>
                        <IconButton
                            onClick={() => countChangeHandler(count - 1, 'remove')}
                            size="small"
                        >
                            <Remove />
                        </IconButton>
                        <Typography variant="body2" sx={{ margin: '0 8px' }}>
                            {count}
                        </Typography>
                        <IconButton
                            onClick={() => countChangeHandler(count + 1, 'add')}
                            size="small"
                        >
                            <Add />
                        </IconButton>
                    </div>
                </div>
                <IconButton onClick={handleRemoveProduct} size="small" sx={{ marginLeft: 'auto' }}>
                    <Close />
                </IconButton>
            </Box>
        </div>
    )
}

export default ProductCartCard;