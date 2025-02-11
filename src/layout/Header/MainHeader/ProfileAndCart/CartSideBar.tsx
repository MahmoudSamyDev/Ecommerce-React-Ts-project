import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ProductCartCard from './ProductCartCard';
import { useCart, useOpenSideCart } from '../../../../hooks';
import { Link } from 'react-router-dom';


function CartSideBar() {
    const { openSideCart, setOpenSideCart, totalCartPrice } = useOpenSideCart()
    const { productsInCart } = useCart();
    const toggleDrawer = (openSideCart: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpenSideCart(openSideCart);
    };

    const list = () => (
        <Box
            sx={{ width: 350, display: 'flex', flexDirection: 'column', position: 'relative', height: '100%' }}
            role="presentation"
        >
            <header className="flex justify-between items-center border-b p-4">
                <div>
                    <ShoppingCartOutlinedIcon sx={{ color: '#2b3445', cursor: 'pointer', mr: '10px' }} />
                    <span>{productsInCart.length || '0'} Items</span>
                </div>
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon  sx={{ color: '#2b3445', cursor: 'pointer'}}/>
                </IconButton>
            </header>
            <body className="p-4 h-[75%] overflow-y-auto">
                {
                    productsInCart.map((product) => (
                        <ProductCartCard key={product.id} product={product} />
                    ))
                }
            </body>
            <footer className="p-4 flex flex-col items-center justify-center gap-[10px] absolute bottom-0 w-full">
                <button className="font-bold bg-officialRed text-white text-center w-full p-[8px] rounded ease-in-out duration-300 hover:bg-[red]">Checkout Now {totalCartPrice}$</button>
                <Link to="/cart" onClick={toggleDrawer(false)} style={{width: '100%'}}>
                    <button className="text-[red] text-center w-full p-[8px] border border-[red] rounded">View Cart</button>
                </Link>
            </footer>
        </Box>
    );

    return (
        <div>
            <Badge onClick={toggleDrawer(true)} badgeContent={productsInCart?.length} color="primary">
                <ShoppingCartOutlinedIcon sx={{ color: '#2b3445', cursor: 'pointer' }} />
            </Badge>
            <Drawer
                anchor="right"
                open={openSideCart}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default CartSideBar;
