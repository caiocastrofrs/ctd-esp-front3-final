import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProductPreview from 'components/Checkout/ProductPreview'
import UserInfo from "src/components/UserInfo";


export default function SuccessCheckout() {
  return(
      <Container maxWidth="xs" sx={{ border: '3px solid green', margin: '5rem', padding: 5, borderRadius: 5 }}>
        <Typography variant="h4" sx={{ textAlign: 'center'}}>Aproveite sua compra!</Typography>
        <ProductPreview />
        <UserInfo />
      </Container>
  )
}


