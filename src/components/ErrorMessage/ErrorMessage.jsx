import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ErrorMessage = () => {
  const notify = () => {
    toast.error('Something went bad!', {
      position: 'top-left',
    });
  };

  return (
    <>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </>
  );
};
