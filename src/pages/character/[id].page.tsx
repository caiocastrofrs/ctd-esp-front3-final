import CharacterDetails from "src/components/CharacterDetails";
import { Character, CharacterDetailsProps } from "src/components/CharacterDetails/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCharacters, getCharacter } from "src/services/marvel/marvel.service";

const CharactersDetailsPage = ({ character }: CharacterDetailsProps) => {
  return (
    <CharacterDetails character={character} />
  )
}



export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getCharacters(3,12);
  const { results: characters } = data;

  const paths = characters.map((character: Character) => {
    return {
      params: {
        id: String(character.id)
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const characterId = Number(ctx?.params?.id)

  const character = await getCharacter(characterId)

  return {
    props: {
      character
    }
  }

}
export default CharactersDetailsPage;
