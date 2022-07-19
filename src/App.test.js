import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from "./App";

test('should button is not disabled', () => {
    render(<App/>);
    const button = screen.getByText('Test Button');
    expect(button).toBeEnabled();
});

test('Should be button disabled after checkbox is checked', () => {
    render(<App/>);
    const checkbox = screen.getByText('Disable Button');
    fireEvent.click(checkbox);

    expect(screen.getByText('Test Button')).toBeDisabled();

    fireEvent.click(checkbox);
    expect(screen.getByText('Test Button')).toBeEnabled();
});

test('Should disabled button has gray background and enabled red', () => {
    render(<App/>);
    const button = screen.getByText('Test Button');
    const checkbox = screen.getByText('Disable Button');

    fireEvent.click(checkbox);

    expect(button).toHaveStyle('background-color: gray');
});

test('Chandle change should change button color', () => {
    render(<App/>);
    const button = screen.getByText('Test Button');
    const checkbox = screen.getByText('Disable Button');

    // enabled button has blue background
    expect(button).toHaveStyle('background-color: blue');

    //disable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle('background-color: gray');

    //enable button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle('background-color: blue');
});

test('changeButtonColor should change button color', () => {
    render(<App/>);
    const button = screen.getByText('Test Button');
    const checkbox = screen.getByText('Disable Button');

    // enabled button has blue background
    expect(button).toHaveStyle('background-color: blue');

    fireEvent.click(button);
    expect(button).toHaveStyle('background-color: red');

    fireEvent.click(button);
    expect(button).toHaveStyle('background-color: blue');

    fireEvent.click(checkbox);
    expect(button).toHaveStyle('background-color: gray');
});

describe('spaces before camel-case capital letters', () => {
   test('Works for no inner capital letters', () => {
       expect(replaceCamelWithSpaces('Red')).toBe('Red');
   });

   test('Works for one inner capital letters', () => {
       expect(replaceCamelWithSpaces('RedGreen')).toBe('Red Green');
   });

   test('Works for multiple inner capital letters', () => {
         expect(replaceCamelWithSpaces('RedGreenBlue')).toBe('Red Green Blue');
   });
});