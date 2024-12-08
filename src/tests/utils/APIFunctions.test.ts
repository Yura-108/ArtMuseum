import {
  getPage,
  getArtWork,
  getArtWorks,
  getNumberOfTotalPages,
  getSearch,
} from '@utils/API/APIFunctions.ts';
import { MAX_PAGE_PAGINATION } from '@constants/nums';
import { ARTWORKS_ID_TEMPLATE, ARTWORKS_PARAMS } from '@constants/API';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('APIFunctions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getPage', () => {
    it('fetches the correct data and parses successfully', async () => {
      const mockResponse = {
        pagination: { total_pages: 10 },
        data: [
          {
            id: 1,
            artist_title: 'Artist 1',
            date_display: '2024-01-01',
            date_start: 2024,
            date_end: 2024,
            dimensions: '50x50',
            image_id: '1',
            title: 'Art',
            credit_line: 'Credit',
            on_loan_display: 'On loan',
            artist_display: 'Artist Display',
            thumbnail: { alt_text: 'Thumbnail' },
          },
        ],
      };
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await getPage({ page: 1 });
      expect(fetchMock).toHaveBeenCalledWith(
        ARTWORKS_PARAMS({ page: 1, limit: MAX_PAGE_PAGINATION }),
      );
      expect(result).toEqual(mockResponse.data);
    });

    it('throws an error when fetch fails', async () => {
      fetchMock.mockReject(
        new Error('Failed to fetch Failed to fetch artworks'),
      );
      await expect(getPage({ page: 1 })).rejects.toThrow(
        'Failed to fetch Failed to fetch artworks',
      );
    });

    it('throws an error when validation fails', async () => {
      const invalidResponse = { invalid: 'data' };
      fetchMock.mockResponseOnce(JSON.stringify(invalidResponse));

      await expect(getPage({ page: 1 })).rejects.toThrow('Incorrect data');
    });
  });

  describe('getArtWork', () => {
    it('fetches the artwork by ID and parses successfully', async () => {
      const mockResponse = {
        data: {
          id: 1,
          artist_title: 'Artist 1',
          date_display: '2024-01-01',
          date_start: 2024,
          date_end: 2024,
          dimensions: '50x50',
          image_id: '1',
          title: 'Art',
          credit_line: 'Credit',
          on_loan_display: 'On loan',
          artist_display: 'Artist Display',
          thumbnail: { alt_text: 'Thumbnail' },
        },
      };
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await getArtWork(1);
      expect(fetchMock).toHaveBeenCalledWith(ARTWORKS_ID_TEMPLATE(1));
      expect(result).toEqual(mockResponse.data);
    });

    it('throws an error when fetch fails', async () => {
      fetchMock.mockReject(new Error('Failed to fetch artworks'));
      await expect(getArtWork(1)).rejects.toThrow('Failed to fetch artworks');
    });

    it('throws an error when validation fails', async () => {
      const invalidResponse = { invalid: 'data' };
      fetchMock.mockResponseOnce(JSON.stringify(invalidResponse));

      await expect(getArtWork(1)).rejects.toThrow('Incorrect data');
    });
  });

  describe('getArtWorks', () => {
    it('fetches multiple artworks and handles them correctly', async () => {
      const mockResponses = [
        {
          data: {
            id: 1,
            artist_title: 'Artist 1',
            date_display: '2024-01-01',
            date_start: 2024,
            date_end: 2024,
            dimensions: '50x50',
            image_id: '1',
            title: 'Art',
            credit_line: 'Credit',
            on_loan_display: 'On loan',
            artist_display: 'Artist Display',
            thumbnail: { alt_text: 'Thumbnail' },
          },
        },
        {
          data: {
            id: 1,
            artist_title: 'Artist 2',
            date_display: '2024-01-01',
            date_start: 2024,
            date_end: 2024,
            dimensions: '60x60',
            image_id: '2',
            title: 'Art 2',
            credit_line: 'Credit 2',
            on_loan_display: 'On loan',
            artist_display: 'Artist Display',
            thumbnail: { alt_text: 'Thumbnail' },
          },
        },
      ];

      fetchMock.mockResponses(
        [JSON.stringify(mockResponses[0]), { status: 200 }],
        [JSON.stringify(mockResponses[1]), { status: 200 }],
      );

      const result = await getArtWorks([1, 2]);
      expect(result).toEqual([mockResponses[0].data, mockResponses[1].data]);
    });

    it('throws an error if not all artworks are fetched successfully', async () => {
      fetchMock.mockResponses(
        [JSON.stringify({ data: { id: 1, title: 'Art 1' } }), { status: 200 }],
        ['', { status: 500 }],
      );

      await expect(getArtWorks([1, 2])).rejects.toThrow(
        'Not all artwork have been fetching',
      );
    });
  });

  describe('getNumberOfTotalPages', () => {
    it('fetches the total number of pages successfully', async () => {
      const mockResponse = { pagination: { total_pages: 10 } };
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await getNumberOfTotalPages();
      expect(fetchMock).toHaveBeenCalledWith(
        ARTWORKS_PARAMS({ limit: MAX_PAGE_PAGINATION }),
      );
      expect(result).toBe(10);
    });

    it('throws an error when fetch fails', async () => {
      fetchMock.mockReject(new Error('Failed to fetch artworks'));
      await expect(getNumberOfTotalPages()).rejects.toThrow(
        'Failed to fetch artworks',
      );
    });

    it('throws an error when validation fails', async () => {
      const invalidResponse = { invalid: 'data' };
      fetchMock.mockResponseOnce(JSON.stringify(invalidResponse));

      await expect(getNumberOfTotalPages()).rejects.toThrow('Incorrect data');
    });
  });

  describe('getSearch', () => {
    it('throws an error when fetch fails', async () => {
      fetchMock.mockReject(new Error('Failed to fetch artworks'));
      await expect(getSearch({ q: 'query' })).rejects.toThrow(
        'Failed to fetch artworks',
      );
    });

    it('throws an error when validation fails', async () => {
      const invalidResponse = { invalid: 'data' };
      fetchMock.mockResponseOnce(JSON.stringify(invalidResponse));

      await expect(getSearch({ q: 'query' })).rejects.toThrow('Incorrect data');
    });
  });
});
