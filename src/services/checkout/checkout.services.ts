import { CheckoutInput } from "src/features/checkout/checkout.types";


export const sendCheckout = async (payload: CheckoutInput) => {

  const myInit = {
    method: 'POST',
    body: JSON.stringify(payload)
  }

  try {
    const response = await fetch('/api/checkout', myInit);
    const data = await response.json();
    console.log("data: ",data)
    return data;
  } catch(e) {
    console.log("error: ",e);
  }
}
