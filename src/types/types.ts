export type Product = {
  id: number;
  name: string;
  description?: string;
  category_id: number;
  product_type: string;
  price: number;
  image_url?: string;
  commission_category_id?: number;
  status: string;
  created_at: string;
  updated_at: string;
  category?: { name: string };
  commissionCategory?: { name: string };
  productStocks?: ProductStock[];
  stock: number; // Added stock property
};

export type ProductStock = {
  branch_id: number;
  stock: number;
  updated_at: string;
  branch?: Branch;
};

export type PaymentType = {
  id: number;
  name: string;
};

export type Staff = {
  id: number;
  staff_name: string;
};

export type Branch = {
  id: number;
  name: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  bundledWith?: number;
  staffId?: number;
};

export type Customer = {
  id: number;
  name: string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  notes?: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  company_id: number;
};

export type CustomerFormData = {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
};

export type TransactionType = {
  id: number;
  subtotal: number;
  discount_value: number;
  discount_type: string;
  total_paid: number;
  change: number;
  created_at: string;
  status: string;
  customer_id?: number | null;
  customer?: Customer | null;
  branch: { id: number; name: string };
  staff?: { id: number; staff_name: string };
  payments: { payment_method: string; amount: number }[];
  items: {
    quantity: number;
    price: number;
    product: { id: number; name: string };
    staff?: { id: number; staff_name: string } | null;
    bundledWith?: {
      product: { name: string };
    } | null;
  }[];
};
