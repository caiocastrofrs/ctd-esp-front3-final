import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const Notify = ({ message }: any) => {
  return (
  <Alert severity="info" sx={{ position: "fixed", top: 21, right: 21}}>
    <AlertTitle>Info</AlertTitle>
      {message}
  </Alert>)
}
