import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import OrderStatusLabel from './OrderStatusLabel';

type SingleOrderReview = {
    id: string;
    orderCode: string;
    status: string;
    date: string;
    price: string;
}
function OrderRow({ order }: { order: SingleOrderReview }) {
    return (
        <div className='bg-white p-[20px] rounded-[10px] flex gap-[20px] shadow justify-between items-center'>
            <span className='order-code'>{order.orderCode}</span>
            <OrderStatusLabel label={order.status} />
            <span className='order-date'>{order.date}</span>
            <span className='order-price'>{order.price}</span>
            <IconButton
                sx={{
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f5f5f5'
                    }
                }}
            >
                <ArrowRightAltIcon style={{ color: 'grey' }} />
            </IconButton>
        </div>
    );
}

export default OrderRow;