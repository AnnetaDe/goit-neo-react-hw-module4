export const ImageCard = ({ urls, alt_description, onClick }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick(urls.regular)}
      />
    </div>
  );
};
