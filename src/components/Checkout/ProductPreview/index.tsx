import { Container, Typography } from "@mui/material";
import { useCart } from "contexts/useCart";
import Image from "next/image";

const ProductPreview = () => {
  const { cartProduct } = useCart();

  return(
    <Container maxWidth={"xs"} sx={{ marginTop: 5 }}>
      <Typography variant="h5" textAlign={"center"} marginBottom={"3rem"}>{ cartProduct?.productName }</Typography>
      <Image src={cartProduct?.image} alt={cartProduct?.productName} width="400" height="600" />
      <Typography variant="h5" textAlign={"center"}>R${cartProduct?.price},00</Typography>
    </Container>
  )
}


export default ProductPreview;
