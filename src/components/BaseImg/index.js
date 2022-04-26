import { Box } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';

const BaseImg = ({ src, alt, ...props }) => {
  return (
    <Box width="1" {...props}>
      <Image
        layout="responsive"
        width="200" //for small devices
        height="200"
        objectFit="contain"
        src={src}
        alt={alt}
      />
    </Box>
  );
};

export default BaseImg;
