import React from 'react'
import { useParams } from 'react-router-dom';
import products from "../assets/fake-data";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const DetailProduct = () => {
  const { id } = useParams();

  const producto = products.find(prod => prod.id == id);

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/Cart"><Button size="small">Detalle</Button></Link>
          
        </CardActions>
      </Card>
  )
}

export default DetailProduct