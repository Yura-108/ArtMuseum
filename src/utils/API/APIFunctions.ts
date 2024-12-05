import {
  ARTWORKS_ID_TEMPLATE,
  ARTWORKS_PARAMS,
  SEARCH_URL,
} from '@constants/API.ts';
import { MAX_PAGE_PAGINATION } from '@constants/nums.ts';
import {
  artWorkAndPaginationSchema,
  artWorkDataSchema,
  paginationDataSchema,
  searchAndPaginationSchema,
} from './APIValidator.ts';
import { Artwork } from '@utils/artworkSchema.ts';

export const getPage = async ({
  page,
  limit = MAX_PAGE_PAGINATION,
}: {
  page: number;
  limit?: number;
}) => {
  const response = await fetch(ARTWORKS_PARAMS({ page, limit }));

  if (!response.ok) {
    throw new Error('Failed to fetch paintings');
  }

  const data = await response.json();
  const pagination = artWorkAndPaginationSchema.safeParse(data);
  if (!pagination.success) {
    throw new Error('Incorrect data');
  }
  return pagination.data.data;
};

export const getArtWork = async (id: number) => {
  const response = await fetch(ARTWORKS_ID_TEMPLATE(id));
  if (!response.ok) {
    throw new Error('Failed to fetch paintings');
  }

  const data = await response.json();
  const artWork = artWorkDataSchema.safeParse(data);
  if (!artWork.success) {
    throw new Error('Incorrect data');
  }
  return artWork.data.data;
};

export const getArtWorks = async (ids: number[]): Promise<Artwork[]> => {
  const artWorksPromise = ids.map((id) => getArtWork(id));
  const successfulResults: Artwork[] = [];
  const failedResults: unknown[] = [];

  const results: PromiseSettledResult<Artwork>[] =
    await Promise.allSettled(artWorksPromise);

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      successfulResults.push(result.value); // Успешный результат
    } else if (result.status === 'rejected') {
      failedResults.push(result.reason); // Причина ошибки
    }
  });

  if (failedResults.length) {
    throw new Error(`Not all artwork have been fetching`);
  }
  return successfulResults;
};

export const getNumberOfTotalPages = async (
  { limit }: { limit: number } = { limit: MAX_PAGE_PAGINATION },
): Promise<number> => {
  const response = await fetch(ARTWORKS_PARAMS({ limit }));
  if (!response.ok) {
    throw new Error('Failed to fetch paintings');
  }
  const data = await response.json();
  const pagination = paginationDataSchema.safeParse(data);
  if (!pagination.success) {
    throw new Error('Incorrect data');
  }
  return pagination.data.pagination.total_pages;
};

export const getSearch = async ({
  q,
  size = MAX_PAGE_PAGINATION,
}: {
  q: string;
  size?: number;
}) => {
  const response = await fetch(SEARCH_URL(q, size));

  if (!response.ok) {
    throw new Error('Failed to fetch paintings');
  }

  const data = await response.json();
  const search = searchAndPaginationSchema.safeParse(data);

  if (!search.success) {
    throw new Error('Incorrect data');
  }
  const artWorksIds = search.data.data;
  return await getArtWorks(artWorksIds.map((id) => id.id));
};
