import { Container, Typography } from '@mui/material'
import { CharacterDetailsProps } from './types'
import Image from 'next/image'


const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  return (
    <Container>
      <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      alt={character.name}
      width="150"
      height="150"
      />
      <Typography>{character.name}</Typography>
      <Typography>{character.description}</Typography>

    </Container>
  )
}

export default CharacterDetails
