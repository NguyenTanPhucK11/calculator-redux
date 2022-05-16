import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'react-bootstrap/Button';

Calculator.propTypes = {};

function Calculator(props) {
  const initCal = useSelector((state) => state.cal);
  const [input, setInput] = useState(initCal);
  const [cal, setCal] = useState('');
  const lastCal = useRef(0);
  const calBtn = [
    ['AC', '+/-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, ',', '='],
  ];
  const handleClickBtn = (btn) => {
    console.log();

    if (typeof btn === 'number') setInput((state) => state + btn);
    else {
      setInput((lastCal.current = input));
      setInput('');
      setCal((state) => (state = btn));
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
