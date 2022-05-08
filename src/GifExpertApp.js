import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
    const  [categories, setCategories] = useState(['One Punch']);

   /* const handleAdd = () => {

        // setCategories( [...categories, 'Naruto'] );
         setCategories( cats => [...cats, 'Naruto'] );
    };
    referencia para un evento onlick para agregar un nuevo valor al arreglo usabdio el useState
    */



  return (

    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />    

        <ol>
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category}
                        category={ category } 
                    />
                ))            
            }
        </ol>
    </>

  );


};
