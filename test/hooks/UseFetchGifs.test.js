import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test on UsefetchGifs.js', () => {
    test('should return initial state', () => {
        const {result} = renderHook( () => useFetchGifs('Pikachu')); //Para llamar correctamente a nuestro Hook
        const {images, isLoading} = result.current; 

        //Comprobamos el estado inicial de nuestro Hook
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('should return an array of imgs and isloading in false', async() => {
        const {result} = renderHook( () => useFetchGifs('Pikachu'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        ); //Espera hasta que tengamos resultados de nuestro Fetch Gifs

        const {images, isLoading} = result.current; 

        //Comprobamos el estado inicial de nuestro Hook
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})