export const formatCheckoutData = (personalData: any, orderData: any) => {
  return {
    customer: {
      name: personalData.firstName,
      lastname: personalData.lastName,
      email: personalData.email,
      address: {
        address1: personalData.address,
        address2: personalData.apartment,
        city: personalData.city,
        state: personalData.state,
        zipCode: personalData.zipCode
      }
    },
    card: {
      number: personalData.creditCardNumber,
      cvc: personalData.cvc,
      expDate: personalData.expireDate,
      nameOnCard: personalData.creditCardName
    },
    order: {
      name: orderData.productName,
      image: orderData.image,
      price: orderData.price
    }
  }
}
