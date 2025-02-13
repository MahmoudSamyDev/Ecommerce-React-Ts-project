import { orderStatusReviewColors } from './data';

export const getStatusColor = (status: string): string | undefined => {
    const statusColor = orderStatusReviewColors.find(item => item.status.toLowerCase() === status.toLowerCase());
    return statusColor ? statusColor.color : undefined;
};