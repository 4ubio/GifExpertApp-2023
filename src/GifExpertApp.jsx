import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return; //Evitar duplicados para las keys
        setCategories([newCategory, ...categories]); //Agrega categorias al arreglo
    }

    return (
        <>
            {/* Title */}
            <h2 className='title'>GifExpertApp ✨</h2>
            <h3 className='sub'> by Sebastián Rubio 🧑🏽‍💻 </h3>
            <h3 className='sub'>2023 version</h3>

            {/* Input */}
            <AddCategory 
                onNewCategory = {onAddCategory} // Enviamos el onAddCategory a nuestro componente
            /> 

            {/* Gif list */}
            {categories.map( category => ( //Map barre cada uno de los elementos del arreglo y los transforma (
                    <GifGrid key={category} category={category}/>
                )) //Los elementos deben tener un Key unico
            }

            {/* Gif item */}
        </>
    )
}
