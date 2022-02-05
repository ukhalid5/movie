const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '909e335233db7b701805825628d36923',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
