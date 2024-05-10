import { Formik, Form, Field } from 'formik';
import s from './SearchBar.module.css';

export const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className={s.searchFormContainer}>
      <Formik
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
