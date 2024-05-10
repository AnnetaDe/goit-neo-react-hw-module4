import s from './ImageCard.module.css';
export const ImageCard = ({
  urls,
  alt_description,
  width,
  height,
  onClick,
}) => {
  return (
    <div
      {...(width / height > 1
        ? { className: s.landscape }
        : { className: s.portrait })}
    >
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick(urls.regular)}
      />
    </div>
  );
};
