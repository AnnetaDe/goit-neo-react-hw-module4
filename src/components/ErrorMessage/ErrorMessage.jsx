import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import s from './ErrorMessage.module.css';

export const ErrorMessage = ({ message }) => {
  toast.error(message);
  return <ToastContainer />;
};
