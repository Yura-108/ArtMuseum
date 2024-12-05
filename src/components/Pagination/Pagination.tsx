import './Pagination.scss';
<<<<<<< HEAD
import CombinedShape from '@assets/images/CombinedShape.svg';
import React, { useState } from 'react';
import { PaginationProps } from '@types/componentsPropsTypes.ts';
import useRandomPageNumber from '@utils/generatorRandomNumber.ts';
import { MAX_PAGE_PAGINATION } from '@constants/nums.ts';
=======
import React, { useEffect, useState } from 'react';
import CombinedShape from '@images/CombinedShape.svg';
import { getNumberOfTotalPages } from '../../utils/APIFunctions';
import { useQuery } from '@tanstack/react-query';

interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
}
>>>>>>> main

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  setActivePage,
}) => {
<<<<<<< HEAD
  const totalPages = useRandomPageNumber(MAX_PAGE_PAGINATION);

  const [currentRangeStart, setCurrentRangeStart] = useState(0);

  const visiblePages = Array.from(
    { length: Math.min(MAX_PAGE_PAGINATION, totalPages - currentRangeStart) },
    (_, index) => currentRangeStart + index++,
  );

  const handleNextRange = () => {
    const nextPage = activePage + 1;
    if (nextPage > totalPages) return;

    if (nextPage >= currentRangeStart + MAX_PAGE_PAGINATION) {
      setCurrentRangeStart((prev) => prev + MAX_PAGE_PAGINATION);
    }

    setActivePage(nextPage);
  };
  console.log(activePage);
  const handlePrevRange = () => {
    const prevPage = activePage - 1;
    if (prevPage < 0) return;

    if (prevPage < currentRangeStart) {
      setCurrentRangeStart((prev) => Math.max(prev - MAX_PAGE_PAGINATION, 0));
    }

    setActivePage(prevPage);
=======
  const [totalPages, setTotalPage] = useState(1);
  const { data } = useQuery({
    queryKey: ['maxPage', activePage],
    queryFn: () => getNumberOfTotalPages(),
  });

  useEffect(() => {
    setTotalPage(data ?? totalPages);
  }, [data]);

  const pagesPerView = 4;
  const [currentRangeStart, setCurrentRangeStart] = useState(0);

  const visiblePages = Array.from(
    { length: Math.min(pagesPerView, totalPages - currentRangeStart) },
    (_, index) => currentRangeStart + index,
  );

  const handleNextRange = () => {
    if (currentRangeStart + pagesPerView < totalPages) {
      setCurrentRangeStart((prev) => prev + pagesPerView);
    }
  };

  const handlePrevRange = () => {
    if (currentRangeStart > 0) {
      setCurrentRangeStart((prev) => prev - pagesPerView);
    }
  };

  const handlePageClick = (page: number) => {
    setActivePage(page++);
>>>>>>> main
  };

  return (
    <div className="containerPagination">
      <div className="pagination">
<<<<<<< HEAD
        <div onClick={handlePrevRange} className="page prev">
          <img src={CombinedShape} alt="CombinedShapePrev" />
        </div>
        {visiblePages.map((page) => (
          <div
            key={page}
            onClick={() => setActivePage(page)}
=======
        {currentRangeStart > 0 && (
          <div onClick={handlePrevRange} className="page prev">
            <img src={CombinedShape} alt="CombinedShapePrev" />
          </div>
        )}
        {visiblePages.map((page) => (
          <div
            key={page}
            onClick={() => handlePageClick(page)}
>>>>>>> main
            className={`page ${activePage === page ? 'active' : ''}`}
          >
            {page + 1}
          </div>
        ))}
<<<<<<< HEAD
        <div onClick={handleNextRange} className="page next">
          <img src={CombinedShape} alt="CombinedShapeNext" />
        </div>
=======
        {currentRangeStart < totalPages - pagesPerView && (
          <div onClick={handleNextRange} className="page next">
            <img src={CombinedShape} alt="CombinedShapeNext" />
          </div>
        )}
>>>>>>> main
      </div>
    </div>
  );
};

export default Pagination;
