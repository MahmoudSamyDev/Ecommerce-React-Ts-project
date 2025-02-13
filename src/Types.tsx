export interface ProductCard_TP {
    id: number;
    name: string;
    rate: number;
    price: number;
    image: string;
}
export interface CartProduct_TP {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number,
    amount: number,
}

export interface CartContextType {
    productsInCart: CartProduct_TP[];
    setProductsInCart: React.Dispatch<React.SetStateAction<CartProduct_TP[]>>;
}
export interface CartSideBarOpenContextType {
    openSideCart: boolean;
    setOpenSideCart: React.Dispatch<React.SetStateAction<boolean>>;
    totalCartPrice: number;
    setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>;
}