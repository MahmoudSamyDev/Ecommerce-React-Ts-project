import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';
import { useState } from 'react';
import { CartProduct_TP } from '../../../../Types';
import { useCart } from '../../../../hooks';


function ProductCartCard({ product }: { product: CartProduct_TP}) {
    const [count, setCount] = useState(1);
    const { setProductsInCart } = useCart();
    
    const handleRemoveProduct = () => {
        setProductsInCart((prevProducts) => prevProducts.filter(p => p.id !== product.id));
    };

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
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.price} $
                    </Typography>
                </div>
                <div className='flex items-center'>
                    <IconButton
                        onClick={() => setCount(count - 1)}
                        size="small"
                        sx={{ marginLeft: 'auto' }}
                    >
                        <Remove />
                    </IconButton>
                    <Typography variant="body2" sx={{ margin: '0 8px' }}>
                        {count}
                    </Typography>
                    <IconButton
                        onClick={() => setCount(count + 1)}
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