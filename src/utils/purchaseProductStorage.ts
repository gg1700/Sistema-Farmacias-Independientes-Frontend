import type { PurchaseProduct } from '../types/inventory';
import purchaseProductDetailsData from '../data/purchaseProductDetails.json';

const STORAGE_KEY_PREFIX = 'purchaseProducts:';

const purchaseProductDetailsByPurchaseId = purchaseProductDetailsData as Record<string, PurchaseProduct[]>;

export function getStoredProducts(purchaseId: string): PurchaseProduct[] {
    const storedValue = localStorage.getItem(STORAGE_KEY_PREFIX + purchaseId);
    if (storedValue) {
        return JSON.parse(storedValue) as PurchaseProduct[];
    }
    return purchaseProductDetailsByPurchaseId[purchaseId] ?? [];
}

export function saveStoredProducts(purchaseId: string, products: PurchaseProduct[]): void {
    localStorage.setItem(STORAGE_KEY_PREFIX + purchaseId, JSON.stringify(products));
}