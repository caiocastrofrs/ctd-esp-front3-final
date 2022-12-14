import { useContext, createContext, PropsWithChildren, useState } from 'react';
import { CartProductType, CartProductContextType } from './types';


const cartContext = createContext<CartProductContextType>({} as CartProductContextType);


export const CartProvider = ({ children }: PropsWithChildren) => {

  const [cartProduct, setCartProduct] = useState<CartProductType>({} as CartProductType);

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
  const { cartProduct, handleProduct } = context;

  return {
    cartProduct,
    handleProduct
  }
}
