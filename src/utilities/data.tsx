// MUI Icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

// Images for products cards
import Product1 from '../assets//ProductsSlides/Product-1.webp';
import Product2 from '../assets//ProductsSlides/Product-2.webp';
import Product3 from '../assets//ProductsSlides/Product-3.webp';
import Product4 from '../assets//ProductsSlides/Product-4.webp';
import Product5 from '../assets//ProductsSlides/Product-5.webp';
import Product6 from '../assets//ProductsSlides/Product-6.webp';
import Product7 from '../assets//ProductsSlides/Product-7.webp';
import Product8 from '../assets//ProductsSlides/Product-8.webp';

// Navigation Bar data
export const HomeNavigations = [
    {
        title: 'Market',
        elements: ['Electronics', 'Fashion', 'Gadget', 'Gift Store', 'Health and beauty']
    },
    {
        title: 'Gadgets',
        elements: ['Gadget 1', 'Gadget 2', 'Gadget 3', 'Gadget 4', 'Gadget 5']
    },
    {
        title: 'Groceries',
        elements: ['Grocery 1', 'Grocery 2', 'Grocery 3', 'Grocery 4']
    },
    {
        title: 'Fashion',
        elements: ['Fashion 1', 'Fashion 2', 'Fashion 3']
    },
    {
        title: 'Furniture',
        elements: ['Furniture 1', 'Furniture 2', 'Furniture 3']
    },
    {title: 'Gift Store'},
    {title: 'Health an beauty'},
]
export const ShopNavigations = [
    {
        title: 'Perfume',
        elements: ['Men', 'Women', 'Gadget', 'Gifts']
    },
    {
        title: 'Sport',
        elements: ['Gadgets', 'Dumbles', 'Traidmills', 'Carpets']
    },
    {
        title: 'Groceries',
        elements: ['Grocery 1', 'Grocery 2', 'Grocery 3', 'Grocery 4']
    },
    {
        title: 'Fashion',
        elements: ['Men', 'Women', 'Children']
    },
    {
        title: 'Furniture',
        elements: ['Chairs', 'Cupboard', 'Ai assistants']
    },
    {title: 'Gift Store'},
]

// Home Section data
export const valuesCards = [
    {
        id: 1,
        icon: <LocalShippingOutlinedIcon sx={{fontSize: "36px"}}/>,
        title: 'Fast Delivery',
        description: 'Start from $10'
    },
    {
        id: 2,
        icon: <CurrencyExchangeOutlinedIcon sx={{fontSize: "36px"}}/>,
        title: 'Money Guarantee',
        description: '7 Days Back'
    },
    {
        id: 3,
        icon: <TimerOutlinedIcon sx={{fontSize: "36px"}}/>,
        title: '365 Days',
        description: 'For free return'
    },
    {
        id: 4,
        icon: <CreditScoreOutlinedIcon sx={{fontSize: "36px"}}/>,
        title: 'Payment',
        description: 'Secure system'
    }
]
export const Products = [
    {
        id: 1,
        title: 'Toys',
        src: 'src/assets/ProductsNav/Toys.webp'
    },
    {
        id: 2,
        title: 'Sports',
        src: 'src/assets/ProductsNav/Sports.webp'
    },
    {
        id: 3,
        title: 'Gaming',
        src: 'src/assets/ProductsNav/Gaming.webp'
    },
    {
        id: 4,
        title: 'Furniture',
        src: 'src/assets/ProductsNav/Furniture.webp'
    },
    {
        id: 5,
        title: 'Fashion',
        src: 'src/assets/ProductsNav/Fashion.webp'
    },
    {
        id: 6,
        title: 'Cameras',
        src: 'src/assets/ProductsNav/Cameras.webp'
    },
]

export const ProductsSlides = [
    {
        id: 1,
        title: 'Product 1',
        rate: 4.5,
        src: Product1,
        price: 100
    },
    {
        id: 2,
        title: 'Product 2',
        rate: 4.5,
        src: Product2,
        price: 100
    },
    {
        id: 3,
        title: 'Product 3',
        rate: 4.5,
        src: Product3,
        price: 100
    },
    {
        id: 4,
        title: 'Product 4',
        rate: 4.5,
        src: Product4,
        price: 100
    },
    {
        id: 5,
        title: 'Product 5',
        rate: 4.5,
        src: Product5,
        price: 100
    },
    {
        id: 6,
        title: 'Product 6',
        rate: 4.5,
        src: Product6,
        price: 100
    },
    {
        id: 7,
        title: 'Product 7',
        rate: 4.5,
        src: Product7,
        price: 100
    },
    {
        id: 8,
        title: 'Product 8',
        rate: 4.5,
        src: Product8,
        price: 100
    },
]

export const ElectronicsSection = {
    title: 'Electronics',
    navs: [
        {
            id: 1,
            title: 'Wireless Speaker',
        },
        {
            id: 2,
            title: 'Tablet',
        },
        {
            id: 3,
            title: 'Smartphone',
        },
        {
            id: 4,
            title: 'Laptop',
        },
        {
            id: 5,
            title: 'iMac',
        },
        {
            id: 6,
            title: 'Game Controller',
        },
        {
            id: 7,
            title: 'Drone',
        },
        {
            id: 8,
            title: 'Apple',
        },
    ]
}