import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    //apikey= AF3JO0GA6yuqkxoXiwK88HqPspvYl2wK
    // asi renombre data por images "data:images"
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__backInDown'>{ category }</h3>
            { loading && <p>Loading</p> }
            <div className='card-grid'>
        
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
