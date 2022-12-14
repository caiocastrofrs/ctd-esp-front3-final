import { GetServerSideProps } from 'next'
import Head from 'next/head'

import CharacterDetails from 'src/components/CharacterDetails'
import { Character } from 'src/components/CharacterDetails/types'
import { getCharacter } from 'src/services/marvel/marvel.service'

const CharactersDetailsPage = (ctx: any) => {
  const character: Character = ctx.character
  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
    <CharacterDetails character={character} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const character = await getCharacter(ctx?.params?.id)
  return {
    props: {
      character
    }
  }
}
export default CharactersDetailsPage
