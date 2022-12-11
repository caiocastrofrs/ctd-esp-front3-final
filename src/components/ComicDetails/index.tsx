import { Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'
import { Comic as ComicType } from '../Comic/types'
import { PropsWithChildren } from 'react'
import CharactersList from '../CharacterDetails/CharactersList'

interface ComicDetailsProps extends PropsWithChildren {
  comic: ComicType
}

const ComicDetails = ({ comic }: ComicDetailsProps) => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 5,
      position: 'relative'
    }}>
      <Link href="/" >
        <Button variant="contained" sx={{
          position: 'absolute',
          left: 0,
          top: 20
        }}>Voltar</Button>
      </Link>
      <Typography variant="h3" sx={{ marginTop: '10rem' }}>{comic.title}</Typography>
      <Image src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`} width="450" height="500"/>
      <Typography variant="h5">R${comic.price},00</Typography>
      {comic.stock > 0
        ? <Button variant="contained">Comprar</Button>
        : <Button variant="contained" disabled>Sem estoque</Button>}
      <CharactersList characters={comic.characters.items}/>
    </Container>)
}

export default ComicDetails
