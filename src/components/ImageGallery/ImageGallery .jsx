import { ImageCard } from '../ImageCard/ImageCard ';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ imgDataArray, click }) => {
  return (
    <ul className={s.gallery}>
      {imgDataArray.map(img => (
        <li className={s.item} key={img.id}>
          <ImageCard {...img} onClick={click} />
        </li>
      ))}
    </ul>
  );
};
