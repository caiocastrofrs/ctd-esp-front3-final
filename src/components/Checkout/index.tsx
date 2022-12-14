import { Container } from "@mui/material";

import CheckoutForm from "./CheckoutForm";
import ProductPreview from './ProductPreview';


const Checkout = () =>  {

  return (
    <Container sx={{ 
      display: 'flex',
      gap: 2,
      flexDirection: 'row-reverse',
      '@media(max-width: 850px)': 
        { flexDirection: 
          'column-reverse'
      }}}>
      <CheckoutForm /> 
      <ProductPreview />
    </Container>
  )

}

export default Checkout;


