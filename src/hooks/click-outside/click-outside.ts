// import { useEffect, useState } from 'react';

// export interface useClickOutsideProps {}

// export default function useClickOutside(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   });

//   return debouncedValue;
// }
