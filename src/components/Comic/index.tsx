import { PropsWithChildren, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { Comic as ComicType } from "./types";
interface ComicProps extends PropsWithChildren {
  comic: ComicType,
}

export default function Comic({ comic }:ComicProps) {
  const [description, setDescription] = useState({ text: comic.description && comic.description.slice(0,60), isHide: true});
  
  const handleDescriptionSize = () => {
    if(!description.isHide) {
      setDescription(
        {
          text: comic.description.slice(0,60), 
          isHide: true
        })
    } else {
      setDescription({
          text: comic.description,
          isHide: false
      })
    }
  }


  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <CardContent>
        <Typography gutterBottom component="p">
          {comic.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.text}
          {description.text &&
            <Button onClick={handleDescriptionSize}>
              {description.isHide ? "Ver mais": "Ver menos"}
            </Button>}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", gap: 5, justifyContent: "center", padding: 3}}>
        <Link href={`/comic/${comic.id}`} >
          <Button size="small" variant="contained">Ver detalhes</Button>
        </Link>
        <Button size="small" variant="contained">Comprar</Button>
      </CardActions>
    </Card>
  );
}
