// I use this as a guide, I'm gonna put this in the html later.

export function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}