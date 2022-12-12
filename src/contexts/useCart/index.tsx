import { useContext, createContext, PropsWithChildren, useState } from 'react';
import { CartProductType, CartProductContextType } from './types';


const cartContext = createContext<CartProductContextType | null>(null);


export const CartProvider = ({ children }: PropsWithChildren) => {

  const [cartProduct, setCartProduct] = useState<CartProductType | null>(null);

  const handleProduct = (product: CartProductType) => setCartProduct(product);
  
  const value = { cartProduct, handleProduct };

  return(
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  )
}


export const useCart = () => {
  const context = useContext(cartContext);
  return context;
}
