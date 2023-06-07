import { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category); //Nuestro custom hook

    return (
        <>
           <div key={category}>

                <h3 className='title animate__animated animate__bounceIn'>{category}</h3>
                {isLoading && (<h2 className='animate__animated animate__bounceIn'>Loading...⌛️</h2>)}

                <div className='card-grid'>
                    {images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {...image} //Para esparcir todas las propiedades dentro de nuestro componente
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}