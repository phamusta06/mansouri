



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='md:w-1/3 h-1/3 mb-6 mx-6'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent sx={{ backgroundColor: '#404040'   }}>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.com}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}