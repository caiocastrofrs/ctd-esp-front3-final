import Checkout from "src/components/Checkout";
import Head from "next/head";
import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  console.log(ctx);

  return {
    props: {}
  }
}
const  CheckoutPage = () => {

  return (
  <>
    <Head>
      <title>Checkout</title>
    </Head>
    <Checkout />
  </>)
}


export default CheckoutPage;
