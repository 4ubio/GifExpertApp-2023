import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test on AddCategory.jsx', () => {

    test('should change the value on textbox', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox'); //Guardamos la referencia a nuestro textbox
        fireEvent.input(input, {target: {value: "Pokemon"}}); //Disparamos un evento. El primer valor es donde dispararemos el evento, el segundo el valor o evento a disparar
        expect(input.value).toBe("Pokemon") //Una vez disparado, evaluamos
    })

    test('should call onNewCategory if input has value', () => {
        const inputValue = 'Pokemon';
        const onNewCategory = jest.fn(); //Funciones de prueba
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled() //Comprobar que la funcion ha sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1) //Comprobar que la funcion ha sido llamada 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //Comprobar que la funcion haya sido llamada con nuestro valor
    })

    test('should not call onNewCategory if input has no value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0) //Comprobar que la funcion no ha sido llamada
    })
})