import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'react-bootstrap/Button';
import { addMulCal, removeMulCal } from '../reducers/mulCalSlice';

Calculator.propTypes = {};

function Calculator(props) {
  const initCal = useSelector((state) => state.cal);
  const initMulCal = useSelector((state) => state.mulCal);

  const dispatch = useDispatch();
  const [input, setInput] = useState(initCal);
  const [cal, setCal] = useState('+');
  const [mulCal, setMulCal] = useState('');
  const lastInput = useRef(0);
  const lastCal = useRef(0);
  const lastBtn = useRef('');
  console.log(initMulCal);
  let total = lastCal.current;
  const calBtn = [
    ['M+', 'M-', 'MR', 'MC'],
    ['AC', '+/-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, ',', '='],
  ];
  console.log('mulCal :' + mulCal);
  const handleClickBtn = (btn) => {
    const newMulCal = [...mulCal];
    newMulCal.push(btn);
    setMulCal(newMulCal);
    if (btn === 'M+') {
      dispatch(addMulCal(mulCal));
      setMulCal('');
    }
    if (btn === 'M-') {
      dispatch(removeMulCal(1));
      setMulCal('');
    }
    if (typeof btn === 'number') {
      const newInput =
        lastBtn.current === cal
          ? btn
          : input.toString() == 0
          ? btn
          : input.toString() + btn;
      setInput(newInput);
      lastInput.current = newInput;
      total = calculate(parseInt(total), cal, parseInt(newInput));
      console.log('total :' + total);
    } else if (btn !== lastBtn.current) {
      lastCal.current = calculate(
        parseInt(total),
        cal,
        parseInt(lastInput.current)
      );
      setCal(btn);

      console.log(lastCal.current);
      setInput(lastCal.current);
    }
    lastBtn.current = btn;
  };

  const calculate = (a, cal, b) => {
    console.log(a, cal, b);
    switch (cal) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case 'X':
        return a * b;
      case '/':
        return a / b;
      case '%':
        return a / 100;
      case '=':
        return total;
      case '+/-':
        a = 0 - a;
        return a;

      default:
        return b;
    }
  };

  console.log(lastCal.current);
  return (
    <>
      <form action="">
        <label htmlFor="" className="cal">
          {input === '' ? 0 : input}
        </label>
      </form>
      <table>
        <tbody>
          {calBtn.map((btn, index) => (
            <tr key={'tr' + index}>
              {btn.map((btn, index) => (
                <td key={'td' + index}>
                  <Button
                    className="btn btn-default btn-cal"
                    onClick={() => handleClickBtn(btn)}
                  >
                    {btn}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Calculator;
