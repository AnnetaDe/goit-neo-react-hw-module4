import { ImageGallery } from './components/ImgGallery/ImageGallery ';
import { LoadMoreBtn } from './components/Button/LoadMoreBtn ';
import { useEffect, useState } from 'react';
import './App.css';
import './servises/unsplashApi';
import { SearchBar } from './components/SearchBar/SearchBar ';
import { fetchArticlesByQuery } from './servises/unsplashApi';
import { Loader } from './components/Loader';
import ModalWindow from './components/Modal/Modal';

export const App = () => {
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [message, setMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(13);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getImgData = async () => {
      try {
        setMessage(false);
        setIsLoading(true);
        const imgDataAnswer = await fetchArticlesByQuery({
          query: searchQuery,
          per_page: perPage,
          page: currentPage,
        });
        if (imgDataAnswer.results.length === 0) {
          return;
        }
        setImgData(prevState => [...prevState, ...imgDataAnswer.results]);
        setTotalPages(imgDataAnswer.total_pages);
        setShowBtn(currentPage < imgDataAnswer.total_pages);
      } catch (error) {
        setMessage(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImgData();
  }, [currentPage, searchQuery, perPage]);

  const handleSetQuery = query => {
    setSearchQuery(query);
    setImgData([]);
  };
  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const openModal = imageUrl => {
    setIsOpen(true);
    console.log('imageUrl', imageUrl);
    setModalImg(imageUrl);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar setSearchQuery={handleSetQuery} />
      {<ImageGallery imgDataArray={imgData} click={openModal} />}
      {isLoading && <Loader />}
      {isEmpty && <p>Nothing was found</p>}
      {totalPages > currentPage && <LoadMoreBtn onClick={handleLoadMore} />}
      {totalPages === currentPage && <p>No more fun today!</p>}
      {message && <p>Something went wrong</p>}

      <ModalWindow
        isOpen={modalIsOpen}
        imageUrl={modalImg}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
