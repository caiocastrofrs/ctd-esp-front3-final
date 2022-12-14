import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInput } from './types'
import { TextField, Button, FormControl, Typography } from '@mui/material'
import { useCart } from 'contexts/useCart';
import { formatCheckoutData } from 'utils/formatCheckoutData';
import { sendCheckout } from 'src/services/checkout/checkout.services'; 

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()
  const { cartProduct } = useCart();

  const onSubmit: SubmitHandler<FormInput> = data => {
    const formatedData = formatCheckoutData(data, cartProduct);
    sendCheckout(formatedData);
  }

  return (
    <>
    <FormControl component="form" onSubmit={handleSubmit(onSubmit)}
      sx={{ width: 500, padding: 5, gap: 2, textAlign: 'center', margin: '0 auto' }}>
      <TextField label="First Name" {...register('firstName', { required: true, maxLength: 20 })} />
      {(errors.firstName != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Last Name" {...register('lastName', { required: true, maxLength: 20 })} />
      {(errors.lastName != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Email" {...register('email', { required: true, pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/ })} />
      {(errors.email != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Address" {...register('address', { required: true })} />
      {(errors.address != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Apartment" {...register('apartment', { required: false })} />
      {(errors.apartment != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="City" {...register('city', { required: true })} />
      {(errors.city != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="State" {...register('state', { required: true })} />
      {(errors.state != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Zip Code" {...register('zipCode', { required: true })} />
      {(errors.zipCode != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Credit Card Number" {...register('creditCardNumber', { required: true, minLength: 16, maxLength: 16 })} />
      {(errors.creditCardNumber != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Credit Card Name" {...register('creditCardName', { required: true, minLength: 10, maxLength: 20 })} />
      {(errors.creditCardName != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="Expire Date" {...register('expireDate', { required: true })} />
      {(errors.expireDate != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <TextField label="CVC" {...register('cvc', { required: true, minLength: 3, maxLength: 3 })} />
      {(errors.cvc != null) && <Typography sx={{ color: 'red' }}>Este campo é obrigatório</Typography>}

      <Button type="submit" variant="contained">Enviar</Button>
      </FormControl>
    </>
  )
}

export default CheckoutForm
