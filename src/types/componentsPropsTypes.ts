import { Artwork } from '@utils/artworkSchema.ts';
import { SortMethod } from '@types/SortMethod.ts';
import React, { ReactNode } from 'react';

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

export interface SectionTitleProps {
  h4: string;
  h2: string;
}

export interface SortingProps {
  setSortMethod: (method: SortMethod) => void;
}

export interface TitleProps {
  children?: React.ReactNode | string;
}

export interface ValidationSearchProps {
  onSearch: (query: string) => void;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
