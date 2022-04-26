export const getAverageRGB = async (src) => {
  if (src)
    return new Promise((resolve) => {
      let context = document.createElement('canvas').getContext('2d');
      context.imageSmoothingEnabled = true;

      let img = new Image();
      img.src = src;
      img.crossOrigin = '';

      img.onload = () => {
        context.drawImage(img, 0, 0, 1, 1);
        resolve(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
      };
    });
};
