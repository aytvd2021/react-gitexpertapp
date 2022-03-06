// usar rafc  
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = ( ) => {

    const [categories, setCategories] = useState(['Boruto'])

//    const handleAdd = () => {
//        //setCategories( [...categories, 'Algo'] )  al final
//        //setCategories( ['Algo', ...categories] )  al inicio
//        //setCategories( categories.concat('Algo') ) 
//        setCategories( cats => [ ...cats, 'Algo'])
//    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

                       
            <ol>
                
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                    )

                }                
            </ol>
        </>
    );

}



export default GitExpertApp;