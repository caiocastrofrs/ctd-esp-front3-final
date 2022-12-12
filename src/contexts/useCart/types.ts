export type CartProductType = {
  image: string,
  productName: string,
  price: number
}

export type CartProductContextType = {
  cartProduct: CartProductType | null;
  handleProduct: (product: CartProductType) => void;
}
