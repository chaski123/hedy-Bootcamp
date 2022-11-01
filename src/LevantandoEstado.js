import React from "react";
import { foods, filterItems } from '../src/data.js';
import { useState } from "react";

//Padre
export default function SyncedInputs() {
    const [text, setText] = useState('');

        function handleChange(e) {
        setText(e.target.value);
        }

      return (
        <>
            <h2>Primer Desafio</h2>
                <Input label="First input" text={text} textChanger={handleChange}/>
                <Input label="Second input" text={text} textChanger={handleChange}/>
                <br/>
            <h2>Segundo Desafio</h2>
        <FilterableList/>
        </>
      )
}
//Hijos
    function Input({ label, text, textChanger  }) {
    return (
        <>
        <label>
            {label}
            {' '}
            <input
            value={text}
            onChange={textChanger}
            />
        </label>
        
      </>
    );
}

//Padre
const FilterableList= () =>{
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);
  
    function handleChange(e) {
      setQuery(e.target.value);
    }
  
    return (
      <>
        <SearchBar
          query={query}
          onChange={handleChange}
        />
        <hr />
        <List items={results} />
      </>
    );
  }
  
  function SearchBar({ query, onChange }) {
    return (
      <label>
        Search:{' '}
        <input
          value={query}
          onChange={onChange}
        />
      </label>
    );
  }
  
  function List({ items }) {
    return (
      <table>
        <tbody> 
          {items.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }