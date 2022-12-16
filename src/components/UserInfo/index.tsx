import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useUser } from "contexts/useUser";

export default function UserInfo() {

  const { user } = useUser();

  return(
    <Stack spacing={2} sx={{ padding: 2}}>
        <Typography variant="h6">Nome: {user.name}</Typography>
        <Typography variant="h6">Endereço: {user.address}</Typography>
        <Typography variant="h6">Cidade: {user.city}</Typography>
        <Typography variant="h6">Estado: {user.state}</Typography>
        <Typography variant="h6">CEP: {user.cep}</Typography>
      </Stack>
  )
}
