import { useContext } from 'react';
import { SizeContext } from './SizeContext';

export default function ChildrenPlace({ children }) {
  const Size = useContext(SizeContext);
  switch (Size) {
    case 100:
      return{
        children
      }
    case 150:
        return {
            children
        }
      ;
    default: 
    throw Error('Unknown Size: ' + Size);
    ;
  }
}