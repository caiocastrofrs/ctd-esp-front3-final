import Head from 'next/head'
import Pagination from '@mui/material/Pagination';
import { Container } from '@mui/system';

import BodySingle from 'src/components/layouts/body/single/body-single'
import Comic from 'src/components/Comic'
import { getComics } from 'src/services/marvel/marvel.service'
import { Comic as ComicType } from 'src/components/Comic/types'
import { useEffect, useState } from 'react';

const Index = () => {
  const [offset, setOffset ] = useState(0);
  const [data, setData] = useState({
    comics: [],
    total: 0
  })

  const currentPage = (offset / 12) + 1;

  const totalPages = data.total / 12;

  const handlePage = (_: any, newPage: number) => {
    if(newPage < currentPage) {
      setOffset(Math.min(offset, (newPage - 1) * 12))
    } else if (newPage > currentPage) {
      setOffset(Math.max(offset, (newPage - 1) * 12))
    }
  }

  const handleComics = async () => {
    const { data:{ results: comics, total} } = await getComics(offset, 12);

    setData({ comics, total })
  }

  useEffect(() => {
    handleComics()
  },[offset])


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Quadrinhos da Marvel por preços acessíveis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={'Comics'}>
        {data.comics && data.comics.map((comic: ComicType) => <Comic key={comic.id} comic={comic} />)}
        <Container sx={{ display: 'flex', justifyContent: 'center', margin: 5}}>
          <Pagination count={Math.round(totalPages)} page={currentPage} onChange={handlePage}/>
        </Container>
      </BodySingle>
    </>
  )
}

export default Index
