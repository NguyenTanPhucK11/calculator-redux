import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'react-bootstrap/Button'

Calculator.propTypes = {};

function Calculator(props) {
  const calBtn = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
  ];
  return (
    <table>
      <tbody>
        {calBtn.map((btn, index) => (
          <tr key={'tr' + index}>
            {btn.map((btn, index) => (
              <td key={'td' + index}>
                <Button className="btn btn-default btn-cal">{btn}</Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calculator;
