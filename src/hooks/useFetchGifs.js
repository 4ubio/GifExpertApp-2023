import { useState, useEffect } from "react";
import {getGifs} from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => { //Use Effect es para disparar efectos secundarios. Use Effect no puede tener async, ya que devuelve una promesa y espera funciones
        getImages();  //El primer argumento es la función principal a disparar
    }, []) //El segundo es un arreglo de dependencias. Si no hay ninguno significa que se activará la primera vez

    return {
        images,
        isLoading
    }
}