import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getComic, getComics } from 'src/services/marvel/marvel.service'
import { Comic as ComicType } from 'src/components/Comic/types'
import ComicDetails from 'src/components/ComicDetails'

export const ComicDetailsPage: NextPage = (ctx: any) => {
  const comic: ComicType = ctx.comic

  return (
  <>
    <Head>
      <title>{comic.title}</title>
    </Head>
    <ComicDetails comic={comic} />
  </>)
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getComics(0, 12)
  const { results: comics } = data

  const paths = comics.map((comic: ComicType) => {
    return {
      params: {
        id: String(comic.id)
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const comicId = Number(ctx?.params?.id)

  const comic = await getComic(comicId)

  return {
    props: {
      comic
    }
  }
}

export default ComicDetailsPage
