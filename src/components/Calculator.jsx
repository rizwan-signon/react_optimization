import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const inputDigit = (digit) => {
        if (waitingForSecondOperand) {
            setDisplayValue(String(digit));
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
        }
    };

    const inputDot = () => {
        if (waitingForSecondOperand) {
            setDisplayValue('0.');
            setWaitingForSecondOperand(false);
            return;
        }
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const currentValue = firstOperand || 0;
            const newValue = calculate(currentValue, inputValue, operator);

            setDisplayValue(String(newValue));
            setFirstOperand(newValue);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (firstOperand, secondOperand, operator) => {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-display">{displayValue}</div>
            <div className="calculator-keypad">
                <button className="key-function" onClick={clearDisplay}>AC</button>
                <button className="key-function" onClick={() => setDisplayValue(String(parseFloat(displayValue) * -1))}>+/-</button>
                <button className="key-function" onClick={() => setDisplayValue(String(parseFloat(displayValue) / 100))}>%</button>
                <button className="key-operator" onClick={() => performOperation('/')}>÷</button>

                <button className="key-digit" onClick={() => inputDigit(7)}>7</button>
                <button className="key-digit" onClick={() => inputDigit(8)}>8</button>
                <button className="key-digit" onClick={() => inputDigit(9)}>9</button>
                <button className="key-operator" onClick={() => performOperation('*')}>×</button>

                <button className="key-digit" onClick={() => inputDigit(4)}>4</button>
                <button className="key-digit" onClick={() => inputDigit(5)}>5</button>
                <button className="key-digit" onClick={() => inputDigit(6)}>6</button>
                <button className="key-operator" onClick={() => performOperation('-')}>-</button>

                <button className="key-digit" onClick={() => inputDigit(1)}>1</button>
                <button className="key-digit" onClick={() => inputDigit(2)}>2</button>
                <button className="key-digit" onClick={() => inputDigit(3)}>3</button>
                <button className="key-operator" onClick={() => performOperation('+')}>+</button>

                <button className="key-digit key-zero" onClick={() => inputDigit(0)}>0</button>
                <button className="key-digit" onClick={inputDot}>.</button>
                <button className="key-operator" onClick={() => performOperation('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
