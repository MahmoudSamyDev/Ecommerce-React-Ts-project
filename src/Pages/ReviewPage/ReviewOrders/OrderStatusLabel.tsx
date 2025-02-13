import { getStatusColor } from '../../../utilities/functions';

function OrderStatusLabel({ label }: { label: string }) {
    return (
        <span
            style={{ backgroundColor: `${getStatusColor(label)}` }}
            className={`p-[2px] rounded-[10px] w-[90px] text-center h-[fit-content] text-[13px]`}
        >
            {label}
        </span>
    );
}

export default OrderStatusLabel;