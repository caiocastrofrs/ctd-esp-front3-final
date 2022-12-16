export type UserType = {
  name: string
  address: string,
  city: string,
  state:  string,
  cep: string,
  price: number
}


export type UserContextType = {
  user: UserType
  handleUser: (user: UserType) => void
}
