import { ImageCard } from '../ImgCard/ImageCard ';

export const ImageGallery = ({ imgDataArray, click }) => {
  return (
    <ul>
      {imgDataArray.map(img => (
        <li key={img.id}>
          <ImageCard {...img} onClick={click} />
        </li>
      ))}
    </ul>
  );
};
