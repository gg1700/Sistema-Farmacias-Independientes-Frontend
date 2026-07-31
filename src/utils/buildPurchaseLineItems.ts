import purchasesData from '../data/registeredPurchases.json';
import purchaseProductDetailsData from '../data/purchaseProductDetails.json';
import type { RegisteredPurchase, PurchaseProduct, PurchaseLineItem } from '../types/inventory';

const purchases = purchasesData as RegisteredPurchase[];
const purchaseProductDetailsByPurchaseId = purchaseProductDetailsData as Record<string, PurchaseProduct[]>;

export function buildPurchaseLineItems(): PurchaseLineItem[] {
    const lineItems: PurchaseLineItem[] = [];

    purchases.forEach((purchase) => {
        const products = purchaseProductDetailsByPurchaseId[String(purchase.id)] ?? [];
        products.forEach((product) => {
            lineItems.push({
                id: `${purchase.id}-${product.id}`,
                purchaseId: purchase.id,
                supplier: purchase.supplier,
                date: purchase.registrationDate,
                productName: product.name,
                quantity: product.quantity,
                unitPrice: product.unitPrice,
                expirationDate: product.expirationDate,
            });
        });
    });

    return lineItems;
}