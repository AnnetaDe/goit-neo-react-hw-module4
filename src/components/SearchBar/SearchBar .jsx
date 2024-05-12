import { Formik, Form, Field } from 'formik';
import s from './SearchBar.module.css';
import { toast } from 'react-toastify';
import { FaIcons } from 'react-icons/fa';
export const SearchBar = ({ setSearchQuery }) => {
  const queryValue = query => {
    if (!query.value.trim()) {
      return toast.error('Enter the query', {
        icon: FaIcons.FaExclamationCircle,
      });
    }

    setSearchQuery(query);
  };
  return (
    <div className={s.searchFormContainer}>
      <Formik
        preventDefault
        className={s.searchForm}
        initialValues={{ search: '' }}
        onSubmit={values => {
          setSearchQuery(values.search);
        }}
      >
        <Form>
          <Field
            className={s.searchInput}
            name="search"
            type="text"
            placeholder="Search images and photos"
            required="required"
          />
          {/* <ErrorMessage name="search" component="span" /> */}
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
