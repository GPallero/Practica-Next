// I take this and translated it to the script in 'passingPropsChallenge1.html'
export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}