import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs(category);

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'> { category } </h3> 
        {/* nombre dela categoria */}

       { loading && <p className='animate__animated animate__flash'>Loading</p> } 
       {/* con esta condicion le estoy diciendo si loading es true ponga ese parrafo que dice loading si no no ponga nada */}

        <div className='card-grid'> 
        {/* le asigno una clase para el css */}
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }//extraigo las propiedades de las img y las mando a GifGridItem
                        />
                    ))
                    // con este .map le estoy pasando un componente de tipo GifGridItem con una key unica y le mando las propiedades al componente
                }
        
        </div>
    </>

  );

};
