import { Container, Typography } from '@mui/material'
import { CharacterDetailsProps } from './types'
import Image from 'next/image'

const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  return (
    <Container sx={{
      width: 'max-content',
      height: 'auto',
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '100px 1fr'
    }}>
      <Container sx={{ gridArea: '1 / 1 / 2 / 2' }}>
        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width="300"
          height="300"
        />
      </Container>
      <Typography variant="h4" sx={{
        gridArea: ' 1 / 2 / 2 / 3'
      }}>{character.name}</Typography>
      <Typography sx={{
        gridArea: '2 / 2 / 3 / 3'
      }}>{character.description ? character.description : 'Nenhuma descrição para este personagem'}</Typography>
    </Container>
  )
}

export default CharacterDetails
