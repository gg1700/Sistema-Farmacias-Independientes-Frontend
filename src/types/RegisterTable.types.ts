export interface Supplies{
  id: string;
  name: string;
  quantity: number;
  category: string;
  subcategory: string;
  unitPrice: number;
  expirationDate: string;
  batch: string;
}

export interface RegisterTableProps{
  subtitle: string;
  header: string[];
  registers: Supplies[] | Partial<Supplies>[];
  pagination: number;
  tableStyles?: string;
  buttonStyles?: string;
}