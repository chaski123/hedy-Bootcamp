import { useContext, useState } from 'react';
import { SizeContext} from './SizeContext.js';

export default function Sectionlist({ children }) {
  const [isLargeSet, setIsLarge] = useState();
  const isLargeSetter = () =>{
      setIsLarge(!isLargeSet)
  }
  const Size = useContext(SizeContext);
  return (
    <section className={
      (isLargeSet ? '150px' : '100px')
    }>
      <Size.Provider value={Size}>
        {children}
      </Size.Provider>
    </section>
  );
}