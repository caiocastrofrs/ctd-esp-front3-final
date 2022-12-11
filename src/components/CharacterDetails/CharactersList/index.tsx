import { PropsWithChildren } from 'react'
import Face5Icon from '@mui/icons-material/Face5'
import { List, ListItem, Button, Typography } from '@mui/material'
import Link from 'next/link'

import { Character } from '../types'

interface CharactersListProps extends PropsWithChildren {
  characters: Character[]
}

const CharactersList = ({ characters }: CharactersListProps) => {
  const getCharacterId = (endpoint: string): string => {
    let reversedEndpoint = endpoint.split('').reverse().join('');
    let slashPosition = reversedEndpoint.search('/');

    let reversedId = reversedEndpoint.slice(0 , slashPosition);

    let id = reversedId.split('').reverse().join('');

    return id;
  }

  getCharacterId("http://gateway.marvel.com/v1/public/characters/1009197")


  return (
    <>
    <Typography variant="h5">Lista de personagens presente no quadrinho</Typography>
      <List sx={{
        marginBottom: 5,
        border: '2px solid #7E7E7E',
        borderRadius: 3,
        '&:last-child': { alignSelf: 'right' }
      }}>
        {characters.length > 1
          ? characters.map((character: Character) =>
        <ListItem key={character.name} sx={{ width: '100%', display: 'flex', gap: 3, justifyContent: 'space-between' }}>
        <Face5Icon sx={{ fontSize: 35 }}/>
        <Typography variant="h6">{character.name}</Typography>
        <Link href={`/character/${getCharacterId(character.resourceURI)}`} >
            <Button sx={{ alignSelf: 'right' }}>Ver página</Button>
        </Link>
      </ListItem>)
          : <Typography sx={{ margin: 2 }}>Nenhum personagem</Typography>}
    </List>
      </>
  )
}

export default CharactersList
