import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => { //Event es el cambio que se esta efectuando dentro del input. Desestructuramos y obtenemos target
        setInputValue(target.value); //Actualizamos el valor
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evitar recargar el formulario al dar enter
        if (inputValue.trim().length <= 1) return; //Evitar inputs vacios
        onNewCategory(inputValue.trim()); //Agregar el input nuevo a las categorias
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
                type="text"
                placeholder='Search Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}