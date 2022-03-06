import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar refresco de la pagina completa
        //console.log(e);
        //console.log('Submit hecho');

        if ( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

// pendiente es propType la primera letra en minuscula
AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
}