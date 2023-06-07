import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs'); //Hacer un mock de nuestro custom Hook

describe('Test on GifGrid.jsx', () => {
    
    const category = 'Pokemon'
    
    test('should display loading', () => {

        useFetchGifs.mockReturnValue({ //Simular que va a regresar nuestro mock
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Loading...⌛️'));
        expect(screen.getByText(category));
    })

    test('should display items when images are loaded with useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Pokemon',
                url: 'https://pokemon.com/pokemon.jpg'
            },
            {
                id: 'ABD',
                title: 'Pikachu',
                url: 'https://pokemon.com/pikachu.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({ 
            images: gifs,
            isLoading: false //En false por que ya tendremos imagenes
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2); //Como tenemos 2 gifs en el array, buscamos que sean 2
    })
})