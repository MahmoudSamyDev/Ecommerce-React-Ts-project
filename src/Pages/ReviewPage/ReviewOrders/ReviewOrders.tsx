import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import OrderRow from './OrderRow';
import { reviewOrders } from './utils/data';

function ReviewOrders() {
    return (
        <div className='my-orders flex-1 bg-background p-[0 18px] flex flex-col gap-[30px]'>
            <header className='flex items-center gap-[5px]'>
                <IconButton sx={{ borderRadius: '8px', backgroundColor: '#f5f5f5', hover: 'none' }}>
                    <ShoppingBagIcon style={{ color: '#c50f1e' }} />
                </IconButton>
                <span className='text-[23px]'>My Orders</span>
            </header>
            <section className='orders flex flex-col gap-[25px]'>
                {
                    reviewOrders.map(order => (
                        <OrderRow order={order} key={order.id}/>
                    ))
                }
            </section>
        </div>
    );
}

export default ReviewOrders;