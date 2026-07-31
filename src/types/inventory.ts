export interface Supplier {
    id: number;
    code: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    isActive: boolean;
    registrationDate: string;
}

export interface RegisteredPurchase {
    id: number;
    supplier: string;
    registrationDate: string;
    responsible: string;
    total: number;
}

export type RequestStatus = 'En Espera' | 'Confirmada' | 'Cancelada';

export interface RegisteredRequest {
    id: number;
    code: string;
    registrationDate: string;
    status: RequestStatus;
    supplier: string;
    description: string;
    products: string[];
}

export interface RegisteredCategory {
    id: number;
    category: string;
    subcategories: string[];
}

export interface PurchaseProduct {
    id: string;
    name: string;
    quantity: number;
    category: string;
    subcategory: string;
    unitPrice: number;
    expirationDate: string;
    batch: string;
}

export interface PurchaseLineItem {
    id: string;
    purchaseId: number;
    supplier: string;
    date: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    expirationDate: string;
}