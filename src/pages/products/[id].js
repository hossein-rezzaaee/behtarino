import BaseHead from '@components/BaseHead';
import BaseImg from '@components/BaseImg';
import { Share } from '@mui/icons-material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { errorHandler } from '@utils/errorHandling';
import { getAverageRGB } from '@utils/imageColor';
import { getProduct } from '@utils/requests';
import { useEffect, useState } from 'react';

const Index = ({ data, error }) => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    getAverageRGB(data?.image)
      .then((res) => setColor([...res]))
      .catch(() => {
        console.log('something went wrong; in detect image color');
      });
  });
  return (
    <>
      <BaseHead title={data?.title} description={data?.description} />
      {error ? (
        <Grid container justifyContent="center">
          {error}
        </Grid>
      ) : (
        <Grid container minHeight="100vh">
          <Grid
            sx={{
              background: color
                ? `linear-gradient(to top, rgba(${color[0] - 10},${
                    color[1] - 20
                  },${color[2] - 20},0.6), rgba(${color[0] + 10},${
                    color[1] + 20
                  },${color[2] + 20},0.3))`
                : 'transparent',
            }}
            item
            container
            xs={12}
            md={4}
            alignItems="center"
            overflow="hidden"
          >
            <Box width="1">
              <BaseImg
                src={data.image}
                alt={data.title}
                sx={{ transform: 'translateX(-20%) rotate(-20deg)' }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            py={8}
            px={[2, 4, 6]}
            justifyContent="space-between"
            container
            flexDirection="column"
            gap={10}
          >
            <Grid container gap={2}>
              <Grid
                container
                display="flex"
                flexDirection="row"
                alignItems="baseline"
                justifyContent="space-between"
                gap={2}
              >
                <Grid item>
                  <Typography variant="h1">{data.title}</Typography>
                </Grid>
                <Grid item display="flex">
                  <Rating
                    sx={{ color: 'primary.main' }}
                    value={data?.rating?.rate}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Typography variant="h5" component="p" color="text.secondary">
                  ${data.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h3">Description</Typography>
              <Typography
                variant="body2"
                component="h4"
                color="grey.dark"
                mt="10px"
              >
                {data.description}
              </Typography>
            </Grid>
            <Grid
              container
              display="flex"
              flexDirection="row"
              alignItems="baseline"
              justifyContent="space-between"
              gap={2}
            >
              <Grid item>
                <Button>
                  <LocalGroceryStoreIcon /> &nbsp;&nbsp;&nbsp; add to cart
                </Button>
              </Grid>
              <Grid item>
                <IconButton size="large" color="text">
                  <Share fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default Index;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const [data, error] = await errorHandler(getProduct(id));
  return {
    props: {
      data,
      error,
    },
  };
};
