import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test on GifItem', () => {

    const title = 'Pokemon';
    const url = 'https://pokemon.com/pikachu.png';

    test('should match with snapshot', () => {
        const {container} = render(<GifItem title={title} url = {url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should display img with the correct url and alt', () => { 
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('should display the title in the component', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})