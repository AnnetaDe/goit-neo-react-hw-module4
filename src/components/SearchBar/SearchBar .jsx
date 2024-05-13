import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './SearchBar.module.css';

export const SearchBar = ({ setSearchQuery }) => {
  const onSubmit = values => {
    if (!values.search) {
      return;
    }
    setSearchQuery(values.search);
  };
  return (
    <header className={s.searchFormContainer}>
      <Formik
        className={s.formikForm}
        initialValues={{ search: '' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form className={s.searchForm}>
          <label className={s.searchLabel} htmlFor="search">
            Image search
          </label>
          <div>
            <Field
              className={s.searchInput}
              validate={value => {
                if (!value) {
                  return 'The search field is required';
                }
              }}
              name="search"
              id="search"
              type="text"
              placeholder="Search images and photos"
            />
            <ErrorMessage
              className={s.searchError}
              name="search"
              component="span"
            />
          </div>
          <button className="s.submitBtn" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
