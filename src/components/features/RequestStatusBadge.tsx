import type { RequestStatus } from '../../types/inventory';

const styleByStatus: Record<RequestStatus, string> = {
    'En Espera': "text-fields",
    'Confirmada': "text-good",
    'Cancelada': "text-danger",
}

interface RequestStatusBadgeProps {
    status: RequestStatus;
}

function RequestStatusBadge({ status }: RequestStatusBadgeProps) {
    return <span className={`font-semibold ${styleByStatus[status]}`}>{status}</span>;
}

export default RequestStatusBadge;