import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import BaseImg from '@components/BaseImg';
import { styled } from '@mui/system';
import Link from 'next/link';

const GradientBox = styled(Box)({
  height: '250px',
  position: 'relative',
  ':after': {
    content: '""',
    height: '30%',
    position: 'absolute',
    background: 'linear-gradient(to top, #fff 10%, transparent)',
    bottom: 0,
    width: '100%',
  },
});

const ProductCard = ({ image, title, price, description, id }) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card>
        <BaseImg src={image} alt={title} p={1} />
        <CardContent>
          <GradientBox overflow="hidden">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {description}
            </Typography>
          </GradientBox>
          <Typography variant="body2" color="text.primary">
            $ {price}
          </Typography>
        </CardContent>
        <Box width="1">
          <Link href={`/products/${id}`}>
            <a>
              <Button fullWidth color="primary">
                buy | veiw
              </Button>
            </a>
          </Link>
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductCard;
