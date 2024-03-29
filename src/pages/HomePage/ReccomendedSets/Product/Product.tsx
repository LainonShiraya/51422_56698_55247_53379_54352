import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Bird from '../../../../assets/ReccomendedSets/bird.jpg';
import { Container, Rating } from '@mui/material';
import { BoxTagStyles, ButtonAddToFavoriteStyles } from './ProductStyles';

const Product = () => {
  const title = 'Zimorodek';
  const cena = '299,99zł';
  const image = Bird;
  return (
    <Card
      sx={{
        maxWidth: 330,
        flexGrow: '1',
        backgroundColor: 'inherit',
        border: 'none',
        boxShadow: 'none',
        padding: '0.25rem !important',
      }}
    >
      <Container
        sx={{
          border: '1px solid #e0e0e0',
          paddingInline: '1.2rem !important',
          paddingBlock: '0.5rem !important',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          justifyContent: 'flex-start',
        }}
      >
        <ButtonAddToFavoriteStyles />
        <CardMedia
          sx={{
            height: 200,
            overflow: 'hidden',
            padding: '1rem !important',
            transition: 'all .5s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
          image={image}
          title={title}
        />
        <BoxTagStyles>Nowość</BoxTagStyles>
      </Container>
      <CardContent sx={{ border: 'none', textAlign: 'Left' }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {title}
        </Typography>
        <Rating
          name='size-medium'
          defaultValue={5}
          readOnly
        />
        <Typography
          variant='h6'
          color='text.secondary'
        >
          {cena}
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: 'Left' }}>
        <Button
          size='medium'
          variant='contained'
          disableRipple
          fullWidth
          sx={{
            fontWeight: '700',
            fontSize: '1rem',
            textAlign: 'Left',
            padding: '0.75rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          Dodaj do Koszyka
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
