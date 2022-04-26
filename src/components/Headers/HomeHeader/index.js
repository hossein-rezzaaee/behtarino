import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';

const HomeHeader = ({ categoriesError, categoriesData, setSearch }) => {
  const router = useRouter();

  const handleOptions = (e, name) => {
    router.push({
      query: {
        ...router.query,
        [name]: e.target.value,
      },
    });
  };
  return (
    <Box
      component="header"
      width="1"
      px="10%"
      gap={2}
      py="30px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {!categoriesError && (
        <FormControl fullWidth>
          <InputLabel id="categories">categories</InputLabel>
          <Select
            labelId="categories"
            value={router.query?.category || ''}
            label="categories"
            onChange={(e) => handleOptions(e, 'category')}
          >
            <MenuItem value="all">show all</MenuItem>
            {categoriesData?.map((ctg) => (
              <MenuItem value={ctg} key={ctg}>
                {ctg}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <FormControl fullWidth>
        <InputLabel id="sort">sort</InputLabel>
        <Select
          labelId="sort"
          value={router.query?.sort || 'asc'}
          label="sort"
          onChange={(e) => handleOptions(e, 'sort')}
        >
          <MenuItem value="asc">ascending</MenuItem>
          <MenuItem value="desc">desceinding</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="search product"
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default HomeHeader;
