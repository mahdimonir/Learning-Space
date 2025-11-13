//! Utility types

//* Pick => taken fields
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">;

//* Omit => removal Fields
type ProductWithoutStock = Omit<Product, "stock">;

//* Required => All fields are required.
type ProductWithColor = Required<Product>;

//* Partial => All fields are optional
type OptionalProductFields = Partial<Product>;

//* Readonly => All fields are Readonly
type ProductDetailsReadonly = Readonly<Product>;

//* Record => For empty object
const recordObj: Record<string, unknown> = {};
