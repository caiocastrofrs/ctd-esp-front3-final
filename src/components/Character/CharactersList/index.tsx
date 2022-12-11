import { PropsWithChildren } from "react";
import Face5Icon from '@mui/icons-material/Face5';
import { List, ListItem, Button, Typography } from '@mui/material';
import Link from 'next/link';

import { Character } from "../types";

interface CharactersListProps extends PropsWithChildren {
  characters: Character[],
}

const CharactersList = ({ characters }: CharactersListProps) => {
  console.log(characters);
  return(
    <>
    <Typography variant="h5">Lista de personagens presente no quadrinho</Typography>
      <List sx={{
        marginBottom: 5,
        border: "2px solid #7E7E7E",
        borderRadius: 3,
        '&:last-child': { alignSelf: "right"
        }}}>
        {characters.length > 1 ? 
        characters.map((character: Character) => 
        <ListItem sx={{ width: "100%", display: "flex", gap: 3, justifyContent: "space-between" }}> 
        <Face5Icon sx={{fontSize: 35}}/>
        <Typography variant="h6">{character.name}</Typography>
        <Link href="/">
            <Button sx={{ alignSelf: "right"}}>Ver página</Button>
        </Link>
      </ListItem>)    
      :
        <Typography sx={{ margin: 2 }}>Nenhum personagem</Typography>}
    </List>
      </>
  );
}

export default CharactersList;
