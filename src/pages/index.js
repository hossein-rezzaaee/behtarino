import BaseHead from '@components/BaseHead';
import ProductCard from '@components/Cards/Product';
import HomeHeader from '@components/Headers/HomeHeader';
import { Grid } from '@mui/material';
import { errorHandler } from '@utils/errorHandling';
import { getCategories, getProducts } from '@utils/requests';
import { useState } from 'react';

const Index = ({ data, error, categoriesError, categoriesData }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <BaseHead />
      <HomeHeader
        {...{
          categoriesError,
          categoriesData,
          setSearch,
        }}
      />
      <Grid container spacing={2} p={2}>
        {error && (
          <Grid container justifyContent="center">
            {error}
          </Grid>
        )}
        {data &&
          data
            ?.filter((product) =>
              String(product.title).toLowerCase().includes(search.toLowerCase())
            )
            ?.map((product) => <ProductCard key={product.id} {...product} />)}
      </Grid>
    </>
  );
};
export default Index;

export const getServerSideProps = async ({ query }) => {
  const [data, error] = await errorHandler(getProducts(query));
  const [categoriesData, categoriesError] = await errorHandler(getCategories());
  return {
    props: {
      data,
      error,
      categoriesError,
      categoriesData,
    },
  };
};
