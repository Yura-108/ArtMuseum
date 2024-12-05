import './Search.scss';
import FoundCards from '../FoundCards/FoundCards.tsx';
import searchIcon from '@assets/images/search.svg';
import useDebounce from '@utils/hooks/useDebounce.ts';
import searchValidator from '@utils/searchValidator.ts';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  }, [debouncedQuery]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const validatedQuery = searchValidator(e.target.value);
      setQuery(validatedQuery);
    },
    [setQuery],
  );

  return (
    <>
      <div id={'Search'}>
        <input
          placeholder={'Search Art, Artist, Work...'}
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <div className={'icon'}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      {debouncedQuery && <FoundCards debouncedQuery={debouncedQuery} />}
    </>
  );
};

export default Search;
