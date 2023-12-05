const apiKey = 'bo5FuOwf5QmN8BP5Zz6J0DcgDuu54gtVzlFjiuzOlPfCA7yHsV2FwQlG'; // Replace 'YOUR_API_KEY' with your actual Pexels API key
const numberOfPhotos = 5;
const apiUrl = `https://api.pexels.com/v1/curated?per_page=${numberOfPhotos}`;

const setImages = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: apiKey
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const photos = data.photos.map(photo => photo.src.original);

    const imageElements = document.querySelectorAll('.image');
    imageElements.forEach((element, index) => {
      element.style.backgroundImage = `url(${photos[index]})`;
      element.style.backgroundSize = 'contain';
    });
  } catch (error) {
    console.error('Error setting images:', error);
  }
};

setImages();
