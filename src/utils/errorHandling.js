export const errorHandler = async (asyncFunc) => {
  let data = null,
    error = null;
  await asyncFunc
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      error = err.message;
    });
  return [data, error];
};
