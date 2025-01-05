import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

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