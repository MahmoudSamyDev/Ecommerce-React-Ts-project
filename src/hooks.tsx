import { useContext } from 'react';
import { CartContext, CartSideBarOpen } from './App/App';

export const useCart = () => {
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return cart;
}
export const useOpenSideCart = () => {
    const cart = useContext(CartSideBarOpen);

    if (!cart) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return cart;
}
