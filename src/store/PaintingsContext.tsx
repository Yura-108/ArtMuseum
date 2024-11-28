// import React, { createContext, ReactNode, useEffect, useState } from 'react';
// import { fetchPaintings } from '../utils/apiService.ts';
//
// interface Painting {
//   id: string;
//   title: string;
//   artist: string;
//   imageUrl: string;
// }
//
// interface PaintingsContextProps {
//   painting: Painting[];
//   isLoading: boolean;
//   error: string | null;
// }
//
// const PaintingsContext = createContext<PaintingsContextProps | undefined>(
//   undefined,
// );
//
// export const PaintingsProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [paintings, setPaintings] = useState<Painting[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const loadPainting = async () => {
//       setIsLoading(true);
//       setError(null);
//
//       try {
//         const data = await fetchPaintings(1, 10);
//         const formattedData = data.map((painting: any) => ({
//           id: painting.id,
//           title: painting.title,
//           artist: painting.artist_display.split(',')[0].trim(),
//           imageUrl: `https://www.artic.edu/iiif/2/${painting.image_id}/full/200,/0/default.jpg`,
//         }));
//         setPaintings(formattedData);
//       } catch (err) {
//         setError('Failed to fetch paintings');
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//
//     loadPainting();
//   }, []);
//
//   return (
//     <PaintingsContext.Provider value={{ paintings, isLoading, error }}>
//       {children}
//     </PaintingsContext.Provider>
//   );
// };
