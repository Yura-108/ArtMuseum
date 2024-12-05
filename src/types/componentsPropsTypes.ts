import { Artwork } from '@utils/artworkSchema.ts';

export interface CardInfoProps {
  id: number;
  title: string | null;
  artist: string | null;
  on_loan_display: string | null;
}

export interface ContainerSmallCard {
  data: Array<Artwork> | undefined;
}

export interface CardProps {
  artwork: Artwork;
}

export interface ErrorProps {
  children: string;
}

export interface FoundCardsProps {
  debouncedQuery: string;
}

export interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
}