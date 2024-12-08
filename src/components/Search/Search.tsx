import './Search.scss';
import FoundCards from '../FoundCards/FoundCards.tsx';
import searchIcon from '@assets/images/search.svg';
import useDebounce from '@utils/hooks/useDebounce.ts';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorMessage, Field, Formik } from 'formik';
import SearchValidationSchema from '@utils/SearchValidationSchema.ts';
import searchValidator from '@utils/searchValidator.ts';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    searchValidator(searchParams.get('search') || ''),
  );
  const debouncedQuery = searchValidator(useDebounce(query));

  useEffect(() => {
    if (debouncedQuery) {
      searchParams.set('search', debouncedQuery);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  }, [debouncedQuery, searchParams, setSearchParams]);

  return (
    <>
      <Formik
        initialValues={{ query }}
        validationSchema={SearchValidationSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values) => {
          setQuery(values.query);
        }}
      >
        {({ values, errors, handleChange }) => (
          <div id={'Search'}>
            <Field
              type="text"
              name="query"
              placeholder="Search Art, Artist, Work..."
              className="search-input"
              value={values.query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                console.log(errors.query);
                if (!errors.query) {
                  setQuery(e.target.value);
                }
              }}
            />
            <ErrorMessage
              name="query"
              component="div"
              className="error-message"
            />
            <div className="icon">
              <img src={searchIcon} alt="search" />
            </div>
          </div>
        )}
      </Formik>
      {debouncedQuery && (
        <ErrorBoundary fallback={<h2>Mistake: failed to load components</h2>}>
          <FoundCards debouncedQuery={debouncedQuery} />
        </ErrorBoundary>
      )}
    </>
  );
};

export default Search;
