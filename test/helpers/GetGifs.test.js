import { getGifs } from "../../src/helpers/getGifs"

describe('Test on GetGifs.js', () => {
    test('should return a gifs array', async() => {
        const gifs = await getGifs('Pokemon')
        expect(gifs.length).toBeGreaterThan(0); //Aqui evaluamos que tenga mas de 1 elemento
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }) //Aqui evaluamos que tenga la esctructura de gifs que esperamos
    })
})