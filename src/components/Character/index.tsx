import { PropsWithChildren } from "react";
import { Container, Typography } from '@mui/material';

import { Character } from "./types";
import Image from "next/image";


interface CharacterDetails extends  PropsWithChildren {
  character: Character;
}

const CharacterDetails = ({ character }: CharacterDetails) => {
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



export default CharacterDetails;
