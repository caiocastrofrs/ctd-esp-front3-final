import Head from "next/head";
import BodySingle from "src/components/layouts/body/single/body-single";
import Comic from "src/components/Comic";
import { getComics } from "src/services/marvel/marvel.service";
import { Comic as ComicType } from "src/components/Comic/types";


export async function getServerSideProps() {

  const { data } = await getComics(3, 12); 

  const { results: comics } = data;
  return {
    props: {
      comics
    }
  }
}

type IndexProps = {
    comics: ComicType[],
}

const Index = ({ comics }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Quadrinhos da Marvel por preços acessíveis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Comics"}>
        {comics && comics.map((comic: ComicType) => <Comic key={comic.id} comic={comic} />)}
      </BodySingle>
    </>
  );
};

export default Index;
