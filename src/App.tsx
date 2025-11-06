import { useState, ChangeEvent, memo, useMemo, useDeferredValue } from 'react';
import { generateProducts, filterProducts } from './utils.ts';
import { ProductList } from './ProductList';
import './App.css';

export const App = memo(() => {
  const [filterTerm, setFilterTerm] = useState('');
  const deferredFilterTerm = useDeferredValue(filterTerm);

  const dummyProducts = useMemo(() => generateProducts(), []);
  const filteredProducts = filterProducts(deferredFilterTerm, dummyProducts);

  const updateFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value);
  };

  return (
    <>
      <input className="input" type="text" onChange={updateFilterHandler} value={filterTerm} />
      <ProductList products={filteredProducts} />
    </>
  );
});
