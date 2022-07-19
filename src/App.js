import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
    const [disableButton, setButtonState] = useState(false);
    const [buttonColor, setButtonColor] = useState('blue');

    const handleChange = () => {
        setButtonState(!disableButton);
    }

    const changeButtonColor = () => {
        if(buttonColor === 'blue') {
            setButtonColor('red');
        }
        else {
            setButtonColor('blue');
        }
    }

    return (
        <div>
            <button
                disabled={disableButton}
                style={{backgroundColor: disableButton ? 'gray' : buttonColor}}
                onClick={changeButtonColor}
            >
                Test Button
            </button>

            <input id={'checkbox'} type={'checkbox'} onChange={handleChange}/>
            <label htmlFor={'checkbox'}>Disable Button</label>
        </div>
    );
}

export default App;
