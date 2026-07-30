export interface Supplies{
  id: string;
  name: string;
  amount: number;
  category: string;
  subcategory: string;
  unitPrice: number;
  expirationDate: string;
  batch: string;
}

export interface RegisterTableProps{
  supplies: Supplies[];
}