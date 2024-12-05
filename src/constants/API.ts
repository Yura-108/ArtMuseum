export const ARTWORKS_TEMPLATE = 'https://api.artic.edu/api/v1/artworks';
export const ARTWORKS_ID_TEMPLATE = (id: number) =>
  `${ARTWORKS_TEMPLATE}/${id}`;

export const ARTWORKS_PARAMS = ({
  fields = '',
  limit,
  page = 1,
}: Partial<{
  fields: string;
  limit: number;
  page: number;
}>) =>
  `${ARTWORKS_TEMPLATE}?page=${page}&limit=${limit}${fields ? `&fields=${fields}` : ''}`;
export const IMAGE_URL = (id: string | number | null): string => {
  if (!id) {
    return '@assets/images/plug.svg';
  }
  return `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;
};

export const SEARCH_URL = (q: string, size: number) =>
  `${ARTWORKS_TEMPLATE}/search?q=${q}&size=${size}`;
