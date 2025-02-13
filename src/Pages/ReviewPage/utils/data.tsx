import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';


export const dashboardNav = [
    {
        header: 'Dashboard',
        links: [
            {
                name: 'Orders',
                icon: <ShoppingBagIcon sx={{ fontSize: '20px' }} />
            },
            {
                name: 'Wishlist',
                icon: <FavoriteBorderIcon sx={{ fontSize: '20px' }} />
            },
            {
                name: 'Support Tickets',
                icon: <SupportAgentIcon sx={{ fontSize: '20px' }} />
            },
        ]
    }
];

export const accountSetting = [
    {
        header: 'Account Settings',
        links: [
            {
                name: 'Profile Info',
                icon: <PersonOutlineOutlinedIcon sx={{ fontSize: '20px' }} />
            },
            {
                name: 'Addresses',
                icon: <FmdGoodOutlinedIcon sx={{ fontSize: '20px' }} />
            },
            {
                name: 'Payment Methods',
                icon: <CreditCardOutlinedIcon sx={{ fontSize: '20px' }} />
            },
        ]
    }
]