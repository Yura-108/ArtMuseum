import './Pagination.scss';
import CombinedShape from '@assets/images/CombinedShape.svg';
import React, { useState } from 'react';
import { PaginationProps } from '@types/componentsPropsTypes.ts';
import useRandomPageNumber from '@utils/generatorRandomNumber.ts';
import { MAX_PAGE_PAGINATION } from '@constants/nums.ts';

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  setActivePage,
}) => {
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
  };

  return (
    <div className="containerPagination">
      <div className="pagination">
        <div onClick={handlePrevRange} className="page prev">
          <img src={CombinedShape} alt="CombinedShapePrev" />
        </div>
        {visiblePages.map((page) => (
          <div
            key={page}
            onClick={() => setActivePage(page)}
            className={`page ${activePage === page ? 'active' : ''}`}
          >
            {page + 1}
          </div>
        ))}
        <div onClick={handleNextRange} className="page next">
          <img src={CombinedShape} alt="CombinedShapeNext" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
