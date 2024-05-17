import { ImageGallery } from './components/ImageGallery/ImageGallery ';
import { LoadMoreBtn } from './components/Button/LoadMoreBtn ';
import { useEffect, useState } from 'react';
import './App.css';
import './servises/unsplashApi';
import { SearchBar } from './components/SearchBar/SearchBar ';
import { fetchArticlesByQuery } from './servises/unsplashApi';
import { Loader } from './components/Loader';
import ModalWindow from './components/ImageModal/ImageModal';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

export const App = () => {
  const [imgData, setImgData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getImgData = async () => {
      try {
        setIsLoading(true);
        const imgDataAnswer = await fetchArticlesByQuery({
          query: searchQuery,
          per_page: 20,
          page: currentPage,
        });
        if (imgDataAnswer.results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImgData(prevState => [...prevState, ...imgDataAnswer.results]);
        setTotalPages(imgDataAnswer.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImgData();
  }, [currentPage, searchQuery]);

  const handleSetQuery = query => {
    setSearchQuery(query);
    setImgData([]);
    setCurrentPage(1);
  };
  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const openModal = imageUrl => {
    setIsOpen(true);
    setModalImg(imageUrl);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {error === 'Network Error' && <ErrorMessage message={error} />}
      <SearchBar setSearchQuery={handleSetQuery} />
      {isEmpty && <p>Nothing was found</p>}

      {<ImageGallery imgDataArray={imgData} click={openModal} />}
      {isLoading && <Loader />}
      {totalPages > currentPage && <LoadMoreBtn onClick={handleLoadMore} />}

      <ModalWindow
        isOpen={modalIsOpen}
        imageUrl={modalImg}
        closeModal={closeModal}
      />

      {totalPages === currentPage && <p>No more fun today!</p>}
    </div>
  );
};

export default App;
